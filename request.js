const https = require('https');

/**
 * Makes a request to an API and returns the body of the request
 * @param {string} url 
 * @param {function} callback 
 */
function request(url, callback) {
    const request = https.get(url, response => {
        let body = '';
        response.on('data', data => {
            body += data;
        });
        response.on('end', () => {
            callback(body);
        });
    });
}

module.exports.request = request;