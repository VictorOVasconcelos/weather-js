const keyAPI = `5f368db2d8ee713b9759b96de62cbf6e`;

const searchInput = document.querySelector('.form-input');
const searchButton = document.querySelector('.form-button');

const cityName = document.querySelector('.city-name');
const countryCode = document.querySelector('.country-code');
const currentText = document.querySelector('.current-text');
const currentTemp = document.querySelector('.current-temp');

const maxValue = document.querySelector('#max-value');
const minValue = document.querySelector('#min-value');
const windValue = document.querySelector('#wind-value');
const rainValue = document.querySelector('#rain-value');
const sunsetValue = document.querySelector('#sunset-value');
const sunriseValue = document.querySelector('#sunsire-value');

const createAPILogic = () => {
    const cityNameValue = searchInput.value;

    const getPositionData = async () => {
        const geocodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityNameValue}&limit=5&appid=${keyAPI}`;

        const geocodingFetch = await fetch(geocodingURL);
        const geocodingData = await geocodingFetch.json();

        const cityLatitude = geocodingData[0].lat;
        const cityLongitude = geocodingData[0].lon;

        cityName.innerHTML = `${geocodingData[0].name},`;

        const getCountryData = async () => {
            const countryName = geocodingData[0].country;
            const countryURL = `https://restcountries.com/v3.1/alpha/${countryName}`;

            const countryFetch = await fetch(countryURL);
            const countryData = await countryFetch.json();

            countryCode.innerHTML = `${countryData[0].cioc}`;
        }
        getCountryData();

        const getWeatherData = async () => {
            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=${keyAPI}`;
    
            const fetchWeather = await fetch(weatherURL);
            const jsonWeatherData = await fetchWeather.json();

            windValue.innerHTML = `${jsonWeatherData.wind.speed}m/s`;
            rainValue.innerHTML = `${jsonWeatherData.main.humidity}%`;
            currentText.innerHTML = `${jsonWeatherData.weather[0].description}`;

            console.log(jsonWeatherData);

            const getTemperature = () => {
                const tempInKelvin = jsonWeatherData.main.temp;
                
                const maxTempInKelvin = jsonWeatherData.main.temp_max;
                const minTempInKelvin = jsonWeatherData.main.temp_min;

                const tempInCelsius = tempInKelvin - 273.15;

                const maxInCelsius = maxTempInKelvin - 273.15;
                const minInCelsius = minTempInKelvin - 273.15;

                const formatedMax = maxInCelsius.toFixed();
                const formatedMin = minInCelsius.toFixed();
                const formatedTemp = tempInCelsius.toFixed();

                maxValue.innerHTML = `${formatedMax}º`;
                minValue.innerHTML = `${formatedMin}º`;
                currentTemp.innerHTML = `${formatedTemp}º`;
            }
            getTemperature();

            const getSunTime = () => {
                const sunsetUnix = jsonWeatherData.sys.sunset;
                const sunriseUnix = jsonWeatherData.sys.sunrise;

                const newDateSunset = new Date(sunsetUnix * 1000);
                const newDateSunrise = new Date(sunriseUnix * 1000);

                const sunsetDate = newDateSunset.toLocaleTimeString('it-IT');
                const sunriseDate = newDateSunrise.toLocaleTimeString('it-IT');

                sunsetValue.innerHTML = `${sunsetDate}`;
                sunriseValue.innerHTML = `${sunriseDate}`;
            }
            getSunTime();
        }
        getWeatherData();
    }
    getPositionData();
}