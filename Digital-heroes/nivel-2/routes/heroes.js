const express = require('express');
const router = express.Router ();
const heroesController = require('../controllers/heroesController')
// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/', heroesController.mensajeHome);
// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/detalle/:id', heroesController.mostrarNombreProfesion);
// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/bio/:id/:ok?', heroesController.mostrarBio);
module.exports = router;
