const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'solargenerationdata'
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB:', err));

const GenerationDataSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    DATE_TIME: String,
    PLANT_ID: String,
    DC_POWER: Number,
    AC_POWER: Number,
    DAILY_YIELD: Number,
    TOTAL_YIELD: Number,
});

const GenerationDataModel = mongoose.model('solar', GenerationDataSchema, 'solar');

// Modified API endpoint for fetching all data with a date range
app.get('/api/generation_data/all', async (req, res) => {
    try {
        const startDate = req.query.startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
        const endDate = req.query.endDate || new Date().toISOString();

        console.log('Received Request for /api/generation_data/all');
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);

        // Fetching data between the start and end date range
        const data = await GenerationDataModel.find({
            DATE_TIME: {
                $gte: startDate,
                $lte: endDate
            }
        }, '-_id DATE_TIME PLANT_ID DC_POWER AC_POWER DAILY_YIELD TOTAL_YIELD')
        .sort({ DATE_TIME: 1 });

        console.log('Fetched Data:', data); // Log the fetched data

        if (!data || data.length === 0) {
            console.log('No Data Found for the given date range');
            return res.status(404).json({ error: 'No data found for the selected date range' });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error('Error in /api/generation_data/all:', error);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Modified endpoint for fetching the latest data
app.get('/api/generation_data/latest', async (req, res) => {
    try {
        console.log('Received Request for /api/generation_data/latest');

        const latestData = await GenerationDataModel.findOne()
            .sort({ DATE_TIME: -1 });

        if (!latestData) {
            console.log('No Latest Data Available');
            return res.status(404).json({ error: 'No latest data found' });
        }

        console.log('Latest Data:', latestData); // Log the fetched data
        res.status(200).json(latestData);
    } catch (error) {
        console.error('Error in /api/generation_data/latest:', error);
        res.status(500).json({ error: 'Server Error' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
