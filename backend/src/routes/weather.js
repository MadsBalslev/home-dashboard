const express = require('express');
const weather = require('../API/weather');

const router = express.Router();

router.get('/', async (req, res) => {
  const localWeather = await weather.getWeather();
  res.send(localWeather);
})

router.get('/location', async (req, res) => {
  const location = await weather.getLocationInfo();
  res.send(location);
})

module.exports = router;