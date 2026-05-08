import express from "express"
import AuthRouter from "./routes/auth.route.js"
import UserRouter from "./routes/user.route.js"
const app = express()

app.use(express.json())
app.use("/api", AuthRouter)
app.use("/users", UserRouter )

export default app