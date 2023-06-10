import {
  DriverInterface,
  LapInterface,
  RaceInterface,
  TeamInterface,
} from "../interface";

const axios = require("axios");
const cheerio = require("cheerio");

export function crawlingByRace(url: string): Promise<RaceInterface[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response: any) => {
        if (response.status === 200) {
          const html = response.data;
          const $ = cheerio.load(html);

          const trElements = $(".resultsarchive-table tr");
          const raceInterface: RaceInterface[] = [];
          trElements.each((index: number, element: any) => {
            const grandPrix = $(element)
              .find("td:nth-child(2)")
              .text()
              .trim()
              .replace(/\n/g, "");
            const date = $(element)
              .find("td:nth-child(3)")
              .text()
              .trim()
              .replace(/\n/g, "");
            const driver = $(element)
              .find("td:nth-child(4)")
              .text()
              .replace(/\s+/g, " ")
              .trim()
              .replace(/\n/g, "");
            const carName = $(element)
              .find("td:nth-child(5)")
              .text()
              .trim()
              .replace(/\n/g, "");
            const laps = $(element)
              .find("td:nth-child(6)")
              .text()
              .trim()
              .replace(/\n/g, "");
            const time = $(element)
              .find("td:nth-child(7)")
              .text()
              .trim()
              .replace(/\n/g, "");

            const data = {
              grandPrix,
              date,
              driver,
              carName,
              laps,
              time,
            };
            raceInterface.push(data);
          });
          raceInterface.shift();
          resolve(raceInterface);
        }
      })
      .catch((error: Error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function crawlingByDriver(url: string): Promise<DriverInterface[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response: any) => {
        if (response.status === 200) {
          const html = response.data;
          const $ = cheerio.load(html);

          const trElements = $(".resultsarchive-table tr");
          const driverInterface: DriverInterface[] = [];
          trElements.each((index: number, element: any) => {
            const pos = $(element)
              .find("td:nth-child(2)")
              .text()
              .trim()
              .replace(/\n/g, "");
            const driver = $(element)
              .find("td:nth-child(3)")
              .text()
              .replace(/\s+/g, " ")
              .trim()
              .replace(/\n/g, "");
            const nationality = $(element)
              .find("td:nth-child(4)")
              .text()
              .trim()
              .replace(/\n/g, "");
            const carName = $(element)
              .find("td:nth-child(5)")
              .text()
              .trim()
              .replace(/\n/g, "");
            const pts = $(element)
              .find("td:nth-child(6)")
              .text()
              .trim()
              .replace(/\n/g, "");

            const data = {
              pos,
              driver,
              nationality,
              carName,
              pts,
            };
            driverInterface.push(data);
          });
          driverInterface.shift();
          resolve(driverInterface);
        }
      })
      .catch((error: Error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function crawlingByTeam(url: string): Promise<TeamInterface[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response: any) => {
        if (response.status === 200) {
          const html = response.data;
          const $ = cheerio.load(html);

          const trElements = $(".resultsarchive-table tr");
          const teamInterface: TeamInterface[] = [];
          trElements.each((index: number, element: any) => {
            const pos = $(element)
              .find("td:nth-child(2)")
              .text()
              .trim()
              .replace(/\n/g, "");
            const team = $(element)
              .find("td:nth-child(3)")
              .text()
              .replace(/\s+/g, " ")
              .trim()
              .replace(/\n/g, "");
            const pts = $(element)
              .find("td:nth-child(4)")
              .text()
              .trim()
              .replace(/\n/g, "");

            const data = {
              pos,
              team,
              pts,
            };
            teamInterface.push(data);
          });
          teamInterface.shift();
          resolve(teamInterface);
        }
      })
      .catch((error: Error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function crawlingByLap(url: string): Promise<LapInterface[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response: any) => {
        if (response.status === 200) {
          const html = response.data;
          const $ = cheerio.load(html);

          const trElements = $(".resultsarchive-table tr");
          const lapInterface: LapInterface[] = [];
          trElements.each((index: number, element: any) => {
            const grandPrix = $(element)
              .find("td:nth-child(2)")
              .text()
              .trim()
              .replace(/\n/g, "");
            const driver = $(element)
              .find("td:nth-child(3)")
              .text()
              .replace(/\s+/g, " ")
              .trim()
              .replace(/\n/g, "");
            const carName = $(element)
              .find("td:nth-child(4)")
              .text()
              .replace(/\s+/g, " ")
              .trim()
              .replace(/\n/g, "");
            const time = $(element)
              .find("td:nth-child(5)")
              .text()
              .trim()
              .replace(/\n/g, "");

            const data = {
              grandPrix,
              driver,
              carName,
              time,
            };
            lapInterface.push(data);
          });
          lapInterface.shift();
          resolve(lapInterface);
        }
      })
      .catch((error: Error) => {
        console.log(error);
        reject(error);
      });
  });
}
