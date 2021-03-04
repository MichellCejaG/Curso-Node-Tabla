var color= require('colors');
const argv= require('yargs')
    .option('b',{
        alias: 'base',
        type:'number',
        demandOption: true,
        describe: 'Es la base para multiplicar'.green

    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limite de numeros a multiplicar'.green
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'.green
    })
    
    .check((argv, optios) =>{
        if(isNaN(argv.base)){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;


    module.exports=argv;