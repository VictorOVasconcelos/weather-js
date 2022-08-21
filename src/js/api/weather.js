const keyAPI = `5f368db2d8ee713b9759b96de62cbf6e`;

const searchInput = document.querySelector('.form-input');
const searchButton = document.querySelector('.form-button');

const cityName = document.querySelector('.city-name');
const countryCode = document.querySelector('.country-code');
const currentTemperature = document.querySelector('.current-temp');

const createAPILogic = () => {
    const cityNameValue = searchInput.value;

    const getPositionData = async () => {
        const geocodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityNameValue}&limit=1&appid=${keyAPI}`;

        const geocodingFetch = await fetch(geocodingURL);
        const geocodingData = await geocodingFetch.json();

        const cityLatitude = geocodingData[0].lat;
        const cityLongitude = geocodingData[0].lon;

        cityName.innerHTML = `${geocodingData[0].name}`;

        const getCountryData = async () => {
            const countryName = geocodingData[0].country;
            const countryURL = `https://restcountries.com/v3.1/alpha/${countryName}`;

            const countryFetch = await fetch(countryURL);
            const countryData = await countryFetch.json();

            countryCode.innerHTML = `${countryData[0].name.common}`;
        }
        getCountryData();

        const getWeatherData = async () => {
            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=${keyAPI}`;
    
            const fetchWeather = await fetch(weatherURL);
            const jsonWeatherData = await fetchWeather.json();

            const getTemperature = () => {
                const tempInKelvin = jsonWeatherData.main.temp;
                const tempInCelsius = tempInKelvin - 273.15;

                const currentTemp = tempInCelsius.toFixed();
                currentTemperature.innerHTML = `${currentTemp}ºc`;
            }
            getTemperature();
        }
        getWeatherData();
    }
    getPositionData();
}