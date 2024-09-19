## Healthcare Services API

This is a simple Node.js API using Express and MongoDB to manage a list of healthcare services. The API allows users to add, retrieve, update, and delete healthcare services, with basic validation to ensure required fields are properly filled.

## Features

- Add a new service: Create a new healthcare service with fields like service name, description, and price.
- Get all services: Retrieve a list of all available healthcare services.
- Update a service: Modify the details of an existing service.
- Delete a service: Remove a service from the list.
- Basic validation: Ensures that all required fields (e.g., service name and price) are validated before storing.

## Technology Stack

- Node.js - Backend runtime environment.
- Express.js - Web framework for creating API routes.
- MongoDB - NoSQL database to store healthcare services.
- Mongoose - Object Data Modeling (ODM) library for MongoDB and Node.js.
- dotenv - Environment variable management.



## Installation

1. Clone the repository:
     git clone https://github.com/yourusername/healthcare-service-api.git
     cd healthcare-service-api
2. Install dependencies:
     npm i
3. Run the server:
     nodemon index.js


## API Endpoints  :   http://localhost:5000/

  Method	            Endpoint	                      Description
  POST	              /api/services	                  Add a new healthcare service
  GET	                /api/services	                  Get a list of all services
  PUT	                /api/services/:id	              Update a service by ID
  DELETE	            /api/services/:id	              Delete a service by ID


## Testing the API  :    You can test the API using tools like Postman. 

example:
    {
      "name": "Blood Test",
      "description": "Standard blood test for diagnostics",
      "price": 300
    }
