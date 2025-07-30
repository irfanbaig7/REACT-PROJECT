import express from "express"
import connectDb from "./config/dbConection.js"
const app = express()
const port = process.env.PORT || 4000

app.listen(port, () => {
    connectDb()
    console.log("Server starded Successfully");
})