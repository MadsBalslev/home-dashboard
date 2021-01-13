const fetch = require('node-fetch');

const getCurrentlyPlaying = async () => {
  const url = 'https://api.spotify.com/v1/me/player/currently-playing';
  const headers = {
    Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`
  }

  const response = await fetch(`${url}?market=dk`, {headers: headers});
  const json = await response.json();

  return json;
}

exports.getCurrentlyPlaying = getCurrentlyPlaying;