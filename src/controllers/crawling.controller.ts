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

class CrawlingController {
  crawling(req: Request, res: Response) {
    let url = "";
    let year = new Date().getFullYear();

    if (req.query.year != undefined || req.query.year != null) {
      url = `https://www.formula1.com/en/results.html/${req.query.year}/races.html`;
      crawlingByRace(url)
        .then((data: RaceInterface[]) => {
          return res.json(data).status(200);
        })
        .catch((error: Error) => {
          console.log(error);
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
          return res.json(data).status(200);
        })
        .catch((error: Error) => {
          console.log(error);
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
          return res.json(data).status(200);
        })
        .catch((error: Error) => {
          console.log(error);
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
          return res.json(data).status(200);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    } else if (
      (req.query.filter == undefined || req.query.filter == null) &&
      (req.query.year == undefined || req.query.year == null)
    ) {
      url = `https://www.formula1.com/en/results.html/${year}/races.html`;
      crawlingByRace(url)
        .then((data: LapInterface[]) => {
          return res.json(data).status(200);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    }
  }
}

module.exports = new CrawlingController();
