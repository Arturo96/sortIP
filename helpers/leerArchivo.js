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

        let ipsFiltradas = new Set(IPs),
            arregloIP = [];

        for (const i of ipsFiltradas) {
            
            let octetos = i.split(".");

            const [octeto1, octeto2, octeto3] = octetos;
            
            let aux = octetos[3].split("/");

            const [octeto4, mascara] = aux;

            const objetoIP = {
                octeto1: Number(octeto1),
                octeto2: Number(octeto2),
                octeto3: Number(octeto3),
                octeto4: Number(octeto4),
                mascara: Number(mascara)
            }
            
            arregloIP.push(objetoIP);

        }

        arregloIP.sort((a, b) => {

            const orden1 = a.octeto1 - b.octeto1;
            const orden2 = a.octeto2 - b.octeto2;
            const orden3 = a.octeto3 - b.octeto3;
            const orden4 = a.octeto4 - b.octeto4;

            if(orden1 !== 0) return orden1;
            if(orden2 !== 0) return orden2;
            if(orden3 !== 0) return orden3;

            return orden4;

        })

        return arregloIP;
    } 

    else console.log('Archivo no encontrado.');

}

module.exports = {
    leerIPs
}