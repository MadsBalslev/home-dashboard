const express = require('express');
const spotify = require('../API/spotify');

const router = express.Router();

router.get('/', async (req, res) => {
  const json = await spotify.getCurrentlyPlaying();
  res.send(json);
})

module.exports = router;