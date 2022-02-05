const express = require("express")
const app = express()

app.use(express.json())

app.use("/todoList", require("./routes/todoList.js"))

app.listen(8500, () => {
    console.log("The server is running on Port 9000")
})