import express from "express"
import { getUserController } from "../controllers/auth.controller.js"
const router = express.Router()

router.get("/auth/login", getUserController)

export default router