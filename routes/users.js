var express = require("express");
var router = express.Router();
const { User, Article } = require("../models");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const user = await User.findOne({
    include: {
      model: Article,
    },
  });

  res.json({ user });
});

module.exports = router;
