var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("index", { title: "Express Quickstart" });
});

router.post("/authenticated", function (req, res, next) {
    console.log(`BLAM! ${JSON.stringify(req.body)}`);
    res.render("authenticated", { title: "Now You're Authenticated", password: req.body.password });
});

module.exports = router;
