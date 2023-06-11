import express from "express";
const router = express.Router();
const searchController = require("../controllers/search.controller");

router.get("/", searchController.search);

export default router;
