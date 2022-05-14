let n = new Date();
let year = n.getFullYear();
let month = n.getMonth();
let day = n.getDate();
let weather = {
    apiKey: "3861861316ef407f1ab0c6abab37a421",
    // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3861861316ef407f1ab0c6abab37a421
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + this.apiKey + "&units=metric")
        .then((response)=> response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name,visibility } = data;
        const { country } = data.sys;
        const { feels_like,humidity,temp } = data.main;
        const { description,icon } = data.weather[0];
        const { speed } = data.wind;
        document.querySelector(".city-name").innerText = name + ", " + country;
        document.querySelector(".date-time").innerText = day + "/" + month +"/" + year;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".eye").innerText = "Visibility: " + (visibility/1000).toFixed(1) + "km" ;
        document.querySelector(".feels-like").innerText = "Feels like: " + feels_like + "°C";
        document.querySelector(".wind").innerText = "Wind: " + speed + "km/h";
        document.querySelector(".big-celsius").innerText = temp;
        document.querySelector(".weather__description").innerText = description;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
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



// lack property in api
// function updateImg(description,isDay,x,y){
//     if(description == "Clear" && isDay == "no"){
//         weatherIcon.src = "./Image/night-clear.svg"
//     }else if(description == "Clear" && isDay == "yes"){
//         weatherIcon.src = "./Image/clear.svg"
//     }else if(description == "Sunny" && isDay == "yes"){
//         weatherIcon.src = "./Image/sunny.svg"
//     }else if(description == "Partly cloudy" && isDay == "yes"){
//         weatherIcon.src = "./Image/partly-cloudy.svg"
//     }else if(description == "Partly cloudy" && isDay == "no"){
//         weatherIcon.src = "./Image/partly-cloudy-night.svg"
//     }else if(description == "Rain Shower, Mist" && isDay == "yes"){
//         weatherIcon.src = "./image/light-rain.svg"
//     }else if(description == "Rain Shower, Mist" && isDay == "no"){
//         weatherIcon.src = "./Image/light-rain-night.svg"
//     }else if(description == "Light Rain Shower" && isDay == "yes"){
//         weatherIcon.src = "./image/light-rain.svg"
//     }else if(description == "Light Rain Shower" && isDay == "no"){
//         weatherIcon.src = "./Image/light-rain-night.svg"
//     }else if(description == "Light Snow Grains" && isDay == "yes"){
//         weatherIcon.src = "./Image/light-snow-grain.svg"
//     }else if(description == "Light Snow Grains" && isDay == "no"){
//         weatherIcon.src = "./Image/light-snow-grain-night.svg"
//     }else if(description == "Mist" && isDay == "yes"){
//         weatherIcon.src = "./Image/mist-day.svg"
//     }else if(description == "Mist" && isDay == "no"){
//         weatherIcon.src = "./Image/mist-night.svg"
//     }else if(description == "Fog" && isDay == "no"){
//         weatherIcon.src = "./Image/mist-night.svg"
//     }else if(description == "Fog" && isDay == "yes"){
//         weatherIcon.src = "./Image/mist-day.svg"
//     }else if(description == "Light Rain" && isDay == "no"){
//         weatherIcon.src = "./Image/light-rain-night.svg"
//     }else if(description == "Light Rain" && isDay == "yes"){
//         weatherIcon.src = "./Image/light-rain.svg"
//     }
// }
