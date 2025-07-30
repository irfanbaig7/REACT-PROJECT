import express from "express"
const app = express()

app.get("/", (req, res) => {
    res.send("Ready for Social Media Project")
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log("Server starded Successfully");
})