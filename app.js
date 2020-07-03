const {argv} = require('./config/yargs');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch( comando ) {
    case 'listar':
        listarTabla(base, limite)
    break;
    case 'crear':
        crearArchivo(base).then( res =>{

            console.log(`Archivo Creado ${res}`);
        
        }
        ).catch(
            e => {console.log(e)}
        );
    break;
    default:
    break;
}





