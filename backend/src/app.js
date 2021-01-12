const express = require('express');
require('dotenv').config();

const news = require('./routes/news');
const weather = require('./routes/weather')
const transport = require('./routes/transport')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to HomeDashboard v0.0.1');
})

app.use('/news', news);
app.use('/weather', weather);
app.use('/transport', transport);


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})