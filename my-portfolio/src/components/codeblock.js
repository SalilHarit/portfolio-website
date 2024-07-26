import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock() {
  const codeString = `
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