var restler = require('restler')

let self = {}

self.busqueda = function(id){ 
  let productos = new Promise(function(resolve, reject){ 
    restler.get('https://api.mercadolibre.com/sites/MLA/search?limit=4&q=' + id).on('complete', function(result) {
    resolve(result);
    }).on('fail', function(err) {
      reject(err)
    })
  })  
  return productos
}

/*self.producto = function(data){
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }

}*/

module.exports = self