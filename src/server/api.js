const fetch = require("node-fetch");

//Global Variables
const geonames = "http://api.geonames.org/searchJSON?q=";
const WeatherBit = "http://api.weatherbit.io/v2.0/forecast/daily?";
const Pixabay = "https://pixabay.com/api/";

//API call for Geonames API
const callGeo = async (city) => {
    const GeoUrl = `${geonames}${encodeURIComponent(city)}
    &maxRows=1&username=${process.env.geoUserName}`

    try {
        const response = await fetch(GeoUrl);
        const data = await response.json();
        return data;
    } catch (error) {console.log('GeoNames API Error')}
}

//API call for Weatherbit API
const callWeatherbit = async (city) => {
    const WeatherUrl = `${WeatherBit}${encodeURIComponent(city)}
    &maxRows=1&username=${process.env.WeatherApiKey}`

    try {
        const response = await fetch(WeatherUrl);
        const data = await response.json();
        return data;
    } catch (error) {console.log('WeatherBit API Error')}
}
//API call for Pixabay API
const callPixabay = async (city) => {
    const PixUrl = `${Pixabay}${encodeURIComponent(city)}
    &maxRows=1&username=${process.env.PixApiKey}`

    try {
        const response = await fetch(PixUrl);
        const data = await response.json();
        return data;
    } catch (error) {console.log('Pixabay API Error')}
}
export { callGeo }
export { callWeatherbit }
export { callPixabay }
