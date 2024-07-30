require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  // Para parsear datos de formularios

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    // Opciones eliminadas ya que son obsoletas
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Importar rutas
const alumnoRoutes = require('./routes/alumnos');
const remedulesRoutes = require('./routes/remedules');
const alumnosBajaRoutes = require('./routes/alumnos_baja');

// Usar rutas
app.use('/alumnos', alumnoRoutes);
app.use('/remedules', remedulesRoutes);
app.use('/alumnos_baja', alumnosBajaRoutes);

// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('index');
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
