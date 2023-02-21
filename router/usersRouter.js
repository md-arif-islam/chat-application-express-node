// external imports
const express = require("express");

// internal imports
const { getUsers } = require("../controller/usersController");

// init
const router = express.Router();

// login page
router.get("/", getUsers);

module.exports = router;
