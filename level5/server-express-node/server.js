const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan("dev"))

mongoose.connect('mongodb://localhost:27017', { dbName: 'moviesdb'},
    () => console.log("Connected to the DB")
    )
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})