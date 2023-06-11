import { Request, Response } from "express";

import {
  DriverInterface,
  RaceInterface,
  LapInterface,
  TeamInterface,
} from "../interface";
import { DriverModel } from "../models/driver.model";
import { RaceModel } from "../models/race.model";
import { LapModel } from "../models/lap.model";
import { TeamModel } from "../models/team.model";

class SearchController {
  search(req: Request, res: Response) {
    const { query } = req.query;

    if (query === "driver") {
      DriverModel.find({})
        .then((results: DriverInterface[]) => {
          res.json({ results }).status(200);
        })
        .catch((error: Error) => {
          console.log(error);
          res.status(500).json({ error: "Failed to search in MongoDB" });
        });
    } else if (query === "race") {
      RaceModel.find({})
        .then((results: RaceInterface[]) => {
          res.json({ results }).status(200);
        })
        .catch((error: Error) => {
          console.log(error);
          res.status(500).json({ error: "Failed to search in MongoDB" });
        });
    } else if (query === "lap") {
      LapModel.find({})
        .then((results: LapInterface[]) => {
          res.json({ results }).status(200);
        })
        .catch((error: Error) => {
          console.log(error);
          res.status(500).json({ error: "Failed to search in MongoDB" });
        });
    } else if (query === "team") {
      TeamModel.find({})
        .then((results: TeamInterface[]) => {
          res.json({ results }).status(200);
        })
        .catch((error: Error) => {
          console.log(error);
          res.status(500).json({ error: "Failed to search in MongoDB" });
        });
    } else {
      res.status(404).json({ error: "Filter not found" });
    }
  }
}

module.exports = new SearchController();
