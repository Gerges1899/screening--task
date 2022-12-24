const Prisma = require("@prisma/client")
const express = require('express');
const app = express();
const prisma = new Prisma.PrismaClient({ log: ["info", "query"] });
const port = process.env.PORT || 3000;
const axios = require('axios');
const listroute = require("./controllers/listroute");
const countryroute = require("./controllers/countryroute");
app.use(listroute)
app.use(countryroute)
app.get('/', (req, res) => {
    const getpopulations = async () => {
        try {

            const data = await axios.get('https://countriesnow.space/api/v0.1/countries/population', {
                headers: { "Accept-Encoding": "gzip,deflate,compress" }
            })

            return data
        } catch (error) {
            console.error(error)
        }
    }

    const countpopulations = async () => {
        const countries = await getpopulations()

        if (countries.data.data) {
            countries.data.data.map(async ({ country, populationCounts }) => {
                await prisma.countries.create({
                    data: {
                        country, values: {
                            create: populationCounts.map((count) => {
                                return { year: count.year, value: count.value }
                            })
                        }
                    }
                })
            })
        }
    }
    countpopulations()
});







app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});