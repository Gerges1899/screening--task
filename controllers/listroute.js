const listroute = require("express").Router();

const { getall} = require("../controllers/list.js");

listroute.route("/allcountries").get(getall);

module.exports = listroute

