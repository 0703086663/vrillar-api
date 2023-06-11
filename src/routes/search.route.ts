import express from "express";
const router = express.Router();
const searchController = require("../controllers/search.controller");

router.get("/by-race", searchController.searchByRace);
router.get("/by-driver", searchController.searchByDriver);
router.get("/by-team", searchController.searchByTeam);
router.get("/by-lap", searchController.searchByLap);

router.get("/", searchController.search);

export default router;
