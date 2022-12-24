const Prisma = require("@prisma/client")
const prisma = new Prisma.PrismaClient({ log: ["info", "query"] });

const getpop = async (req, res) => {

    const country = await prisma.Countries.findUnique({
        where: {
            id: req.query.id
        },
    })

    // const results = await prisma.Values.findMany({
    //     where: {
    //         countryId: parseInt(req.query.id)
                
            
    //     }
    // })

    res.send(countryId.Values)


}

module.exports = {getpop};