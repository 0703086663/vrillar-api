const express = require("express");
export const router = express.Router();

const crawlingRoute = require("./crawling.route");
const swaggerUi = require("swagger-ui-express");
const swagger = require("../swagger");

function route(app: any) {
  app.use("/crawling", crawlingRoute);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));
}

module.exports = route;
