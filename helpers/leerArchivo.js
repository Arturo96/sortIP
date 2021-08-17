const fs = require('fs'),
    rutaArchivo = './resources/IPs.txt';

const leerIPs = () => {

    // Verificar si el archivo existe

    if(fs.existsSync(rutaArchivo)) {

        let ipsObj = [];
       
        // Leer el archivo

        const info = fs.readFileSync(rutaArchivo, {encoding: 'UTF-8'});

        // Agrupar las IPs en un arreglo

        let IPs = info.split("\r\n");

        IPs = IPs.filter(ip => ip.length !== 0);

        // Eliminamos duplicados

        let ipsOrganizadas = new Set(IPs);

        for (const i of ipsOrganizadas) {
            
            let octetos = i.split(".");

            const [octeto1, octeto2, octeto3] = octetos;
            
            let aux = octetos[3].split("/");

            const [octeto4, mascara] = aux;

            console.log(octeto4, mascara);

        }
    } 

    else console.log('Archivo no encontrado.');

}

module.exports = {
    leerIPs
}