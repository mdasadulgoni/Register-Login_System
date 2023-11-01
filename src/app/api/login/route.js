// 1. Import Area 
import prisma  from "@/lip/prisma"
var jwt = require('jsonwebtoken');

// 2. Define Area 
async function POST(request){
    const res = await request.json()
    const {email,password,UserRole} = res

    try {
        const user = await prisma.user.findUnique({where:{email}});
        if (!user) {
            return Response.json({status:400,mag:"No"})
        }else{
            // JWT Tocken
            var token = jwt.sign(user, process.env.JWT_SECRET_KEY);
            return Response.json({
                                    status:200,
                                    mag:"Ok",
                                    jwt:token,
                                    user
                                })
            }
    } catch (error) {
        return Response.json({status:400,mag:"No"})
    }


    return Response.json({mag:"hi",res,email})
}


// 3. Export Area 
// 3.1 default export

// 3.2 named export 
module.exports = {POST}