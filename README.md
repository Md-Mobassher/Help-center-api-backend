# Backend Assignment

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
  - [Ping Server](#ping-server)
  - [Create Card](#create-card)
  - [Get All Cards](#get-all-cards)
  - [Get Card by Title](#get-card-by-title)
- [Error Handling](#error-handling)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This project is a backend service built using Node.js, Express, and MongoDB. The application provides a simple API to manage a collection of "cards" with functionalities like creating, retrieving all cards, and fetching a card by its title.

## Features

- Connect to a MongoDB database using Mongoose.
- Create new cards with unique IDs.
- Retrieve all cards stored in the database.
- Fetch a specific card by its title.
- Basic error handling and 404 not found route.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling for Node.js.
- **UUID**: For generating unique IDs.

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Ensure that MongoDB is installed and running. You can use a local MongoDB instance or a cloud service like MongoDB Atlas.
- **npm**: Node Package Manager, which comes with Node.js.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Server

1. Create a `.env` file in the root of your project and set the `DATABASE_URL` environment variable to your MongoDB connection string.

   ```
   DATABASE_URL=mongodb://localhost:27017/helpcenter
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. The server will start running on `http://localhost:5000`.

## API Documentation

### Ping Server

- **Endpoint**: `/ping`
- **Method**: GET
- **Description**: Check if the server is running.
- **Response**:
  ```json
  {
    "message": "Server is running!"
  }
  ```

### Create Card

- **Endpoint**: `/cards`
- **Method**: POST
- **Description**: Create a new card.
- **Request Body**:
  ```json
  {
    "title": "Sample Title",
    "description": "Sample description of the card."
  }
  ```
- **Response**:
  - **Success**: 201 Created
    ```json
    {
      "id": "unique-id",
      "title": "Sample Title",
      "description": "Sample description of the card.",
      "_id": "mongo-object-id",
      "__v": 0
    }
    ```
  - **Failure**: 400 Bad Request
    ```json
    {
      "error": "Failed to create card"
    }
    ```

### Get All Cards

- **Endpoint**: `/cards`
- **Method**: GET
- **Description**: Retrieve all cards.
- **Response**:
  ```json
  [
    {
      "id": "unique-id",
      "title": "Sample Title",
      "description": "Sample description of the card.",
      "_id": "mongo-object-id",
      "__v": 0
    }
  ]
  ```

### Get Card by Title

- **Endpoint**: `/cards/:title`
- **Method**: GET
- **Description**: Retrieve a card by its title.
- **Response**:
  - **Success**: 200 OK
    ```json
    {
      "id": "unique-id",
      "title": "Sample Title",
      "description": "Sample description of the card.",
      "_id": "mongo-object-id",
      "__v": 0
    }
    ```
  - **Failure**: 404 Not Found
    ```json
    {
      "error": "Card not found"
    }
    ```

## Error Handling

The application includes basic error handling:

- **404 Not Found**: If a route is not found, a 404 status with a JSON error message is returned.
- **500 Internal Server Error**: For other errors, a 500 status with a generic error message is returned.

## Environment Variables

The project uses environment variables to configure the connection to the MongoDB database:

- **DATABASE_URL**: The MongoDB connection string.

Example `.env` file:

```
DATABASE_URL=mongodb://localhost:27017/helpcenter
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or feedback, please reach out to:

**Md Mobassher Hossain**  
Email: [mdmobassherhossain1@gmail.com](mailto:mdmobassherhossain1@gmail.com)
