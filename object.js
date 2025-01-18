// class name {
//     constructor(parameters) {
        
//     }
// }

// Function to fetch weather data from the OpenWeatherMap API
async function fetchWeatherData(cityName, apiKey) {
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    const url = `${baseUrl}?q=${cityName}&appid=${apiKey}&units=metric`; // Use 'imperial' for Fahrenheit

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

// Function to display weather data
function displayWeatherData(weatherData) {
    if (!weatherData) {
        console.log("No weather data available.");
        return;
    }

    const city = weatherData.name;
    const temp = weatherData.main.temp;
    const feelsLike = weatherData.main.feels_like;
    const description = weatherData.weather[0].description;

    console.log(`Weather in ${city}:`);
    console.log(`Temperature: ${temp}°C`);
    console.log(`Feels Like: ${feelsLike}°C`);
    console.log(`Condition: ${description.charAt(0).toUpperCase() + description.slice(1)}`);
}

// Main function to get user input and display weather data
(async function main() {
    const cityName = prompt("Enter the city name:");
    const apiKey = "3fef7f09e3d16a2d67ba169848bd7e6f"; // Replace with your actual OpenWeatherMap API key

    const weatherData = await fetchWeatherData(cityName, apiKey);
    displayWeatherData(weatherData);
})();