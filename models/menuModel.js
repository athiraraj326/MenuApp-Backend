const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    menuName:{
        type:String,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

const items = mongoose.model("items",menuSchema)

module.exports = items