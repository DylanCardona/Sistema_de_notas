class CalificacionModel {
    static evaluarNotas(n1, n2, n3) {
        const notas = [parseFloat(n1), parseFloat(n2), parseFloat(n3)];

        // Validar que sean números y estén entre 0.0 y 5.0
        for (const nota of notas) {
            if (isNaN(nota) || nota < 0.0 || nota > 5.0) {
                return {
                    error: 'Todas las notas deben ser valores numéricos entre 0.0 y 5.0.'
                };
            }
        }

        const suma = notas[0] + notas[1] + notas[2];
        const promedio = Number((suma / 3).toFixed(2));
        const estado = promedio >= 3.0 ? 'Aprobado' : 'Reprobado';

        return {
            notas,
            promedio: promedio.toFixed(2),
            estado,
            esAprobado: promedio >= 3.0
        };
    }
}

module.exports = CalificacionModel;