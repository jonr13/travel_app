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
    console.log('post working')}
    )
}

export { handleSubmit }

