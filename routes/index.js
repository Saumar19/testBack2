// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('Bienvenida a mi API');
});

router.use('/productos', require('./productos')); //usara los metodos de productos.js

// exportamos nuestro nuevo router
module.exports = router;

/* con el método use de nuestro router estamos indicando 
* que en la ruta 'v1/productos' estarán anidadas las rutas 
* que vamos a crear en nuestro archivo productos.js,
* la función require está importando este archivo */