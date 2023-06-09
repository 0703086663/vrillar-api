const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swagger = require("./swagger");
import "./database";

const app = express();
const port = 5000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log(
    `[swagger]: Swagger is running at http://localhost:${port}/api-docs`
  );
});
