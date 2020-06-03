/**
 * FABIAN NAULA
 * 
 */

/***********/
/**REQUIRES**/
/***********/
//es requerido el js que esta en otra carpeta y con el const se hace una destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//para traer el argv del archivo de yars
const argv = require('./config/yargs').argv;
//para trear colores
var colors = require('colors');


console.log(argv);


//COMANDOS INDEPENDIENTES estan en la posicion 0 del argv que no tienen un par

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear');

        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado:`, colors.red(`${archivo} con un total de ${argv.limite}`)));
        break;

    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);


        break;

    default:
        console.log('comando no reconocido');
}



//recibir parametros desde la consola
let argv2 = process.argv;

//aqui se obtiene los datos de argv que es un objeto
//console.log('limite', argv.limite, argv.base);

/* let parametro = argv2[2];
let base = parametro.split('=')[1] */

//