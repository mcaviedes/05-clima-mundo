const axios = require("axios");

const getLugarLatLng = async direccion => {
  const encodedURL = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
    headers: {
      "x-rapidapi-key": "07ecd7e736mshe0aa3dfbf329269p1d3108jsn8cb674202463"
    }
  });

  const resp = await instance.get();
  if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }

  const data = resp.data.Results[0];
  const nombreDireccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    nombreDireccion,
    lat,
    lng
  };
};

module.exports = {
  getLugarLatLng
};

/*const getLugarLatLng = async direccion => {
  const encodedURL = encodeURI(argv.dir);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
    headers: {
      "x-rapidapi-key": "07ecd7e736mshe0aa3dfbf329269p1d3108jsn8cb674202463"
    }
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  /*instance
    .get()
    .then(resp => {
      console.log(resp.data.Results[0]);
    })
    .catch(err => {
      console.log("Error!!!", err);
    });*/
/*
  return {
    direccion,
    lat,
    lng
  };
};

module.exports = {
  getLugarLatLng
};*/
