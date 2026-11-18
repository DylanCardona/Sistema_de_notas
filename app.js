const express = require('express');
const path = require('path');
const calificacionRoutes = require('./routes/calificacionRoutes');

const app = express();
const PORT = 3001;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use('/', calificacionRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});