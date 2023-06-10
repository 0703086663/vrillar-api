import { Request, Response } from "express";
import {
  crawlingByDriver,
  crawlingByLap,
  crawlingByRace,
  crawlingByTeam,
} from "../utils/crawling";
import {
  DriverInterface,
  LapInterface,
  RaceInterface,
  TeamInterface,
} from "../interface";

import { RaceModel } from "../models/race.model";
import { DriverModel } from "../models/driver.model";
import { TeamModel } from "../models/team.model";
import { LapModel } from "../models/lap.model";

class CrawlingController {
  crawling(req: Request, res: Response) {
    let url = "";
    let year = new Date().getFullYear();

    if (req.query.year != undefined || req.query.year != null) {
      url = `https://www.formula1.com/en/results.html/${req.query.year}/races.html`;
      crawlingByRace(url)
        .then((data: RaceInterface[]) => {
          data.forEach((race: RaceInterface) => {
            race.time = new Date(`1970-01-01T${race.time}`);
          });
          RaceModel.insertMany(data)
            .then(() => res.json(data).status(200))
            .catch((error: Error) => {
              console.log(error);
              res
                .status(500)
                .json({ error: "Failed to store data in MongoDB" });
            });
        })
        .catch((error: Error) => {
          console.log(error);
          res.status(500).json({ error: "Failed to crawl data" });
        });
    } else if (
      req.query.filter == "races" &&
      (req.query.year == undefined || req.query.year == null)
    ) {
      url = `https://www.formula1.com/en/results.html/${year}/races.html`;
      crawlingByRace(url)
        .then((data: RaceInterface[]) => {
          RaceModel.insertMany(data)
            .then(() => res.json(data).status(200))
            .catch((error: Error) => {
              console.log(error);
              res
                .status(500)
                .json({ error: "Failed to store data in MongoDB" });
            });
        })
        .catch((error: Error) => {
          console.log(error);
          res.status(500).json({ error: "Failed to crawl data" });
        });
    } else if (
      req.query.filter == "drivers" &&
      (req.query.year == undefined || req.query.year == null)
    ) {
      url = `https://www.formula1.com/en/results.html/${year}/${
        req.query.filter ? req.query.filter : "races"
      }.html`;
      crawlingByDriver(url)
        .then((data: DriverInterface[]) => {
          DriverModel.insertMany(data)
            .then(() => res.json(data).status(200))
            .catch((error: Error) => {
              console.log(error);
              res
                .status(500)
                .json({ error: "Failed to store data in MongoDB" });
            });
        })
        .catch((error: Error) => {
          console.log(error);
          res.status(500).json({ error: "Failed to crawl data" });
        });
    } else if (
      req.query.filter == "team" &&
      (req.query.year == undefined || req.query.year == null)
    ) {
      url = `https://www.formula1.com/en/results.html/${year}/${
        req.query.filter ? req.query.filter : "team"
      }.html`;
      crawlingByTeam(url)
        .then((data: TeamInterface[]) => {
          TeamModel.insertMany(data)
            .then(() => res.json(data).status(200))
            .catch((error: Error) => {
              console.log(error);
              res
                .status(500)
                .json({ error: "Failed to store data in MongoDB" });
            });
        })
        .catch((error: Error) => {
          console.log(error);
          res.status(500).json({ error: "Failed to crawl data" });
        });
    } else if (
      req.query.filter == "fastest-laps" &&
      (req.query.year == undefined || req.query.year == null)
    ) {
      url = `https://www.formula1.com/en/results.html/${year}/${
        req.query.filter ? req.query.filter : "fastest-laps"
      }.html`;
      crawlingByLap(url)
        .then((data: LapInterface[]) => {
          LapModel.insertMany(data)
            .then(() => res.json(data).status(200))
            .catch((error: Error) => {
              console.log(error);
              res
                .status(500)
                .json({ error: "Failed to store data in MongoDB" });
            });
        })
        .catch((error: Error) => {
          console.log(error);
          res.status(500).json({ error: "Failed to crawl data" });
        });
    } else if (
      (req.query.filter == undefined || req.query.filter == null) &&
      (req.query.year == undefined || req.query.year == null)
    ) {
      url = `https://www.formula1.com/en/results.html/${year}/races.html`;
      crawlingByRace(url)
        .then((data: RaceInterface[]) => {
          RaceModel.insertMany(data)
            .then(() => res.json(data).status(200))
            .catch((error: Error) => {
              console.log(error);
              res
                .status(500)
                .json({ error: "Failed to store data in MongoDB" });
            });
        })
        .catch((error: Error) => {
          console.log(error);
          res.status(500).json({ error: "Failed to crawl data" });
        });
    }
  }
}

module.exports = new CrawlingController();
