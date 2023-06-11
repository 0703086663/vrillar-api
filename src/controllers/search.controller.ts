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

  searchByRace(req: Request, res: Response) {
    const { grandPrix, date, driver, carName, laps, time } = req.query;

    const searchQuery: any = {};

    if (grandPrix) {
      searchQuery.grandPrix = grandPrix;
    }

    if (date) {
      searchQuery.date = date;
    }

    if (driver) {
      searchQuery.driver = driver;
    }

    if (carName) {
      searchQuery.carName = carName;
    }

    if (laps) {
      searchQuery.laps = laps;
    }

    if (time) {
      searchQuery.time = time;
    }

    RaceModel.find(searchQuery)
      .then((results: RaceInterface[]) => {
        res.json({ results }).status(200);
      })
      .catch((error: Error) => {
        console.log(error);
        res.status(500).json({ error: "Failed to search in MongoDB" });
      });
  }

  searchByTeam(req: Request, res: Response) {
    const { pos, team, pts } = req.query;

    const searchQuery: any = {};

    if (pos) {
      searchQuery.pos = pos;
    }

    if (team) {
      searchQuery.team = team;
    }

    if (pts) {
      searchQuery.pts = pts;
    }

    TeamModel.find(searchQuery)
      .then((results: TeamInterface[]) => {
        res.json({ results }).status(200);
      })
      .catch((error: Error) => {
        console.log(error);
        res.status(500).json({ error: "Failed to search in MongoDB" });
      });
  }

  searchByLap(req: Request, res: Response) {
    const { grandPrix, driver, carName, time, pos, pts } = req.query;

    const searchQuery: any = {};

    if (grandPrix) {
      searchQuery.grandPrix = grandPrix;
    }

    if (driver) {
      searchQuery.driver = driver;
    }

    if (carName) {
      searchQuery.carName = carName;
    }

    if (time) {
      searchQuery.time = time;
    }

    if (pos) {
      searchQuery.pos = pos;
    }

    if (pts) {
      searchQuery.pts = pts;
    }

    LapModel.find(searchQuery)
      .then((results: LapInterface[]) => {
        res.json({ results }).status(200);
      })
      .catch((error: Error) => {
        console.log(error);
        res.status(500).json({ error: "Failed to search in MongoDB" });
      });
  }

  searchByDriver(req: Request, res: Response) {
    const { pos, driver, nationality, carName, pts } = req.query;
    const searchQuery: any = {};
    if (pos) {
      searchQuery.pos = pos;
    }
    if (driver) {
      searchQuery.driver = driver;
    }
    if (nationality) {
      searchQuery.nationality = nationality;
    }
    if (carName) {
      searchQuery.carName = carName;
    }
    if (pts) {
      searchQuery.pts = pts;
    }
    DriverModel.find(searchQuery)
      .then((results: DriverInterface[]) => {
        res.json({ results }).status(200);
      })
      .catch((error: Error) => {
        console.log(error);
        res.status(500).json({ error: "Failed to search in MongoDB" });
      });
  }
}

module.exports = new SearchController();
