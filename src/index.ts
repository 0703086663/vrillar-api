import express from "express";
import route from "./routes/index.route";
import "./database";

const app = express();
const Router = express.Router();
route(app);

const port = 5000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log(
    `[swagger]: Swagger is running at http://localhost:${port}/api-docs`
  );
});
