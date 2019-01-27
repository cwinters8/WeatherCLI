const request = require('./request');
const key = '0918d9944dd0f380a848983f6a024ae0';

/**
 * Parses the data from the request module and prints out a message to the console
 * @param {string} stringData 
 */
function parseWeather(stringData) {
    try {
        const json = JSON.parse(stringData);
        const temp = json.main.temp;
        const city = json.name;
        const message = `Current temperature in ${city} is ${temp}F`;
        console.log(message);
    } catch (error) {
        console.error('Invalid location parameter');
    }
}

/**
 * Gets data from the Open Weather Map API
 * @param {string} location 
 */
function get(location) {
    let query;
    if (parseInt(location)) {
        query = `zip`;
    } else {
        query = `q`;
    }
    query += `=${location}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?${query}&units=imperial&APPID=${key}`;
    request.request(url, parseWeather);
}

module.exports.get = get;