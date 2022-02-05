const mongoose = require('mongoose')
const Schema = mongoose.Schema


const inventorySchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    releaseYear: Number
})

module.exports = mongoose.model("Inventory", inventorySchema)