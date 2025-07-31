import express from "express"
import connectDb from "./config/dbConection.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()
const port = process.env.PORT || 4000


// middele Ware
app.use(cors({
    origin: "http://localhost:5173",
    withCredentials: true
}))
app.use(express.json()) // JSON format mein bheje gaye data ko read karne ke liye (req.body me store hota hai)
app.use(cookieParser())
app.use("api/auth", authRouter)


app.listen(port, () => {
    connectDb()
    console.log("Server starded Successfully");
})