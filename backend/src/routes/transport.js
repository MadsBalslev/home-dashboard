const express = require('express');
const transport = require('../API/transport');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await transport.getDepatures();
  res.send(data);
})

router.get('/nearbyStops', async (req, res) => {
  const cordX = req.params.cordX;
  const cordY = req.params.cordY;

  const data = await transport.getStops(cordX, cordY);
  res.send(data);
})

module.exports = router;