document.addEventListener('DOMContentLoaded', () => {
    const locationInput = document.getElementById('location-input');
    const searchButton = document.getElementById('search-button');
    const locationName = document.querySelector('#location-name span');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');
    const dateToday = document.getElementById('date-today');
    const weatherIcon = document.getElementById('weather-icon');
    const weatherCard = document.querySelector('.weather-card');

    // Set today's date
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateToday.textContent = today.toLocaleDateString('en-US', options);

    searchButton.addEventListener('click', fetchWeatherData);
    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            fetchWeatherData();
        }
    });

    async function fetchWeatherData() {
        const location = locationInput.value;
        if (!location) {
            alert('Please enter a location.');
            return;
        }

        try {
            const response = await fetch(`/weather?location=${location}`);
            const data = await response.json();

            if (data.error) {
                alert(data.error);
                return;
            }

            // Update the UI with weather data
            locationName.textContent = data.name;
            temperature.textContent = `${Math.round(data.main.temp)}°C`;
            description.textContent = data.weather[0].description;
            humidity.textContent = `${data.main.humidity}%`;
            windSpeed.textContent = `${data.wind.speed} m/s`;

            // Update weather icon based on weather condition
            updateWeatherIcon(data.weather[0].main);
            
            // Update background based on weather condition
            updateBackground(data.weather[0].main);

        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Could not fetch weather data. Please try again.');
        }
    }

    function updateWeatherIcon(weatherMain) {
        // Clear any existing icon classes
        weatherIcon.className = 'fas';
        
        // Determine icon based on weather condition
        switch(weatherMain.toLowerCase()) {
            case 'clear':
                weatherIcon.classList.add('fa-sun');
                break;
            case 'clouds':
                weatherIcon.classList.add('fa-cloud');
                break;
            case 'rain':
            case 'drizzle':
                weatherIcon.classList.add('fa-cloud-rain');
                break;
            case 'snow':
                weatherIcon.classList.add('fa-snowflake');
                break;
            case 'thunderstorm':
                weatherIcon.classList.add('fa-bolt');
                break;
            case 'mist':
            case 'fog':
            case 'haze':
                weatherIcon.classList.add('fa-smog');
                break;
            default:
                weatherIcon.classList.add('fa-cloud-sun');
        }
    }

    function updateBackground(weatherMain) {
        // Remove any existing weather condition classes
        weatherCard.classList.remove('clear', 'clouds', 'rain', 'snow', 'thunderstorm');
        
        // Add class based on weather condition
        weatherCard.classList.add(weatherMain.toLowerCase());
    }
});
