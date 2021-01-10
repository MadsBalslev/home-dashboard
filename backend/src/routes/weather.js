const express = require('express');
const weather = require('../API/weather');

const router = express.Router();

router.get('/', async (req, res) => {
  const localWeather = await weather.getWeather();
  res.send(localWeather);
})

module.exports = router;