const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const reg = require("regenerator-runtime");
const api = require("./api");


// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware. - allows use to parse JSON
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance - allows requesting from a domain outside its own origin domain
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


// Setup Serverconst
const port = 8080
const printPort = (port) => {
    console.log(`App is listening on port ${port}`)}
    // designates what port the app will listen to for incoming requests

app.listen(port, printPort(port));

let dataset = {}

app.post('/api', function (req, res) {
    dataset['start'] = req.body.stdate;
    dataset['end'] = req.body.endate;
    dataset['city'] = req.body.city;
    const callApis = async () => {
        const data1 = await api.callGeo(dataset['city']);
        const lattitude = data1['lat'];
        const longitude = data1['lng'];
        try {WeatherData = await api.callWeatherbit(lattitude, longitude);
        dataset['datetime'] = WeatherData['data'][0]['datetime'];
        dataset['low_temp'] = ((WeatherData['data'][0]['low_temp']) * (9 / 5) + 32);
        dataset['high_temp'] = ((WeatherData['data'][0]['high_temp']) * (9 / 5) + 32);
        dataset['weather'] = WeatherData['data'][0]['weather']['description'];
        dataset['image'] = await api.callPixabay(dataset['city']);
        //high temp, lowtemp, datetime, weather
        console.log(dataset);
        res.send(dataset);
            }
        catch(error) {alert('Please enter start and end date in YYYY-MMM-DD format!')}
        }
    callApis()
})

module.exports = printPort()