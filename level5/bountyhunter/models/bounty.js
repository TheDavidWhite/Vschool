
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    worth: {
        type: Number,
        required: true
    },
    img: {
        type: String
    }
})
module.exports = mongoose.model("Bounty", bountySchema)