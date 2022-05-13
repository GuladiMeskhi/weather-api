let n = new Date();
let year = n.getFullYear();
let month = n.getMonth();
let day = n.getDate();
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let weather = {
    apiKey: "a9fa4983f61fe815e73e8d6d7ece4b32",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid" + this.apiKey)
        .then((response)=> response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name,visibility } = data;
        const { country } = data.sys;
        const { feels_like,humidity,temp } = data.main;
        const { description } = data.weather[0];
        const { speed } = data.wind;
        console.log(name,temperature,weather_descriptions);
        document.querySelector(".city-name").innerText = name + ", " + country;
        document.querySelector(".date-time").innerText = day + "/" + month +"/" + year;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".eye").innerText = "Visibility: " + visibility + "km" ;
        document.querySelector(".feels-like").innerText = "Feels like: " + feels_like + "°C";
        document.querySelector(".wind").innerText = "Wind: " + speed + "km/h";
        document.querySelector(".big-celsius").innerText = temp;
        document.querySelector(".weather__description").innerText = description;
        updateImg(weather_descriptions,is_day,country);
        console.log(is_day)
    },
    search: function (){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
}

document.querySelector(".search-btn").addEventListener("click", function(){
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})

const weatherIcon = document.querySelector(".icon");

function updateImg(description,isDay,x,y){
    if(description == "Clear" && isDay == "no"){
        weatherIcon.src = "./Image/night-clear.svg"
    }else if(description == "Clear" && isDay == "yes"){
        weatherIcon.src = "./Image/clear.svg"
    }else if(description == "Sunny" && isDay == "yes"){
        weatherIcon.src = "./Image/sunny.svg"
    }else if(description == "Partly cloudy" && isDay == "yes"){
        weatherIcon.src = "./Image/partly-cloudy.svg"
    }else if(description == "Partly cloudy" && isDay == "no"){
        weatherIcon.src = "./Image/partly-cloudy-night.svg"
    }else if(description == "Rain Shower, Mist" && isDay == "yes"){
        weatherIcon.src = "./image/light-rain.svg"
    }else if(description == "Rain Shower, Mist" && isDay == "no"){
        weatherIcon.src = "./Image/light-rain-night.svg"
    }else if(description == "Light Rain Shower" && isDay == "yes"){
        weatherIcon.src = "./image/light-rain.svg"
    }else if(description == "Light Rain Shower" && isDay == "no"){
        weatherIcon.src = "./Image/light-rain-night.svg"
    }else if(description == "Light Snow Grains" && isDay == "yes"){
        weatherIcon.src = "./Image/light-snow-grain.svg"
    }else if(description == "Light Snow Grains" && isDay == "no"){
        weatherIcon.src = "./Image/light-snow-grain-night.svg"
    }else if(description == "Mist" && isDay == "yes"){
        weatherIcon.src = "./Image/mist-day.svg"
    }else if(description == "Mist" && isDay == "no"){
        weatherIcon.src = "./Image/mist-night.svg"
    }else if(description == "Fog" && isDay == "no"){
        weatherIcon.src = "./Image/mist-night.svg"
    }else if(description == "Fog" && isDay == "yes"){
        weatherIcon.src = "./Image/mist-day.svg"
    }else if(description == "Light Rain" && isDay == "no"){
        weatherIcon.src = "./Image/light-rain-night.svg"
    }else if(description == "Light Rain" && isDay == "yes"){
        weatherIcon.src = "./Image/light-rain.svg"
    }
}
