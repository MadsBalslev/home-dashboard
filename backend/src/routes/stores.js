const express = require('express');
const stores = require('../API/stores');

const router = express.Router();

router.get('/dsg', async (req, res) => {
  const json = await stores.getDSGOpeningHours('57.052631', '9.902810');
  res.send(json);
})

router.get('/coop', async (req, res) => {
  const json = await stores.getCOOPOpeningHours('57.052631', '9.902810');
  res.send(json);
})

module.exports = router;