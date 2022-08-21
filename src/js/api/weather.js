const keyAPI = `5f368db2d8ee713b9759b96de62cbf6e`;

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

const createAPILogic = () => {
    var cityLatitude, cityLongitude;

    const cityName = searchInput.value;
    const geocodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${keyAPI}`;

    const getGeocodingData = async () => {
        const fetchGeocoding = await fetch(geocodingURL);
        const jsonGeocodingData = await fetchGeocoding.json();

        cityLatitude = jsonGeocodingData[0].lat;
        cityLongitude = jsonGeocodingData[0].lon;

        const getWeatherData = async () => {
            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=${keyAPI}`;

            const fetchWeather = await fetch(weatherURL);
            const jsonWeatherData = await fetchWeather.json();

            console.log(jsonWeatherData);
        }
        getWeatherData();
    }
    getGeocodingData();
}