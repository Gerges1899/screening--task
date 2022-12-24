const countryroute = require("express").Router();

const { getpop} = require("../controllers/country.js");


countryroute.route("/country").get(getpop);

module.exports = countryroute
