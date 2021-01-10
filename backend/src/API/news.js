const Parser = require('rss-parser');

const parser = new Parser;

const getNews = async () => {
  const feed = await parser.parseURL('https://www.dr.dk/nyheder/service/feeds/mostread/allenyheder/');

  return feed;
}

exports.getNews = getNews;