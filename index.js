const { crearArchivoIPsOrdenadas } = require("./helpers/crearArchivo");
const { leerIPs } = require("./helpers/leerArchivo");

const IPsOrdenadas = leerIPs();

crearArchivoIPsOrdenadas(IPsOrdenadas);