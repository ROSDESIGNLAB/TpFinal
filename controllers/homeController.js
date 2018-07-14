homeService = require('../services/homeServices')

let self = {}

self.buscarProductos = function(req, res){
  let id = req.params.id
  busquedaService.busqueda(id).then(function(productos){
     //busquedaService.producto(productos.results)
    return res.json(productos.results)
  }).catch(function(err) {
    console.log(err)
  }) 	 
};



module.exports = self