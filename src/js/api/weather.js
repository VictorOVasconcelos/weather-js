const keyAPI = `5f368db2d8ee713b9759b96de62cbf6e`;

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const cityInfoName = document.querySelector('.city-info-name');
const countryInfoName = document.querySelector('.country-info-name');

const createAPILogic = () => {
    const cityName = searchInput.value;

    const getPositionData = async () => {
        const geocodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${keyAPI}`;

        const geocodingFetch = await fetch(geocodingURL);
        const geocodingData = await geocodingFetch.json();

        const cityLatitude = geocodingData[0].lat;
        const cityLongitude = geocodingData[0].lon;

        console.log(geocodingData[0]);

        cityInfoName.innerHTML = `${geocodingData[0].name}`;

        const getCountryData = async () => {
            const countryName = geocodingData[0].country;
            console.log(countryName);
            const countryURL = `https://restcountries.com/v3.1/alpha/${countryName}`;

            const countryFetch = await fetch(countryURL);
            const countryData = await countryFetch.json();

            console.log(countryData);

            countryInfoName.innerHTML = `${countryData[0].name.common}`;
        }
        getCountryData();

        const getWeatherData = async () => {
            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=${keyAPI}`;
    
            const fetchWeather = await fetch(weatherURL);
            const jsonWeatherData = await fetchWeather.json();
    
            console.log(jsonWeatherData);
        }
        getWeatherData();
    }
    getPositionData();
}