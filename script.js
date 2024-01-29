function updateWeather(response){
    
    let temperatureElement = document.querySelector("#temperature")
    let temperature = response.data.temperature.current;
    temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let timeElement = document.querySelector("#time");
    let iconElement = document.querySelector("#icon")

   
    
    let date = new Date (response.data.time *1000);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"class="weather-app-temperature-icon" />`
    timeElement.innerHTML = formatDate(new Date);
    temperatureElement.innerHTML = Math.round(temperature);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}% `;
    windElement.innerHTML = `${response.data.wind.speed}km/h `;
 
}
function formatDate(date){
    let minutes = date.getMinutes();
    let hours = date.getHours();
    

    let days = [
     "Sunday",
     "Monday", 
     "Tuesday", 
     "Wednesday",
     "Thursday",
     "Friday", 
     "Saturday"
    ];
    let day = days[date.getDay()];
    if (minutes <10){
        minutes = `0${minutes}`
    }
    if (hours <10){
        hours = `0${hours}`
    }

    return `${day} ${hours}:${minutes}`;
}

function searchCity(city){
let apiKey = `4ce023e4f48aaf8bd6a4cb7eo6dbd3ft`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeather);
}

function search(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

searchCity("Pretoria");



