import type { Request, Response } from "express"
import { createUserService } from "../services/user.service.js"
import type { SignUp } from "../dtos/SignUp.dto.js"
import type { SignUpR } from "../dtos/SignUpR.dto.js"

export const createUserController = async(req:Request<{},{},SignUp>, res:Response<SignUpR>) =>{
   try {
     const response = await createUserService(req.body)
     if(response.success && response.data){
        return res.status(201).json({
            id: response.data.id,
            username: response.data.username,
            email: response.data.email
        })
     }
     else{
        return res.status(400).json(response)
     }
   } catch (error:any) {
    return res.status(500).send(error.message)
   }
    
}