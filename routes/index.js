var express = require("express");
var router = express.Router();
const { User } = require("../models");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("feafae")
  const users = User.findAll();
  res.json(users);
});

module.exports = router;
