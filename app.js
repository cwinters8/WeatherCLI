const weather = require('./weather');

const args = process.argv;
let location = args.splice(2);
location = location.join(' ');
weather.get(location);