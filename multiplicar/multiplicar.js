const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if ( !Number(base)){
            reject(`El valor ${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 0; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i} \n`
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject( err )
            else
                resolve(`tabla-${base}.txt`.trap.rainbow)
        });
    })
}

let listarTabla = ( base, limite ) => {
    console.log('---------Tabla de Multiplicar-------'.red)
    for ( let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
    console.log('---------Tabla de Multiplicar-------'.green)
}
module.exports = {
    crearArchivo,
    listarTabla
}

