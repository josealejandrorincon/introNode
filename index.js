//cargando libreria axios en node
const axios = require("axios")

let urlCompleted = "https://api.openweathermap.org/data/2.5/weather?q=Bogota, col&appid=571caea310bf270dcf5cf2301a8270a9"

let requestConfig = {
    url: urlCompleted,
};

let objPromesa = axios(requestConfig);

objPromesa
    .then((result) => {
        console.log("la temeperatura en bogota es: "+(result.data.main.temp-273.15)+ "grados celcius")
    })
    .catch((err) => {
        console.log(err);
    })