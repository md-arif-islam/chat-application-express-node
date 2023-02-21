// external imports
const express = require("express");

// internal imports
const { getInbox } = require("../controller/inboxController");

// init
const router = express.Router();

// login page
router.get("/", getInbox);

module.exports = router;
