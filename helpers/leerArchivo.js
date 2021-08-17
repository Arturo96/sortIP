const fs = require('fs'),
    rutaArchivo = './resources/IPs.txt';

const leerIPs = () => {

    // Verificar si el archivo existe

    if(fs.existsSync(rutaArchivo)) {
       
        // Leer el archivo

        const info = fs.readFileSync(rutaArchivo, {encoding: 'UTF-8'});

        // Agrupar las IPs en un arreglo

        let IPs = info.split("\r\n");

        IPs = IPs.filter(ip => ip.length !== 0);

        // IPs.pop();

        // Organizar las direcciones IPs

        IPs.sort();

        // Eliminamos duplicados

        let ipsOrganizadas = new Set(IPs);

        for (const i of ipsOrganizadas) {
            console.log(`IP: ${i}`);
        }
    } 

    else console.log('Archivo no encontrado.');

}

module.exports = {
    leerIPs
}