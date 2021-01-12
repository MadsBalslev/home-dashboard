const fetch = require('node-fetch');

const getWeather = async () => {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall';
  const paramaters = {
    appid: process.env.WEATHER_API_KEY,
    lat: '57.052631',
    lon: '9.902810',
    exclude: 'minutely,hourly',
    units: 'metric',
    lang: 'da'
  }

  const url = new URL(baseUrl);
  url.search = new URLSearchParams(paramaters);

  const response = await fetch(url);
  const json = await response.json();

  return json;
}

exports.getWeather = getWeather;