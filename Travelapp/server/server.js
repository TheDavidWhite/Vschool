const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(morgan("dev"))

mongoose.connect(
    MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) throw err
        console.log("Connected to the database")
    }
)
app.use(cors())

app.use("/posts", require("./routes/postsRouter.js"))
app.use("/user", require("./routes/userRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(5000, () => {
    console.log("The server is running on Port 5000")
})