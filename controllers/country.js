const Prisma = require("@prisma/client")
const prisma = new Prisma.PrismaClient({ log: ["info", "query"] });

const getpop = async (req, res) => {

    const data = await prisma.countries.findUnique({
        where: {
            id:parseInt(req.params.id),
        },
        include: {
            values: true
        }
    })

       res.send(
         JSON.parse(JSON.stringify(data, (key, value) =>
            typeof value === 'bigint'
                ? value.toString()
                : value // return everything else unchanged
        ))
    )


}

module.exports = { getpop };