import { prisma } from "../prisma/client.js"

export const signInService = async (creds:{email:string, password:string})=>{
    const user = await prisma.user.findFirst({
        where:{
            email:creds.email
        },
    })
}