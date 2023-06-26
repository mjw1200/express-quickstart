var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("index", { title: "Express Quickstart" });
});

router.post("/authenticated", function (req, res, next) {
    console.log(`BLAM! ${JSON.stringify(req.body)}`);

    axiosRequest().then(data => {
        console.log(data);
        res.render("authenticated", { title: "Now You're Authenticated", password: req.body.password, username: req.body.username });
    }).catch(error => {
        res.status(400).send("<!DOCTYPE html><html><head><title>There Was Trouble</title><link rel=\"stylesheet\" href=\"/stylesheets/style.css\"></head><body><h1>Ruh-roh, Raggy</h1><p>Aroo?</p></body></html>")
    });
});

async function axiosRequest() {
    return new Promise((resolve, reject) => {
        const axios = require('axios');
        let data = JSON.stringify({
            "cat": "meow",
            "dog": "woof"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://ruthisaschmoo.net:3000',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

module.exports = router;
