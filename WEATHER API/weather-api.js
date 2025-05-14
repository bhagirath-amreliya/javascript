// WEATHER API PROJECT ===> 

// API KEY : 433cfc6b2b08849fd3246303864ca448


let container = document.querySelector('.container');
let search = document.querySelector('.search-box button');
let weatherBox = document.querySelector('.weather-box');
let weatherDetails = document.querySelector('.weather-details');
let error404 = document.querySelector('.not-found');
let cityHide = document.querySelector('.city-hide');

search.addEventListener('click', () => {
    let APIKey = '433cfc6b2b08849fd3246303864ca448';
    let city = document.querySelector('.search-box input').value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                cityHide.textContent = city;
                container.style.height = '400px';
                weatherBox.classList.remove('active');
                weatherDetails.classList.remove('active');
                error404.classList.add('active');
                return;
            }

            let image = document.querySelector('.weather-box img');
            let temperature = document.querySelector('.weather-box .temperature');
            let description = document.querySelector('.weather-box .description');
            let humidity = document.querySelector('.weather-details .humidity span');
            let wind = document.querySelector('.weather-details .wind span');

            if (cityHide.textContent === city) return;
            cityHide.textContent = city;

            container.style.height = '555px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'img/clear.jpg';
                    break;
                case 'Rain':
                    image.src = 'img/rain.jpg';
                    break;
                case 'Clouds':
                    image.src = 'img/cloud.jpg';
                    break;
                case 'Mist':
                case 'Haze':
                    image.src = 'img/mist.jpg';
                    break;
                default:
                    image.src = 'img/cloud.jpg';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.textContent = json.weather[0].description;
            humidity.textContent = `${json.main.humidity}%`;
            wind.textContent = `${parseInt(json.wind.speed)}Km/h`;
        });
});

let feelsLike = document.querySelector('.feels-like');
let visibility = document.querySelector('.visibility');
let pressure = document.querySelector('.pressure');
let sunrise = document.querySelector('.sunrise');
let sunset = document.querySelector('.sunset');
let weatherIcon = document.querySelector('.weather-icon img');

// Update values
feelsLike.textContent = `${parseInt(json.main.feels_like)}°C`;
visibility.textContent = `${json.visibility / 1000} km`;
pressure.textContent = `${json.main.pressure} hPa`;

let sunriseTime = new Date(json.sys.sunrise * 1000);
let sunsetTime = new Date(json.sys.sunset * 1000);

sunrise.textContent = sunriseTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
sunset.textContent = sunsetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// Change icon based on weather and time
let isDay = json.dt > json.sys.sunrise && json.dt < json.sys.sunset;
let condition = json.weather[0].main;

if (condition === 'Clear') {
  weatherIcon.src = isDay ? 'img/sun.jpg' : 'img/snow.jpg';
} else if (condition === 'Clouds') {
  weatherIcon.src = 'img/cloud.png';
} else if (condition === 'Rain') {
  weatherIcon.src = 'img/rain.png';
} else if (condition === 'Snow') {
  weatherIcon.src = 'img/snow.png';
} else {
  weatherIcon.src = 'img/mist.png';
}


