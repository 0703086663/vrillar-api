import { Request, Response } from "express";

const axios = require("axios");
const cheerio = require("cheerio");

class CrawlingController {
  crawlingByYear(req: Request, res: Response) {
    const url = `https://www.formula1.com/en/results.html/2023/races.html`;

    axios
      .get(url)
      .then((response: any) => {
        if (response.status === 200) {
          const html = response.data;
          const $ = cheerio.load(html);

          // Use cheerio selectors to extract the desired data
          const trElements = $(".resultsarchive-table tr");

          trElements.each((index: number, element: any) => {
            const grandPrix = $(element).find("td:nth-child(2)").text();
            const date = $(element).find("td:nth-child(3)").text();
            const driver = $(element).find("td:nth-child(4)").text();
            const carName = $(element).find("td:nth-child(5)").text();
            const laps = $(element).find("td:nth-child(6)").text();
            const time = $(element).find("td:nth-child(7)").text();

            console.log(`Grand Prix: ${grandPrix}`);
            console.log(`Date: ${date}`);
            console.log(`Driver: ${driver}`);
            console.log(`Car Name: ${carName}`);
            console.log(`Laps: ${laps}`);
            console.log(`Time: ${time}`);
            console.log("---------------------------");
          });
        }
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }
}

module.exports = new CrawlingController();
