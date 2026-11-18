const express = require('express');
const router = express.Router();
const calificacionController = require('../controllers/calificacionController');

router.get('/', calificacionController.mostrarVista);
router.post('/calcular', calificacionController.calcularPromedio);

module.exports = router;