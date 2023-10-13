const apiKey = dad6bd329be2f2d3e690a397282f1551;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Adirondacks&appid=' + apiKey;

// Function to fetch weather data
async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract relevant weather data
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Display weather information
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `Current Temperature: ${temperature}°C<br>Conditions: ${description}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to fetch and display weather data
getWeatherData();
