const fetch = require('node-fetch');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into both form fields

let formCity = document.getElementById('city').value
let formDate1 = document.getElementById('date_start').value
let formDate2 = document.getElementById('date_end').value

console.log("::: Form Submitted :::");

const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
    body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    }
    catch(error) {
      console.log("error", error);
      }
  }

postData('/api', {city: formCity, stdate: formDate1, endate: formDate2})
    .then(function(res) {
        console.log(res);
        document.getElementById('duration').innerHTML = `<h1>${res.city}</h1><br><h5>Your trip is starting on ${res.start} and ending on ${res.end}</h5>`;
        document.getElementById('temp').innerHTML = `<h5>The current weather for ${res.city} is the below:<br>${res.weather}<br>High Temp: ${res.high_temp}<br>Low Temp: ${res.low_temp}</h5>`;
        document.getElementById('image').innerHTML = `<img id="pix" src=${res.image}>`;
    }
    )
}

export { handleSubmit }

const 