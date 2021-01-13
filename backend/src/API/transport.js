const fetch = require('node-fetch');
const parser = require('xml2json');

const baseUrl = 'http://xmlopen.rejseplanen.dk/bin/rest.exe/';

const getStops = async (coordX, coordY) => {
  const url = `${baseUrl}stopsNearby?coordX=${coordX}&coordY=${coordY}`;

  const response = await fetch(url);
  const data = await response.text();
  const json = parser.toJson(data);
  
  return json;
}

const getDepatures = async () => {
  const url = `${baseUrl}multiDepartureBoard?id1=851946602&id2=8600020`; //

  const response = await fetch(url);
  const data = await response.text();
  const json = parser.toJson(data);
  
  return json;
}

exports.getStops = getStops;
exports.getDepatures = getDepatures;