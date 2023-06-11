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
    },
  },
  apis: ["./routes/*.jws"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
