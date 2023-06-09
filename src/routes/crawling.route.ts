const express = require("express");
const router = express.Router();

const crawlingController = require("../controllers/crawling.controller");

router.get("/", crawlingController.crawlingByYear);

module.exports = router;
