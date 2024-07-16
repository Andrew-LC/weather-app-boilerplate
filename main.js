import './index.css'

// Weather API configuration
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Curried function to create API URL
const createApiUrl = (city) => (units) => `${BASE_URL}?q=${city}&units=${units}&appid=${API_KEY}`;

// Fetch weather data using async/await
const fetchWeatherData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

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

// Get full country name
const getCountryName = (countryCode) => {
    const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    return regionNames.of(countryCode);
};

// Main function to get and display weather
const getWeather = async (city, units = 'imperial') => {
    try {
        const url = createApiUrl(city)(units);
        const data = await fetchWeatherData(url);
        const processedData = processWeatherData(data);
        updateUI(processedData);
    } catch (error) {
        console.error('Failed to get weather:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
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
