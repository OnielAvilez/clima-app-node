const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5be860a94c6bbd9b7e1406a03128c8ab&units=metric`);
    return resp.data.main.temp
}

module.exports = {
    getClima
}