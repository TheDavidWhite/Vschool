const express = require('express')
const fruitRouter = express.Router()
const { v4: uuid } = require('uuid')

const inventoryItems = [
    {name: "banana",type: "food",price: 200, "_id": uuid() },
    {name: "pants",type: "clothing",price: 2500, "_id": uuid() },
    {name: "basket ball",type: "toy",price: 1000, "_id": uuid() },
    {name: "rockem sockem robots",type: "toy",price: 1500, "_id": uuid() },
    {name: "shirt",type: "clothing",price: 800, "_id": uuid() },
    {name: "soup",type: "food",price: 300, "_id": uuid() },
    {name: "flour",type: "food",price: 100, "_id": uuid() }
]

fruitRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})
fruitRouter.send("/search/type", (req, res) => {
    const type = req.query.type
    const filterItems = inventoryItems.filter(item => item.type === type)
    res.send(filterItems)
})
fruitRouter.post("/", (req, res) => {
    const newItem = req.body
    newItem._id = uuid()
    inventoryItems.push(newItem)
    res.send(`Successfully added ${newItem.name} to the database!`)
})