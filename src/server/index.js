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

/* Global Variables */
//import { callGeo } from './api.js'
//import { callWeatherbit } from './api.js'
//import { callPixabay } from './api.js'



app.post('/api', function (req, res) {
    let ReqStart = req.body.stdate;
    let ReqEnd = req.body.endate;
    let ReqCity = req.body.city;
    const callApis = async () => {
        const data1 = await api.callGeo(ReqCity);
        const dataGeo = data1['geonames'][0];
        const lattitude = dataGeo['lat'];
        const longitude = dataGeo['lng'];
        const weather = await api.callWeatherbit(lattitude, longitude, ReqStart, ReqEnd);
        console.log(weather);
    }
    callApis()


    //api.callWeatherbit(lattitude, longitude, ReqStart, ReqEnd);
    //let data2 = api.callPixabay(ReqCity);
    //console.log(data1);
    //console.log(data2);
})