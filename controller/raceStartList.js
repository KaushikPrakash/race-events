// const ErrorResponse = require("../utils/errorResponse");
const raceStartListObject = require("../models/raceStartList.json");
const asyncHandler = require("../middleware/async");
const fs = require("fs");
const { searchFilterRaceStartList } = require("../utils/helpers");

// @desc Get all race start list with search, filter and pagination
// @route GET /api/v1/startList
// @access Public
exports.getStartLists = async (req, res, next) => {
  let raceStartLists = [];

  try {
    if (req.query) {
      raceStartLists = await searchFilterRaceStartList(
        req.query,
        raceStartListObject
      );
    } else {
      raceStartLists = raceStartListObject;
    }
  } catch (error) {
    next(error);
  }
  res.status(200).json({ success: true, data: raceStartLists });
};

// @desc Add new race start details
// @route POST /api/v1/startList
// @access Public
exports.addRaceStartList = async (req, res, next) => {
  try {
    const newRaceStartDetails = req.body;
    const raceStartList = fs.readFileSync("./models/raceStartList.json");
    let raceStartListObject = JSON.parse(raceStartList);
    raceStartListObject.push(newRaceStartDetails);
    const newRaceStartListObject = JSON.stringify(raceStartListObject);
    fs.writeFile(
      "./models/raceStartList.json",
      newRaceStartListObject,
      (err) => {
        // Error checking
        if (err) throw err;
        console.log("no race start list added");
      }
    );
  } catch (error) {
    next(error);
  }
};
