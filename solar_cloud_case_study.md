# Solar Cloud Integration — Case Study

**G S Solar Systems, Noida · Havells Sriharicity Factory**

---

| | |
|---|---|
| **Author** | Salil Harit — Mechatronics Engineering, Delhi Skill and Entrepreneurship University (Okhla 2) |
| **Project Guide** | Mr. Prashanth Pai, CEO — G S Solar Systems |
| **Duration** | July 2023 (Multi-day site visits + Cloud development) |
| **Location** | Havells Sriharicity Factory, Andhra Pradesh |
| **Role** | Intern — Cloud Infrastructure, IoT Integration & Field Troubleshooting |

---

## Executive Summary

This case study documents the design, implementation, and field deployment of a cloud-based real-time monitoring system for a large-scale solar photovoltaic plant at the Havells Sriharicity factory. The project spanned field visits for hardware inspection, system troubleshooting, and the full-stack development of a data pipeline connecting on-site Wattmon data loggers to a cloud-hosted dashboard via AWS API Gateway, AWS Lambda, and MongoDB Atlas.

The outcome was a functioning end-to-end pipeline capable of ingesting high-frequency sensor readings from solar inverters, energy meters, and diesel generators — transforming the raw payload and persisting it in a structured database ready for live visualisation.

---

## Problem Statement

The Havells Sriharicity factory operates a 31-inverter solar PV plant spread across multiple locations (main building upper deck, parking lot, and server lab). Key operational challenges included:

- No centralised, remote visibility into generation data across all 31 inverters
- 18 of 31 inverters were actively exporting 11.5 kWh to the grid — causing direct financial losses due to reverse-feed charges
- Communication failures between inverters 17–19 and the data logger (RS485 to TCP/IP conversion issues)
- Cut DC cabling on Inverters 6 and 19 causing generation failures that went undetected without remote monitoring
- No monitoring of diesel generator (DG) sets, preventing performance analysis and fuel cost optimisation
- Cloud backend configured for 31 inverters but algorithm looping back at inverter 19, leaving 12 inverters invisible in the cloud

---

## Solution Architecture

A three-tier IoT-to-cloud pipeline was designed and deployed.

### Tier 1 — On-Site Data Collection

Wattmon data loggers installed at each inverter cluster collect readings via Modbus RS485 protocol. The logger aggregates data from inverters, AC/DC power meters (grid, DG125, DG250), and computes derived values (curtailment, status codes). Loggers communicate over a D-Link 8-port desktop switch network connected via optic fibre across the facility.

### Tier 2 — Cloud Ingestion (AWS)

The data logger is configured to HTTP POST to a registered API endpoint. The request payload is in `application/x-www-form-urlencoded` format containing:

- `key` — MAC address-based device identifier
- `md5sum` — integrity verification hash
- `data` — CSV block with timestamped sensor rows

AWS API Gateway receives the POST, applies a **Velocity Template Language (VTL)** mapping template to transform the URL-encoded payload into a JSON event, and forwards it to an AWS Lambda function.

### Tier 3 — Persistence & Storage (MongoDB Atlas)

The Lambda function (Python, pymongo) parses the CSV, maps each row to a structured document, and inserts it into a MongoDB Atlas collection named `Solar`. Each document stores the Unix timestamp alongside a `values` map of all sensor readings — enabling time-series queries and dashboard integration.

```json
{
  "timestamp": "1691214121",
  "values": {
    "inv_2_AC_Active_Power": "0",
    "inv_2_AC_Frequency": "49.940",
    "meter_grid_AC_Active_Power": "60185.984",
    ...
  }
}
```

---

## Technology Stack

| Layer | Technology |
|---|---|
| Cloud Provider | Amazon Web Services (AWS) |
| API Layer | AWS API Gateway (REST) |
| Compute | AWS Lambda (Python 3.x) |
| Data Transform | Velocity Template Language (VTL) |
| Database | MongoDB Atlas (cloud-hosted) |
| On-site Hardware | Wattmon Data Logger |
| Comms Protocol | Modbus RS485 → TCP/IP → Optic Fibre |
| Payload Format | application/x-www-form-urlencoded |
| Edge Platform | Raspberry Pi |
| Network | D-Link 8-port Desktop Switches |

---

## API Design & Data Pipeline

### Endpoint & Request

```
Method:       POST /S****  (undisclosed production endpoint)
Content-Type: application/x-www-form-urlencoded
```

**Payload keys:**

| Key | Description |
|---|---|
| `key` | Device MAC address (e.g. `9C-95-6E-7B-C9-11`) |
| `md5sum` | MD5 checksum for payload integrity |
| `data` | CSV block — headers row + timestamped data rows |

The CSV data block carries 170+ fields per reading, including per-phase AC voltages/currents, DC string voltages/currents across 12 MPPT channels, kWh totals, status codes, and grid/DG meter values.

### VTL Mapping Template

Because the data logger emits URL-encoded form data, a VTL mapping template in API Gateway extracts the `data` field and constructs a valid JSON body before Lambda invocation. This decouples the constrained logger payload format from the Lambda interface.

### Lambda Function

