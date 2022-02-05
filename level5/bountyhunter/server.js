const express = require("express")
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect(
    MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) throw err
        console.log("Connected to the database")
    }
)

app.use("/bounty", require("./routes/bountyRouter.js"))
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})