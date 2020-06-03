//requireds 
const fs = require('fs');
//const fs = require('express');

//para trear colores
var colors = require('colors');


let listarTabla = (base, limite) => {

    console.log('====================='.blue);
    console.log(`Tabla de base ${base}`.green);
    console.log('====================='.blue);


    for (let i = 1; i < limite + 1; i++) {
        console.log(`${base}*${i}=${base*i}`);
    };
}


/**PERMITE CREAR UNA TABLA UN GUARDARLA EN UN ARCHIVO */

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = '';
        console.log('====================='.blue);
        console.log(`Tabla de base ${base}`.green);
        console.log('====================='.blue);

        for (let i = 1; i < limite + 1; i++) {
            data += `${base}*${i}=${base*i} \n`;
        }
        // enviar{nombre,informacion,error}
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);


        });

    });

}

//se define para regresar promesa a otro archivo

module.exports = {

    crearArchivo,
    listarTabla

}