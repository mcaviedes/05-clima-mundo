const lugar = require("./lugar/lugar.js");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

lugar.getLugarLatLng(argv.direccion).then(console.log);
//console.log(argv.direccion);
//argv.direccion
