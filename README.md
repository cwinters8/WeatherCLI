# Weather CLI
Node.js CLI app that prints out a string with the current temperature for a specified location

## Usage
There are a couple of different methods you can use to specify the location to get a temperature for a given location.

With a zip code:
```bash
node app.js 90210
```

Or with a city name:
```bash
node app.js Beverly Hills
```

You can also specify a city with a country code:
```bash
node app.js London, GB
```

Unfortunately, the API used (Open Weather Map) does not allow us to specify the state along with the city name. If the city you want to get information for is ambiguous, I recommend you specify a zip code instead.

## Technologies Used
Node.js  
JavaScript  
Open Weather Map API