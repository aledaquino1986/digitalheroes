// Require de FS
const fs = require('fs');

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

let heroesController = {

    mensajeHome: (req, res) => {
        res.send(heroes);
    },

    mostrarNombreProfesion: (req, res) => {
        // Acá lo primero será encontrar al héroe que corresponda
        let heroe = heroes.find(heroe => heroe.id == req.params.id);
    
        // Si se encuentra al héroe se envía el nombre y su profesión
        // Si NO se encuentra se envía el mensaje de no encontrado
    
        if(heroe) {
            res.send('Hola, mi nombre es ' + heroe.nombre + ' y soy ' + heroe.profesion + '.');
        } else {
            res.send('No hay heroe con ese id.');
        }
    },

    mostrarBio: (req, res) => {
        // Acá lo primero será encontrar al héroe que corresponda
        let heroe = heroes.find(heroe => heroe.id == req.params.id);
    
        // Si NO se encuentra al héroe se envía un mensaje
        // Si se encuentra al héroe:
            // Se pregunta si vino el parámetro Y el valor esperado y se envía la información
            // Si nó vino el parámetro se envía el mensaje de error
         if(!heroe) {
             res.send('Hola, mi nombre es ' + heroe.nombre + ' y esta es mi historia.' + heroe.resenia)
         } else {
             if (req.params.ok != undefined && req.params.ok == 'ok') {
                 res.send('Hola, mi nombre es ' + heroe.nombre + ' y esta es mi historia.' + heroe.resenia)
             } else {
                res.send('Hola, mi nombre es ' + heroe.nombre + '. Lamento que no desees saber más de mi.');
             }
         }
    
    }
    
    
}


module.exports = heroesController;