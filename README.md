# Vrillar API

API documentation for crawling and using data from Racing F1.

## Overview

Vrillar API is a RESTful API built with Node.js and Express that allows you to crawl racing data from the Racing F1 website, store it in a MongoDB database, and perform searches on the stored data. The API is implemented in TypeScript and includes Swagger documentation for easy exploration of the available endpoints.

## Installation

To run the Vrillar API locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/0703086663/vrillar-api.git
2. Navigate to the project directory:
    ```shell
    cd vrillar-api
  
3. Install the dependencies:

    ```shell
    npm install
4. Start the server:

    ```shell
    npm start
The API will be accessible at `http://localhost:5000/api-docs`

## Technologies Used
The Vrillar API utilizes the following technologies:

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express: A fast, unopinionated, and minimalist web framework for Node.js.
- MongoDB: A popular NoSQL database for storing and retrieving data.
- Mongoose: An elegant MongoDB object modeling tool for Node.js that provides a schema-based solution for application data.
- Swagger: A powerful open-source tool for designing, building, documenting, and consuming RESTful APIs.
- Cheerio: A lightweight library for parsing and manipulating HTML documents, used for web scraping.
- Axios: A promise-based HTTP client for making HTTP requests.

## API Endpoints
The Vrillar API exposes the following endpoints:

- `GET /crawling`: Crawls racing data from the Racing F1 website and stores it in the MongoDB database. You can provide optional query parameters for the year and filter criteria.
- `GET /search`: Searches for data in the MongoDB database based on the provided query parameter. You can search by driver, team, race, or lap.
- `GET /search/by-race`: Searches for races in the MongoDB database based on criteria such as grandPrix, date, driver, carName, laps, and time.
- `GET /search/by-team`: Searches for races by team in the MongoDB database based on criteria such as team, pos, and pts.
- `GET /search/by-lap`: Searches for laps in the MongoDB database based on criteria such as grandPrix, driver, carName, and time.
- `GET /search/by-driver`: Searches for drivers in the MongoDB database based on the provided driver query parameter.
    For detailed information about the request parameters and response formats of each endpoint, refer to the Swagger documentation provided by the API. You can access the Swagger UI at http://localhost:5000/api-docs when the API is running locally.

## Project Structure
The project follows a structured organization to maintain a clean codebase. Here's a high-level overview of the project structure:

- `src/controllers`: Contains the controller classes that handle the API endpoints.
- `src/models`: Contains the Mongoose model definitions for the MongoDB collections.
- `src/routes`: Contains the route definitions for the API endpoints.
- `src/scraping`: Contains the scraper utility that crawls the Racing F1 website and extracts the required data.
- `src/interfaces`: Contains the TypeScript interface definitions for the data objects used in the API.
- `src/index.ts`: The main entry point of the application.
