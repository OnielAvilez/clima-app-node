const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "Descripcion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);

//clima.getClima(14.090000, -87.220001)
//    .then(console.log)
//    .catch(console.log);

const getinfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return console.log(`El clima de ${coords.direccion} es de ${temp}`)
    } catch {
        console.log(`No se puede determinar el clima de ${coords.direccion}`)
    }

    //let info = await lugar.getLugarLatLng(direccion)
    //    .then(cli => clima.getClima(cli.lat, cli.lng)
    //        .then(temp => console.log(`El clima de ${cli.direccion} es de ${temp}`))
    //        .catch(console.log(`No se puede determinar el clima de ${cli.direccion}`))
    //    );
}

getinfo(argv.direccion)
    .then(console.log)
    .catch(console.log);