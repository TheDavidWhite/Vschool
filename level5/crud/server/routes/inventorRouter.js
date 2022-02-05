const express = require('express')
const InventorRouter = express.Router()
const inventory = require('../models/inventory')

InventorRouter.get('/', (req, res, next) => {
    inventory.find((err, inventorys)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventorys)
    })
})

InventorRouter.post("/", (req, res, next) => {
    const newinventory = new inventory(req.body)
    newinventory.save((err, savedinventory)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedinventory)
    })
})

InventorRouter.delete("/:inventoryId", (req, res, next) => {
    inventory.findOneAndDelete({ _id: req.params.inventoryId }, (err, deletedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
    })
})
InventorRouter.put("/:inventoryId", (req, res, next) => {
    inventory.findOneAndUpdate(
        { _id: req.params.inventoryId },
        req.body,
        { new: true },
        (err, updatedinventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedinventory)
        }
    )
})
InventorRouter.get('/:id', (req, res, next) => {
    inventory.find((err, inventory)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})



module.exports = InventorRouter