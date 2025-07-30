import express from "express"
import { connectDb } from "./config/dbConection.js"
const app = express()
const port = process.env.PORT || 4000
const mongodbUri = process.env.MONGODB_URI

connectDb(mongodbUri)

app.listen(port, () => {
    console.log("Server starded Successfully");
})