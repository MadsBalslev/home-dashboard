const express = require('express');

const news = require('./routes/news');
const weather = require('./routes/weather')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to HomeDashboard v0.0.1');
})

app.use('/news', news);
app.use('/weather', weather);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})