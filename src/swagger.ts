const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "Vrillar API",
      version: "1.0.0",
      description:
        "API documentation for crawling and using data from Racing F1",
    },
    basePath: "/",
    tags: [
      {
        name: "Crawling",
        description: "Crawling for racing data then store to database",
      },
      {
        name: "Search",
        description: "Searching for data in database",
      },
    ],
    paths: {
      "/crawling": {
        get: {
          summary: "Crawling for racing data then store to database",
          tags: ["Crawling"],
          parameters: [
            {
              name: "year",
              in: "query",
              description: `The year for crawling (Default is ${new Date().getFullYear()})`,
              schema: {
                type: "integer",
                default: `${new Date().getFullYear()}`,
              },
            },
            {
              name: "filter",
              in: "query",
              description:
                "Filter by `races` or `drivers` or `team` or `fastest-laps` (Default is races)",
              schema: {
                type: "string",
                default: "races",
              },
            },
          ],
          responses: {
            200: {
              description: "Successful crawling",
            },
            404: {
              description: "Filter not found",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
      },
      "/search": {
        get: {
          summary: "Searching for data in database",
          tags: ["Search"],
          parameters: [
            {
              name: "query",
              in: "query",
              description:
                "Search query. Provide only one of the following parameters: `driver`, `team`, `race`, `lap`",
              schema: {
                type: "object",
                required: ["driver", "team", "race", "lap"],
                properties: {
                  driver: {
                    type: "string",
                  },
                  team: {
                    type: "string",
                  },
                  race: {
                    type: "integer",
                  },
                  lap: {
                    type: "string",
                  },
                },
              },
            },
          ],
          responses: {
            200: {
              description: "Successful crawling",
            },
            404: {
              description: "Filter not found",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
      },
      "/search/by-race": {
        get: {
          summary: "Search races based on criteria",
          tags: ["Search"],
          parameters: [
            {
              name: "grandPrix",
              in: "query",
              description: "Name of the Grand Prix",
              schema: {
                type: "string",
              },
            },
            {
              name: "date",
              in: "query",
              description: "Date of the race",
              schema: {
                type: "string",
                format: "date",
              },
              example: "2023-06-15",
              "x-format": "date-picker",
            },
            {
              name: "driver",
              in: "query",
              description: "Name of the driver",
              schema: {
                type: "string",
              },
            },
            {
              name: "carName",
              in: "query",
              description: "Name of the car",
              schema: {
                type: "string",
              },
            },
            {
              name: "laps",
              in: "query",
              description: "Number of laps",
              schema: {
                type: "integer",
              },
            },
            {
              name: "time",
              in: "query",
              description: "Time of the race",
              schema: {
                type: "string",
                format: "date-time",
              },
            },
          ],
          responses: {
            200: {
              description: "Successful search",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
      },
      "/search/by-team": {
        get: {
          summary: "Search races by team",
          tags: ["Search"],
          parameters: [
            {
              name: "team",
              in: "query",
              description: "Name of the team",
              schema: {
                type: "string",
              },
            },
            {
              name: "pos",
              in: "query",
              description: "Position of the team",
              schema: {
                type: "integer",
              },
            },
            {
              name: "pts",
              in: "query",
              description: "Points of the team",
              schema: {
                type: "integer",
              },
            },
          ],
          responses: {
            200: {
              description: "Successful search",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
      },
      "/search/by-lap": {
        get: {
          summary: "Search laps based on criteria",
          tags: ["Search"],
          parameters: [
            {
              name: "grandPrix",
              in: "query",
              description: "Name of the Grand Prix",
              schema: {
                type: "string",
              },
            },
            {
              name: "driver",
              in: "query",
              description: "Name of the driver",
              schema: {
                type: "string",
              },
            },
            {
              name: "carName",
              in: "query",
              description: "Name of the car",
              schema: {
                type: "string",
              },
            },
            {
              name: "time",
              in: "query",
              description: "Time of the race",
              schema: {
                type: "string",
                format: "date-time",
              },
            },
          ],
          responses: {
            200: {
              description: "Successful search",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
      },
      "/search/by-driver": {
        get: {
          summary: "Search for data by driver",
          tags: ["Search"],
          parameters: [
            {
              name: "pos",
              in: "query",
              description: "Position of driver",
              schema: {
                type: "integer",
              },
            },
            {
              name: "driver",
              in: "query",
              description: "Name of the driver",
              schema: {
                type: "string",
              },
            },
            {
              name: "nationality",
              in: "query",
              description: "Nationality of the driver",
              schema: {
                type: "string",
              },
            },
            {
              name: "carName",
              in: "query",
              description: "Car name of the driver",
              schema: {
                type: "string",
              },
            },
            {
              name: "pts",
              in: "query",
              description: "Points of the driver",
              schema: {
                type: "integer",
              },
            },
          ],
          responses: {
            200: {
              description: "Successful search",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.jws"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
