const fetch = require('node-fetch');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into both form fields

let formCity = document.getElementById('city').value
let formDate = document.getElementById('date').value

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

postData('/api', {city: formCity, date: formDate})
    .then(function(res) {
        if (res.agreement === undefined && res.confidence === undefined && res.subjectivity === undefined && res.polarity === undefined) {
            alert("Please input a valid date!")
        } else {
            document.getElementById('results').innerHTML = `Agreement: ${res.agreement}    Polarity: ${res.polarity}    Confidence: ${res.conidence}    Subjectivity: ${res.subjectivity}`;
        }
    })

}

export { handleSubmit }

