import express from "express"
const app = express()
const port = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.send("Ready for Social Media Project")
})


app.listen(port, () => {
    console.log("Server starded Successfully");
})