const countryroute = require("express").Router();

const { getpop} = require("../controllers/country.js");


countryroute.route("/country/:id").get(getpop);

module.exports = countryroute
