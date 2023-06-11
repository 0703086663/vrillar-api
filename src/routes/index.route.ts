import { Express, Router } from "express";
import searchRoute from "./search.route";
import crawlingRoute from "./crawling.route";

const swaggerUi = require("swagger-ui-express");
const swagger = require("../swagger");

export default function route(app: Express) {
  const router = Router();

  router.use("/search", searchRoute);
  router.use("/crawling", crawlingRoute);
  router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));

  app.use(router);
}
