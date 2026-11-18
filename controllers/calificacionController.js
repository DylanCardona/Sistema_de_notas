const CalificacionModel = require('../models/calificacionModel');

const mostrarVista = (req, res) => {
    res.render('index', { resultado: null, error: null, valores: {} });
};

const calcularPromedio = (req, res) => {
    const { nota1, nota2, nota3 } = req.body;
    const evaluacion = CalificacionModel.evaluarNotas(nota1, nota2, nota3);

    if (evaluacion.error) {
        return res.render('index', {
            resultado: null,
            error: evaluacion.error,
            valores: { nota1, nota2, nota3 }
        });
    }

    res.render('index', {
        resultado: evaluacion,
        error: null,
        valores: { nota1, nota2, nota3 }
    });
};

module.exports = {
    mostrarVista,
    calcularPromedio
};