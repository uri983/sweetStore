const middleware = {};

middleware['currency'] = require('..\\middleware\\currency.js');
middleware['currency'] =
  middleware['currency'].default || middleware['currency'];

export default middleware;
