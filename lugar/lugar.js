const axios = require('axios');

const getLugarLatLng = async(dir) => {

    var ciudad = dir;
    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+"${ ciudad }"?json=1`
    });

    const resp = await instance.get();

    if ((resp.data.latt).length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data;
    const direccion = data.standard.city;
    const countryname = data.standard.countryname;

    const lat = data.latt;
    const lng = data.longt;


    return {
        countryname,
        direccion,
        lat,
        lng,
    }
}

module.exports = {
    getLugarLatLng
}