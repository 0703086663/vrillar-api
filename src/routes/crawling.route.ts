import express from "express";
const router = express.Router();
const crawlingController = require("../controllers/crawling.controller");

router.get("/", crawlingController.crawling);

export default router;
