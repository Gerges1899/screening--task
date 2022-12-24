const Prisma = require("@prisma/client")
const prisma = new Prisma.PrismaClient({ log: ["info", "query"] });

const getall = async(req,res)=>{
    
    const results = await prisma.Countries.findMany({
        skip: parseInt(req.query.skip),
        take: 50,
      })

    res.send(results)
    
    
}

module.exports = {getall};