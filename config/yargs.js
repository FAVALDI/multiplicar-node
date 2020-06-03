const opts = {
    base: {
        //demand es un valor obligatorio
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')

//el primero es el comando que se va ejecutar, el segundo es un mensaje para el usuario, y tercer argumento es un objeto que 
//va a recibir como las flag que este copmando pueda introducir

.command('listar', ' Imprime en consola la tabla de multiplicar', opts)
    /* por cada uno se debe poner un command */
    .command('crear', ' Genera una tabla de multiplicar', opts)
    .help()
    .argv; // para cuando no lleva / no es un paquete

module.exports = {

    argv

}