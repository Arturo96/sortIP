const { leerIPs } = require("./helpers/leerArchivo");

const IPsOrdenadas = leerIPs();

console.log(IPsOrdenadas);