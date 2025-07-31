import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock() {
  const codeString = `
//request payload [key=9C-95-6E-7B-C9-11&md5sum=b156d0c8ada364f1a7141eac396510d4&data=ts,inv_2_AC_Active_Power,inv_2_AC_Reactive_Power,inv_2_AC_Frequency,inv_2_AC_Voltage_AN,inv_2_AC_Current_A,inv_2_AC_Active_Power_A,inv_2_AC_PF_A,inv_2_AC_Voltage_BN,inv_2_AC_Current_B,inv_2_AC_Active_Power_B,inv_2_AC_PF_B,inv_2_AC_Voltage_CN,inv_2_AC_Current_C,inv_2_AC_Active_Power_C,inv_2_AC_PF_C,inv_2_DC_Voltage_1,inv_2_DC_Current_1,inv_2_DC_Power_1,inv_2_DC_Voltage_2,inv_2_DC_Current_2,inv_2_DC_Power_2,inv_2_DC_Voltage_3,inv_2_DC_Current_3,inv_2_DC_Power_3,inv_2_DC_Voltage_4,inv_2_DC_Current_4,inv_2_DC_Power_4,inv_2_DC_Voltage_5,inv_2_DC_Current_5,inv_2_DC_Power_5,inv_2_DC_Voltage_6,inv_2_DC_Current_6,inv_2_DC_Power_6,inv_2_DC_Voltage_7,inv_2_DC_Current_7,inv_2_DC_Power_7,inv_2_DC_Voltage_8,inv_2_DC_Current_8,inv_2_DC_Power_8,inv_2_DC_Voltage_9,inv_2_DC_Current_9,inv_2_DC_Power_9,inv_2_DC_Voltage_10,inv_2_DC_Current_10,inv_2_DC_Power_10,inv_2_DC_Voltage_11,inv_2_DC_Current_11,inv_2_DC_Power_11,inv_2_DC_Voltage_12,inv_2_DC_Current_12,inv_2_DC_Power_12,inv_2_kWh_Day_Active,inv_2_kWh_Total_Active,inv_2_Status_Code,inv_2_Event_Code,inv_2_percent,inv_1_AC_Active_Power,inv_1_AC_Reactive_Power,inv_1_AC_Frequency,inv_1_kWh_Total_Active,inv_1_kWh_Day_Active,inv_1_Status_Code,inv_1_Event_Code,inv_1_Event_Code_2,inv_1_Event_Code_3,inv_1_Event_Code_4,inv_1_Event_Code_5,inv_1_DC_Voltage_1,inv_1_DC_Current_1,inv_1_DC_Voltage_2,inv_1_DC_Current_2,inv_1_DC_Voltage_3,inv_1_DC_Current_3,inv_1_DC_Power_1,inv_1_DC_Power_2,inv_1_DC_Power_3,inv_1_AC_Voltage_AN,inv_1_AC_Current_A,inv_1_AC_Voltage_BN,inv_1_AC_Current_B,inv_1_AC_Voltage_CN,inv_1_AC_Current_C,inv_1_Temperature_Internal,inv_1_Current_String_1,inv_1_Current_String_2,inv_1_Current_String_3,inv_1_Current_String_4,inv_1_Current_String_5,inv_1_Current_String_6,inv_1_Current_String_7,inv_1_Current_String_8,inv_1_Current_String_9,inv_1_Current_String_10,inv_1_Current_String_11,inv_1_Current_String_12,inv_1_percent,meter_grid_AC_Active_Power,meter_grid_AC_Reactive_Power,meter_grid_AC_Apparent_Power,meter_grid_kWh_Total_Import,meter_grid_AC_Voltage_AN,meter_grid_AC_Voltage_BN,meter_grid_AC_Voltage_CN,meter_grid_AC_Voltage_AB,meter_grid_AC_Voltage_BC,meter_grid_AC_Voltage_CA,meter_grid_AC_Current_A,meter_grid_AC_Current_B,meter_grid_AC_Current_C,meter_grid_AC_Active_Power_A,meter_grid_AC_Active_Power_B,meter_grid_AC_Active_Power_C,meter_grid_AC_Apparent_Power_A,meter_grid_AC_Apparent_Power_B,meter_grid_AC_Apparent_Power_C,meter_grid_AC_Reactive_Power_A,meter_grid_AC_Reactive_Power_B,meter_grid_AC_Reactive_Power_C,meter_grid_AC_PF,meter_grid_AC_Frequency,meter_grid_kVAh_Total_Import,meter_grid_kVARh_Total_Import,meter_grid_kVARh_Total_Export,meter_DG125_AC_Active_Power,meter_DG125_AC_Reactive_Power,meter_DG125_AC_Apparent_Power,meter_DG125_kWh_Total_Import,meter_DG125_AC_Voltage_AN,meter_DG125_AC_Voltage_BN,meter_DG125_AC_Voltage_CN,meter_DG125_AC_Voltage_AB,meter_DG125_AC_Voltage_BC,meter_DG125_AC_Voltage_CA,meter_DG125_AC_Current_A,meter_DG125_AC_Current_B,meter_DG125_AC_Current_C,meter_DG125_AC_Active_Power_A,meter_DG125_AC_Active_Power_B,meter_DG125_AC_Active_Power_C,meter_DG125_AC_Apparent_Power_A,meter_DG125_AC_Apparent_Power_B,meter_DG125_AC_Apparent_Power_C,meter_DG125_AC_Reactive_Power_A,meter_DG125_AC_Reactive_Power_B,meter_DG125_AC_Reactive_Power_C,meter_DG125_AC_PF,meter_DG125_AC_Frequency,meter_DG125_kVAh_Total_Import,meter_DG125_kVARh_Total_Import,meter_DG125_kVARh_Total_Export,meter_DG250_AC_Active_Power,meter_DG250_AC_Reactive_Power,meter_DG250_AC_Apparent_Power,meter_DG250_kWh_Total_Import,meter_DG250_AC_Voltage_AN,meter_DG250_AC_Voltage_BN,meter_DG250_AC_Voltage_CN,meter_DG250_AC_Voltage_AB,meter_DG250_AC_Voltage_BC,meter_DG250_AC_Voltage_CA,meter_DG250_AC_Current_A,meter_DG250_AC_Current_B,meter_DG250_AC_Current_C,meter_DG250_AC_Active_Power_A,meter_DG250_AC_Active_Power_B,meter_DG250_AC_Active_Power_C,meter_DG250_AC_Apparent_Power_A,meter_DG250_AC_Apparent_Power_B,meter_DG250_AC_Apparent_Power_C,meter_DG250_AC_Reactive_Power_A,meter_DG250_AC_Reactive_Power_B,meter_DG250_AC_Reactive_Power_C,meter_DG250_AC_PF,meter_DG250_AC_Frequency,meter_DG250_kVAh_Total_Import,meter_DG250_kVARh_Total_Import,meter_DG250_kVARh_Total_Export,eb_state,kWh_Curtailment_Day,kWh_Curtailment_Lifetime,kWh_Curtailment_DG_Day,kWh_Curtailment_Grid_Day
1691214121,0,0,49.940,232.100,0.120,0,0,233.100,0.100,0,0,235.400,0.120,0,0,490.100,0,0,490.200,0,0,276.200,0,0,490,0,0,490,0,0,490.100,0,0,490.400,0,0,490.100,0,0,489.900,0,0,489.600,0,0,96.600,0,0,96,0,0,0,26852.400,0,0,0,0,0,0,16095,170.800,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60185.984,-14305.585,61893.344,11868.400,234.840,233.440,232.690,405.390,403.900,404.800,87.664,103.856,72.824,20249.582,23392.458,16985.238,20642.376,24265.726,16985.238,-4007.763,-6451.228,-3846.593,-0.972,49.940,12596.900,645.800,2867,0,0,0,350.200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,357.800,1.900,66.700,0,0,0,883.300,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,918.800,122.800,94.300,0,0,0,0,0
1691214158,0,0,49.920,232.300,0.110,0,0,232.800,0.100,0,0,235,0.130,0,0,493.400,0,0,493.600,0,0,277.200,0,0,493.300,0,0,493.300,0,0,493.400,0,0,493.800,0,0,493.300,0,0,493.300,0,0,493,0,0,97.200,0,0,96.700,0,0,0,26852.400,0,0,0,0,0,0,16095,170.800,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,61599.024,-14434.688,63296.924,11869,234.630,233.250,232.460,405.020,403.540,404.420,89.472,105.704,75.400,20582.072,23784.232,17527.482,20992.814,24655.458,17527.482,-4132.382,-6496.302,-3915.754,-0.973,49.923,12597.600,645.800,2867.200,0,0,0,350.200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,357.800,1.900,66.700,0,0,0,883.300,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,918.800,122.800,94.300,0,0,0,0,0
]
import pymongo
import json

def lambda_handler(event, context):
    data_lines = event['data'].strip().split("\\n")  # Access the 'data' field from the event
    client = pymongo.MongoClient("mongodb+srv://********.mongodb.net/?retryWrites=true&w=majority")
    db = client["wa****"]
    collection = db["so***"]
    headers = None
    for index, data_line in enumerate(data_lines):
        data_fields = data_line.split(",")
        
        if index == 0:
            headers = data_fields  # Save the headers from the first line
        else:
            if headers:  # Skip if headers are not available
                timestamp = data_fields[0]  # Assuming the first field is a timestamp
                data_dict = {
                    "timestamp": timestamp,
                    "values": {header: value for header, value in zip(headers[1:], data_fields[1:])}
                }
                # Insert the data into the collection
                collection.insert_one(data_dict)
    
    client.close()
    
    return {
        "statusCode": 200,
        "body": json.dumps("Data inserted into MongoDB")
    }
  `;

  return (
    <SyntaxHighlighter language="python" style={darcula}>
      {codeString}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;