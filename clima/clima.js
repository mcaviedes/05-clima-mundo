const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6af5d1d8d3b6b2d76b3af0b0185eae54&units=metric`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima
};
