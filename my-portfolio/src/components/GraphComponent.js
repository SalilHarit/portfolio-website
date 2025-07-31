import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const GraphComponent = () => {
    const [data, setData] = useState([]);
    const [latestData, setLatestData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dateRange, setDateRange] = useState({
        from: new Date('2020-05-01'),
        to: new Date('2020-05-31'),
    });

    // Utility function to format date as DD-MM-YYYY
    const formatDateForAPI = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Format dates in DD-MM-YYYY format
                const params = new URLSearchParams({
                    startDate: formatDateForAPI(dateRange.from),
                    endDate: formatDateForAPI(dateRange.to),
                });

                console.log('Fetching data with params:', params.toString());

                const response = await fetch(`http://localhost:5000/api/generation_data/all?${params}`);
                console.log('API Response Status:', response.status);

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
                }

                const rawData = await response.json();
                console.log('API Response Data:', rawData);

                if (!rawData || rawData.length === 0) {
                    setData([]);
                    setError('No data available for the selected date range');
                    setLoading(false);
                    return;
                }

                const formattedData = rawData.map(item => ({
                    date: new Date(item.DATE_TIME).toLocaleDateString(),
                    plantId: item.PLANT_ID,
                    dcPower: Number(item.DC_POWER) || 0,
                    acPower: Number(item.AC_POWER) || 0,
                    dailyYield: Number(item.DAILY_YIELD) || 0,
                    totalYield: Number(item.TOTAL_YIELD) || 0
                }));

                console.log('Formatted Data:', formattedData);

                const groupedData = formattedData.reduce((acc, curr) => {
                    const existingEntry = acc.find(item => item.date === curr.date);
                    if (existingEntry) {
                        existingEntry.dcPower += curr.dcPower;
                        existingEntry.acPower += curr.acPower;
                        existingEntry.dailyYield += curr.dailyYield;
                        existingEntry.count += 1;
                    } else {
                        acc.push({
                            date: curr.date,
                            dcPower: curr.dcPower,
                            acPower: curr.acPower,
                            dailyYield: curr.dailyYield,
                            count: 1
                        });
                    }
                    return acc;
                }, []);

                const finalData = groupedData.map(item => ({
                    date: item.date,
                    avgDcPower: Number((item.dcPower / item.count).toFixed(2)),
                    avgAcPower: Number((item.acPower / item.count).toFixed(2)),
                    totalDailyYield: Number(item.dailyYield.toFixed(2))
                })).sort((a, b) => new Date(a.date) - new Date(b.date));

                console.log('Final Processed Data:', finalData);

                // Fetch latest data
                const latestResponse = await fetch('http://localhost:5000/api/generation_data/latest');
                if (!latestResponse.ok) {
                    throw new Error(`Error fetching latest data: ${latestResponse.status}`);
                }

                const latestDataResponse = await latestResponse.json();
                console.log('Latest Data:', latestDataResponse);

                setData(finalData);
                setLatestData(latestDataResponse);
                setLoading(false);
            } catch (error) {
                console.error('Error in fetchData:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [dateRange]);

    const handleDateChange = (event) => {
        const { name, value } = event.target;
        setDateRange(prev => ({
            ...prev,
            [name]: new Date(value)
        }));
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <span className="ml-2">Loading data...</span>
            </div>
        );
    }

    return (
        <div className="space-y-6 p-4">
            {error && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <div className="flex">
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Error</h3>
                            <div className="mt-2 text-sm text-red-700">{error}</div>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Select Date Range</h2>
                <div className="flex gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">From</label>
                        <input
                            type="date"
                            name="from"
                            value={dateRange.from.toISOString().split('T')[0]}
                            min="2020-05-01"
                            max="2020-05-31"
                            onChange={handleDateChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">To</label>
                        <input
                            type="date"
                            name="to"
                            value={dateRange.to.toISOString().split('T')[0]}
                            min="2020-05-01"
                            max="2020-05-31"
                            onChange={handleDateChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            {latestData && (
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Current Solar Generation Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h3 className="text-sm font-medium text-gray-500">Plant ID</h3>
                            <p className="text-2xl font-bold">{latestData.PLANT_ID || 'N/A'}</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h3 className="text-sm font-medium text-gray-500">Daily Yield</h3>
                            <p className="text-2xl font-bold">{latestData.DAILY_YIELD?.toFixed(2) || '0'} kWh</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h3 className="text-sm font-medium text-gray-500">Total Yield</h3>
                            <p className="text-2xl font-bold">{latestData.TOTAL_YIELD?.toFixed(2) || '0'} kWh</p>
                        </div>
                    </div>
                </div>
            )}

            {data.length > 0 ? (
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Power Generation Trends</h2>
                    <div className="h-[400px]">
                        <Bar  
                            data={{
                                labels: data.map(item => item.date),
                                datasets: [
                                    {
                                        label: 'Avg DC Power (kW)',
                                        data: data.map(item => item.avgDcPower),
                                        backgroundColor: '#8884d8',
                                    },
                                    {
                                        label: 'Avg AC Power (kW)',
                                        data: data.map(item => item.avgAcPower),
                                        backgroundColor: '#82ca9d',
                                    },
                                    {
                                        label: 'Daily Yield (kWh)',
                                        data: data.map(item => item.totalDailyYield),
                                        backgroundColor: '#ffc658',
                                    },
                                ],
                            }}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                    title: {
                                        display: true,
                                        text: 'Power Generation Trends',
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            ) : (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">No Data Available</h3>
                            <div className="mt-2 text-sm text-yellow-700">
                                No generation data available for the selected date range.
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GraphComponent;
