const express = require('express')
const tvshowRouter = express.Router()
const { v4: uuid } = require('uuid');

const tvShows = [
    { title: "Rick and Morty", _id: uuid() },
    { title: "Watchmen", _id: uuid() },
    { title: "Westworld", _id: uuid() },
    { title: "Friends", _id: uuid() }
]

tvshowRouter.get("/:tvshowId", (req, res) => {
    const tvshowId = req.params.tvshowId
    const foundShow = tvShows.find(show => show._id === tvshowId)
    res.send(foundShow)
})
tvshowRouter.get("/", (req, res) => {
    res.send(tvShows)
})

tvshowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuid()
    tvShows.push(newShow)
    res.send(`Successfully added ${newShow.title} to the database!`)
})

module.exports = tvshowRouter
