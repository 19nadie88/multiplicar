const opts = {
    base: {
        demand: true, //obligatorio
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs').command('listar', 'Imprimir en consola la tabla de multiplicar', opts)
.command('crear', 'Genera archivo de la tabla de multiplicar', opts)
.help()
.argv;

module.exports = {
    argv
}