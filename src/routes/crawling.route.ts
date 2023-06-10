import { router } from "./index.route";
const crawlingController = require("../controllers/crawling.controller");

// router.get("/by-year/:year", crawlingController.crawlingByYear);
router.get("/", crawlingController.crawling);

module.exports = router;
