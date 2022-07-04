const express = require("express");
const {
  getStartLists,
  addRaceStartList
} = require("../controller/raceStartList.js");

const router = express.Router();

router.route("/").get(getStartLists).post(addRaceStartList);

module.exports = router;
