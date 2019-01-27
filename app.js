const weather = require('./weather');

const args = process.argv;
const location = args[2];
weather.get(location);