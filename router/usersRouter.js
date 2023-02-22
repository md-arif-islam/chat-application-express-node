// external imports
const express = require("express");

// internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decoratedHtmlResponse");

// init
const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("User"), getUsers);

module.exports = router;
