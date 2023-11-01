// 1. Import Area
// NamedImport  from = somelibrary
// const { PrismaClient } = require("@prisma/client");
// const { PrismaClient } = require("@prisma/client")
const bcrypt = require('bcrypt');
const saltRounds = 10;

import prisma  from "@/lip/prisma"

// let prisma = new PrismaClient()
// 2. define Area 
async function POST(request){
    const res = await request.json()
    console.log(res);
    // Destructuring and object
    const {name,email,password,UserRole} = res;
    const hash = bcrypt.hashSync(password, saltRounds);

    // 2.1
    try {
        // User Regiter 
        // prisma.model.method
        const user = await prisma.user.create({
            data:{
                    "name": name,
                    "email": email,
                    "password": hash,
                    "UserRole": UserRole
                 }
        })
        return Response.json({ status:200,mag:user})

    } catch (error) {    
        return Response.json({status:400, mag:"user"})
    }
    // 2.2
    // 2.3 Retuen Statment 
}

// 3. Export Area 
// 3.1 Default export
// 3.2 Named export
module.exports = {POST}
