const express = require("express");
const router = express.Router();

const Controllers = require("../controllers/catController");

router.get("/", Controllers.getRandomFact);

router.get("/facts", Controllers.getMultipleFacts);

router.get("/fact/:id", Controllers.getFactById);

module.exports = router;
