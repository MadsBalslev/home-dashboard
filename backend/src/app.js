require('dotenv').config();
const express = require('express');
const cors = require('cors');

const news = require('./routes/news');
const weather = require('./routes/weather')
const transport = require('./routes/transport')
const spotify = require('./routes/spotify');
const stores = require('./routes/stores')

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  console.log(process.env.SPOTIFY_ACCESS_TOKEN);
  res.send('Welcome to HomeDashboard v0.0.1');
})

app.use('/news', news);
app.use('/weather', weather);
app.use('/transport', transport);
app.use('/spotify', spotify);
app.use('/stores', stores);


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})