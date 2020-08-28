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
const port = 8080
const printPort = (port) => {
    console.log(`App is listening on port ${port}`)}
    // designates what port the app will listen to for incoming requests

app.listen(port, printPort(port));

// Adding a GET ROUTE to add data to projectData array


//Adding Project Data (User Data) to to leveraged when dynamically updating UI
