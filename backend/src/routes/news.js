const express = require('express');
const news = require('../API/news');

const router = express.Router();

router.get('/', async (req, res) => {
  let articles = await news.getNews();
  res.send(articles);
})

module.exports = router;