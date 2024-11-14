// weatherUtils.js
// A module for weather-related utilities
// TODO: Ask Copilot to explain the code in this file

const axios = require('axios'); // HTTP client for making API requests
const moment = require('moment'); // Library for date formatting

// API Key and Base URL for a hypothetical weather service
const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.weatherapi.com/v1';

/**
 * Fetches current weather data for a given city
 * @param {string} city - The name of the city
 * @returns {Promise<Object>} - The current weather data
 */
async function getCurrentWeather(city) {
    try {
        const response = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: city,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

/**
 * Formats the weather data into a user-friendly string
 * @param {Object} weatherData - The weather data object
 * @returns {string} - Formatted weather data
 */
function formatWeatherData(weatherData) {
    const { location, current } = weatherData;
    const date = moment(current.last_updated).format('dddd, MMMM Do YYYY, h:mm a');
    return `Weather for ${location.name}, ${location.country}:\n` +
           `Temperature: ${current.temp_c}°C (${current.temp_f}°F)\n` +
           `Condition: ${current.condition.text}\n` +
           `Last updated: ${date}`;
}

// Export functions to make them available to other modules
module.exports = {
    getCurrentWeather,
    formatWeatherData
};
