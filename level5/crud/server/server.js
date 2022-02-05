const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI

app.use(express.json())

mongoose.connect(
    MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) throw err
        console.log("Connected to the database")
    }
)

app.use("/inventory", require("./routes/inventorRouter.js"))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})