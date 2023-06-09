const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://www.formula1.com/";

axios
  .get(url)
  .then((response: any) => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      // Use cheerio selectors to extract the desired data
      const raceElements = $(".race-list-item");

      raceElements.each((index: any, element: any) => {
        const raceName = $(element).find(".race-list-item__name").text();
        const raceDate = $(element).find(".race-list-item__date").text();
        const raceLocation = $(element).find(".race-list-item__circuit").text();

        console.log(`Race Name: ${raceName}`);
        console.log(`Race Date: ${raceDate}`);
        console.log(`Race Location: ${raceLocation}`);
        console.log("---------------------------");
      });
    }
  })
  .catch((error: Error) => {
    console.log(error);
  });
