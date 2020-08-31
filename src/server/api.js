const fetch = require("node-fetch");

//Global Variables
const geonames = "http://api.geonames.org/searchJSON?q=";
const WeatherBit = "https://api.weatherbit.io/v2.0/history/daily?";
const Pixabay = "https://pixabay.com/api/";

//API call for Geonames API
const callGeo = async (city) => {
    const GeoUrl = `${geonames}${encodeURIComponent(city)}&maxRows=1&username=${process.env.geoUserName}`

    try {
        const response = await fetch(GeoUrl);
        const data = await response.json();
        return data;
    } catch (error) {console.log('GeoNames API Error')}
}

//API call for Weatherbit API
const callWeatherbit = async (lattitude, longitude, start, end) => {
    const WeatherUrl = `${WeatherBit}&lat=${lattitude}&lon=${longitude}&start_date=${start}&end_date=${end}&key=${process.env.WeatherApiKey}`
    try {
        const response = await fetch(WeatherUrl);
        const data = await response.json();
        return data;
    } catch (error) {console.log('WeatherBit API Error')}
}

//API call for Pixabay API
const callPixabay = async (search) => {
    const PixUrl = `${Pixabay}?key=${
        process.env.PixApiKey}&q=${encodeURIComponent(search)}&image_type=photo&pretty=true`
    try {
        const response = await fetch(PixUrl);
        const data = await response.json();
        return data;
    } catch (error) {console.log('Pixabay API Error')}
}

exports.callGeo = callGeo;
exports.callWeatherbit = callWeatherbit;
exports.callPixabay = callPixabay;