const fetch = require('node-fetch');

const getDSGOpeningHours = async (lat, lon) => {
  const baseUrl = `https://api.sallinggroup.com/v2/stores?geo=${lat},${lon}&radius=1.5`;
  const headers = {
    Authorization: `Bearer ${process.env.DSG_KEY}`
  }

  const response = await fetch(baseUrl, {headers: headers})
  const json = await response.json();

  return json
}

const getCOOPOpeningHours = async (lat, lon) => {
  const baseUrl = `https://api.cl.coop.dk/storeapi/v1/stores/find/radius/1500?latitude=${lat}&longitude=${lon}`;
  const headers = {
    'Ocp-Apim-Subscription-Key': `${process.env.COOP_KEY}`
  }

  const response = await fetch(baseUrl, {headers: headers})
  const json = await response.json();

  return json
}

exports.getDSGOpeningHours = getDSGOpeningHours;
exports.getCOOPOpeningHours = getCOOPOpeningHours;