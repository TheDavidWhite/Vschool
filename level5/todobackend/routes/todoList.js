const express = require('express')
const todoRouter = express.Router()
const { v4: uuid } = require('uuid')

const todoList = [
    {"name": "Clean Dishes", "description": "Help the wife with the dishes", "imageUrl": "https://images2.minutemediacdn.com/image/upload/c_crop,h_1349,w_2400,x_0,y_118/f_auto,q_auto,w_1100/v1617721249/shape/mentalfloss/gettyimages-1135955779.jpg", "completed": false, "_id": uuid()},
    {"name": "Vacum Room", "description": "My Bedroom floor is dirty", "imageUrl": "https://gofirstgreen.com/wp-content/uploads/2019/07/Carpet-Cleaning-Northern-Kentucky-Cincinnati-300x216.jpg", "completed": false, "_id": uuid()},
    {"name": "Finish School work", "description": "Need to finish before its to late", "imageUrl": "https://www.thoughtco.com/thmb/a7-oKjWsmE8sn4zZ3sr2nPwBMd4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/JavaScript-58acbb8a3df78c345bad32c2.jpg", "completed": false, "_id": uuid()}
]

todoRouter.post("/", (req, res) => {
    const newtodo = req.body
    newtodolist._id = uuid()
    movies.push(newtodo)
    res.send(`Successfully added ${todoList.name} to the database!`)
})

todoRouter.get("/", (req, res) => {
    res.send(todoList)
})
todoRouter.delete('/', (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(todoList => todoList._id === todoId)
    todoList.splice(todoIndex, 1)
    res.send("Completed Bounty")
})
todoRouter.put("/:todolistId", (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todoList[todoIndex], req.body)
    res.send(updatedTodo)
})
module.exports = todoRouter