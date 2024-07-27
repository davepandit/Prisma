const express = require("express");
//bring the controller
const { signUp } = require("../controllers/userController");
const { sign } = require("jsonwebtoken");

const router = express.Router();
//making a sign up route
router.post("/signup", signUp);

module.exports = router;
