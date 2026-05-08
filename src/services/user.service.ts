import { prisma } from "../prisma/client.js"
import bcrypt from "bcryptjs"
export const createUserService = async(data:{username:string, email:string, password:string})=>{
try {
    const user_email_exists = await prisma.user.findFirst({
        where:{
            email:data.email
        }
    })
     const username_exists = await prisma.user.findFirst({
        where:{
            username:data.username
        }
    })
    if(user_email_exists){
        return {
            data:null,
            success:false,
            error:"Email already exists"
        }
    }
    else if(username_exists){
         return {
            data:null,
            success:false,
            error:"Username already taken"
        }

    }
    const user = await prisma.user.create({
        data:{
            username:data.username,
            email:data.email,
            password: await bcrypt.hash(data.password, 10)
        }
    })
     return {
            data:user,
            success:true,
            error:"User created Successfully"
        }

} catch (error) {
    throw new Error("Something went wrong")
}
}