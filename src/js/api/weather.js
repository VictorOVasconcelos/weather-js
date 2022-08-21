const keyAPI = `5f368db2d8ee713b9759b96de62cbf6e`;

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

const createAPILogic = () => {
    const cityName = searchInput.value;
    const geocodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${keyAPI}`;

    const getGeocodingData = async () => {
        const fetchGeocoding = await fetch(geocodingURL);
        const jsonGeocodingData = await fetchGeocoding.json();

        const cityLatitude = jsonGeocodingData[0].lat;
        const cityLongitude = jsonGeocodingData[0].lon;

        console.log(cityLatitude);
        console.log(cityLongitude);
    }
    getGeocodingData();
}