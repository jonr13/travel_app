const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const reg = require("regenerator-runtime");

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
const port = 8081
const printPort = (port) => {
    console.log(`App is listening on port ${port}`)}
    // designates what port the app will listen to for incoming requests

app.listen(port, printPort(port));

/* Global Variables */

// Create a new date instance dynamically with JS


const monthDict = {'1': 'January', '2': 'February', '3': 'March', '4': 'April', '5': 'May', '6': 'June', '7': 'July', '8': 'August', '9': 'September', '10': 'October', '11': 'November', '12': 'December'}
let gtMn = d.getMonth();
let newMonth = monthDict[gtMn]
let newYear = d.getFullYear();
let newDay = d.getDate();
let finalDate = `Your Weather for ${newMonth} ${newDay}, ${newYear}`

document.getElementById('generate').addEventListener('click', clickFunc)

//Get Request Function
const weatherData = async (baseURL, zipCode, apiKey) => {
    const finalURL = `${baseURL}zip=${zipCode},${countryCode}&units=metric&appid=${apiKey}`;
    const response = await fetch (finalURL)
        try {const data = await response.json(); return data;}
        catch(error) {console.log("There was an error", error);}
    }

// Post request Function
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
            'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),});
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log('error', error);
    }
    }

//Update UI with Weather Data
const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        console.log(allData.date);
        document.getElementById('temp').innerHTML = `Current Temperature: ${allData.temperature}`;
        document.getElementById('date').innerHTML = `Update: ${allData.date}`;
        document.getElementById('content').innerHTML = `How You're Feeling: ${allData.feelings}`;
   }catch(error) {
       console.log('error updating UI')
   }
}

//Eventl Listener to Gather Zip Code, User Feelings, and dynamically post to UI
function clickFunc(e) {
    const zipCode = document.getElementById('zip').value;
    const userRespon = document.getElementById('feelings').value;
    weatherData(baseURL, zipCode, apiKey)
    .then(function(data){console.log(data);
        postData('/weatherdata', {temperature: data.main.temp, feelings: userRespon, date: finalDate});
    }).then(() => {
        updateUI();
       });
    }

