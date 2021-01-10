const fetch = require('node-fetch');

const getWeather = async () => {
  const response = await fetch('https://vejr.eu/api.php?location=aalborg&degree=C');
  const json = await response.json();

  return json;
}

exports.getWeather = getWeather;