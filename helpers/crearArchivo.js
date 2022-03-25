const fs = require('fs'),
    rutaNuevoArchivo = './resources/IPsOrdenadas.txt';

const crearArchivoIPsOrdenadas = (IPsOrdenadas) => {

    try {
        
        let salida = "";

        IPsOrdenadas.forEach((ip, index, arr) => {
            salida += `${ip.octeto1}.${ip.octeto2}.${ip.octeto3}.${ip.octeto4}/${ip.mascara}${index !== arr.length - 1 ? '\n' : ''}`;
        });

        fs.writeFileSync(rutaNuevoArchivo, salida);

        console.log('Archivo IPsOrdenadas.txt creado');

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivoIPsOrdenadas
}