```python
import pymongo
import json

def lambda_handler(event, context):
    data_lines = event['data'].strip().split("\n")

    client = pymongo.MongoClient("mongodb+srv://*****.mongodb.net/...")
    db = client["wa****"]
    collection = db["so***"]

    headers = None
    for index, data_line in enumerate(data_lines):
        data_fields = data_line.split(",")
        if index == 0:
            headers = data_fields
        else:
            if headers:
                timestamp = data_fields[0]
                data_dict = {
                    "timestamp": timestamp,
                    "values": {header: value for header, value in zip(headers[1:], data_fields[1:])}
                }
                collection.insert_one(data_dict)

    client.close()
    return {"statusCode": 200, "body": json.dumps("Data inserted into MongoDB")}
```

### API Response Codes

| Code | Meaning |
|---|---|
| `200 OK` | Data successfully inserted into MongoDB |
| `415 Unsupported Media Type` | Incorrect request payload format |
| `500 Internal Server Error` | Lambda execution or transformation failure |

**Measured response (production):**
```
Status:  200 OK
Latency: 1,969 ms
Body:    {"statusCode": 200, "body": "\"Data inserted into MongoDB\""}
```

---

## Field Work & Troubleshooting

### Day 1–2 · Site Inspection & Network Mapping

Conducted a full walkthrough of the Havells Sriharicity facility. Documented the inverter layout (24 on upper deck in sets of 4, each set with a dedicated logger), optic fibre routing, and switch topology. Identified the financial impact of grid export from 18 actively exporting inverters and assisted in the investigation of the RS485 communication failure affecting inverters 17–19.

### Day 3 · Inverter Communication Fix

Assisted in switching the communication interface for inverters 17–19 from RS485 to TCP/IP to restore connectivity with the switch. Identified a backend configuration issue: the monitoring algorithm was iterating only to inverter 19, leaving inverters 20–31 (in commissioning) unreported to the cloud. Temporary mitigation via RS485 switching was implemented pending full installation.

### Day 4 · Hardware Repair & DG Integration

Investigated generation failures on Inverter 6 and Inverter 19. After removing cable management panels and running continuity tests, discovered a physically cut cable between Inverter 6 and DCDB box fuse 3. Replaced wiring, re-terminated male and female MC4 connectors, and verified recovery via Wattmon cloud remote monitoring — generation data confirmed live.

Also obtained IP addresses for the DG sets from the factory utility in-charge and began backend configuration on the cloud system to enable DG monitoring and data transmission.

---

## Outcomes & Impact

| Metric | Result |
|---|---|
| End-to-end pipeline | Functional (logger → AWS → MongoDB) |
| API latency (measured) | ~1,969 ms · 200 OK confirmed |
| Data fields per reading | 170+ sensor values per timestamp |
| Inverter 6 & 19 recovery | Cables repaired, generation confirmed live |
| Grid export issue | Identified and escalated for financial mitigation |
| DG integration | IP obtained, backend configuration initiated |
| RS485 comms fix | Inverters 17–19 restored to cloud visibility |

---

## Challenges & Learnings

### Technical Challenges

- **VTL debugging** — Velocity Template Language errors return generic 500 responses with minimal diagnostics. Significant iteration was required to craft a mapping template compatible with the unique 170-field URL-encoded payload
- **Lambda dependency packaging** — standard Python Lambda environments lack pymongo; bundling the library as a ZIP layer was required for MongoDB connectivity
- **Testing constraints** — tools like Postman/Insomnia caused repeated 415 errors due to preflight header modifications altering Content-Type and payload encoding. A known limitation documented in the project
- **Backend loop misconfiguration** — RS485 to TCP/IP bridging required precise configuration of the polling parameters to ensure all 31 inverters were covered

### Field Challenges

- MC4 connector replacement in a live industrial environment required careful safety procedures and continuity verification before reconnection
- DG set access required factory utility management approval, delaying integration by one site visit

### Key Learnings

- Full-stack cloud integration requires simultaneous fluency in hardware protocols (Modbus RS485), API design (REST, VTL), serverless compute (Lambda), and NoSQL data modelling (MongoDB)
- Field diagnostics and remote monitoring are complementary: remote data revealed the generation anomaly; on-site inspection identified the physical root cause (cut cable)
- Designing for constrained embedded clients (data loggers with fixed payload formats) requires robust server-side transformation layers rather than modifying the device

---

## Future Work

- Complete installation of inverters 20–31 (parking lot and server lab) and extend cloud backend polling loop to cover all 31 inverters
- Build real-time visualisation dashboard (Raspberry Pi + MongoDB) for live generation graphs
- Enable full DG set monitoring pipeline with data transmission to MongoDB
- Implement input validation in the Lambda function and add API key-based authentication for endpoint security
- Evaluate rate-limiting strategy for the API Gateway endpoint to prevent data flooding from misconfigured loggers

---

## Acknowledgements

Special thanks to Mr. Prashanth Pai (CEO, G S Solar Systems) for his mentorship, technical guidance, and for providing hands-on access to a live industrial solar plant environment. This project provided invaluable real-world exposure to the intersection of renewable energy systems, industrial networking, and cloud infrastructure.

---

*Salil Harit · Delhi Skill and Entrepreneurship University · Mechatronics Engineering · 2023*
