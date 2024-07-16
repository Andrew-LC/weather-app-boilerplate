import './index.css'

// Weather API configuration
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Curried function to create API URL
const createApiUrl = (city) => (units) => `${BASE_URL}?q=${city}&units=${units}&appid=${API_KEY}`;



// Process weather data
const processWeatherData = (data) => ({
    temperature: Math.round(data.main.temp),
    description: data.weather[0].main,
    city: data.name,
    country: data.sys.country
});

// Update UI with weather data
const updateUI = (weatherData) => {
    document.getElementById('temperature').textContent = `${weatherData.temperature}°`;
    document.getElementById('weather-description').textContent = weatherData.description;
    document.getElementById('location').textContent = `${weatherData.city}, ${weatherData.country}`;
    document.getElementById('country').textContent = getCountryName(weatherData.country);
    document.getElementById('last-updated').textContent = `Updated ${new Date().getMinutes()} minutes ago`;
    document.getElementById('weather-message').textContent = `Enjoy the ${weatherData.description.toLowerCase()} weather in ${weatherData.city}! The temperature is a comfortable ${weatherData.temperature} degrees Fahrenheit, perfect for outdoor activities.`;
};


// Event listener for input
document.getElementById('city-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = e.target.value;
        getWeather(city);
    }
});

// Initial weather fetch for San Francisco
getWeather('San Francisco');
