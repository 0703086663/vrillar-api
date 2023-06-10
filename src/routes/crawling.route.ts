import { router } from "./index.route";
const crawlingController = require("../controllers/crawling.controller");

router.get("/", crawlingController.crawling);

module.exports = router;
