let projectData = {};
let curTemp
let feelsLike
let useResp

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
const port = 8000;
function listening(){
    console.log("server is running now");
    console.log(`running on the localhost: ${port}`)}

const server = app.listen(port, listening);

// Adding a GET ROUTE to add data to projectData array

app.get('/all', sendData);

function sendData (request, response) {
    response.send(projectData);
    console.log(projectData);
}

//Adding Project Data (User Data) to to leveraged when dynamically updating UI
function addWeather (request, response) {
    console.log(request.body);
    projectData["temperature"] = request.body.temperature;
    projectData["feelings"] = request.body.feelings;
    projectData["date"] = request.body.date;
    response.send(projectData);
    console.log(projectData);
    return projectData;
}


app.post('/weatherdata', addWeather);