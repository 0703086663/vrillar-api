const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "Vrillar API",
      version: "1.0.0",
      description: "API documentation for crawling data from Racing F1",
    },
    basePath: "/",
    tags: [
      {
        name: "Crawling",
        description: "Crawling for racing data",
      },
    ],
    paths: {
      "/crawling": {
        get: {
          summary: "Crawling for items",
          tags: ["Crawling"],
          parameters: [
            {
              name: "year",
              in: "query",
              description: `The year for crawling(not input to get ${new Date().getFullYear()})`,
              schema: {
                type: "integer",
              },
            },
            {
              name: "filter",
              in: "query",
              description: "Filter by `drivers` or `team` or `fastest-laps`",
              schema: {
                type: "string",
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
