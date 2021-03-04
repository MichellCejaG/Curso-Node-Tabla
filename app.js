const fs= require('fs');
const {crearArchivo} = require ('./helpers/multiplicar');
const argv= require('./config/yargs');

console.clear();



console.log('base: yargs', argv.b);

crearArchivo (argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch ( err => console.log(err));


