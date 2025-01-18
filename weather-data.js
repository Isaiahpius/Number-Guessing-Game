let file = getWeatherData("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={3fef7f09e3d16a2d67ba169848bd7e6f}", {
    method: 'GET'
})
.then(weatherData => {
    if (!weatherData.ok) {
        throw `error: invalid`
    }
})

async function getWeatherData(file) {
    try {
        const weatherData = await fetch(file);
        const data = await weatherData.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}


// function displayWeatherData(weatherData) {
//     let location = weatherData.resolvedAddress
//     let days = weatherData.days
//     console.log("Location:" +location)
// }
// let weatherData = await fetch(file)
// let myWeatherData = await weatherData.json()
// console.log(myWeatherData)

// fetch(file)
// .then(x => x.text())
// .then(y => console.log(y))

// async function getWeatherData(file) {
//     let x = await fetch(file)
// }
// window
// .fetch(file)

// async function fetchWeatherData(cityName, apiKey) {
//     const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
//     const url = `${baseUrl}?q=${cityName}&appid=${apiKey}&units=metric`; // Use 'imperial' for Fahrenheit

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//         return null;
//     }
// }


// (async function main() {
//     const cityName = prompt("Enter the city name:");
//     const apiKey = "your_api_key_here"; // Replace with your actual OpenWeatherMap API key

//     const weatherData = await fetchWeatherData(cityName, apiKey);
//     displayWeatherData(weatherData);
// })();
