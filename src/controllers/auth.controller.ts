import type { Request, Response } from "express"
import { signInService } from "../services/auth.service.js"
import type { SignInDTO } from "../dtos/SignIn.dto.js"

export const getUserController = async (req:Request<{},{}, SignInDTO>, res:Response) => {
    try {
        const creds = req.body
        const users = await signInService(creds)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" })
    }
}