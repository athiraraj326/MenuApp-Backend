const express = require('express')
const menuController = require('../controllers/menuController')

const router = new express.Router()

// get all menu items
router.get('/menu-items',menuController.getAllMenuController)

// get selected items
router.get('/menu-items/:category',menuController.getItemController)

module.exports = router