const fetch = require('node-fetch');

const lat = '57.052631';
const lon = '9.902810';

const getWeather = async () => {

  const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall';
  const paramaters = {
    appid: process.env.WEATHER_API_KEY,
    lat: lat,
    lon: lon,
    exclude: 'minutely,hourly',
    units: 'metric',
    lang: 'da'
  }

  const url = new URL(baseUrl);
  url.search = new URLSearchParams(paramaters);

  const weatherResponse = await fetch(url);
  const weather = await weatherResponse.json();

  return weather;
}

const getLocationInfo = async () => {
  const locationUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=36952dced6e7403f868a506e33ccd3ac`
  const locationResponse = await fetch(locationUrl);
  const location = await locationResponse.json();

  return location;
}

exports.getWeather = getWeather;
exports.getLocationInfo = getLocationInfo;