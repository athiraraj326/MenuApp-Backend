const items = require('../models/menuModel')

// get all menu
exports.getAllMenuController = async (req,res)=>{
    console.log("Inside getAllMenuController");
    try{
        const getAllMenu = await items.find()
        res.status(200).json(getAllMenu)
    }
    catch(err){
        res.status(401).json(err)        
    }
}

// get items based on category
exports.getItemController = async (req,res)=>{
    console.log("Inside getItemController");
    const {category} = req.params
    try{
        const getItems = await items.find({menuName:category})
        res.status(200).json(getItems)
    }
    catch(err){
        res.status(401).json(err)        
    }
}