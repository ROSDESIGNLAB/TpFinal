var express = require('express');
var router = express.Router();
// let productosController = require('../controllers/productosController')
let homeController = require('../controllers/homeController')

/* GET home page. */
router.get('/busqueda/:id', homeController.buscarProductos) 

module.exports = router;