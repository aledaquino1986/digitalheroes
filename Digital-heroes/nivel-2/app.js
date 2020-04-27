// Require de Express
const express = require('express');

// Require de Main Router
const mainRouter =require("./routes/main");

// Require de Heroes Router
const heroesRouter = require("./routes/heroes");

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));


// Ruta Raíz / ➝ Home
app.use('/', mainRouter);

// Ruta Raíz / ➝ heroes
app.use('/heroes', heroesRouter);

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});