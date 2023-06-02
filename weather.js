const apiKey = "34d6d8dc8a584ef6b4d92016232105"
const searchBtn = document.querySelector("#searchBtn");
const userInput = document.querySelector("#userInput");

window.onload = loadWeather;

let weather = {
    fetchWeather: function (city) {
        fetch("https://api.weatherapi.com/v1/current.json?q="+city+"&key="+apiKey)
        .then((res) => res.json())
        .then((data) =>{
            this.displayWeather(data);
        })
        .catch((error) => console.log("There was error fetching: " + error))
    },
    displayWeather: function(data) {
        const { name } = data.location;
        const {text, icon} = data.current.condition;
        const {temp_c, humidity, wind_kph} = data.current;
        console.log(data);
        console.log(name, icon, text, temp_c, humidity);
        document.querySelector(".city").textContent = "Weather in " + name;
        document.querySelector(".weatherImg").src = icon;
        document.querySelector(".celcius").innerHTML = temp_c + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: "+ humidity + "%";
        document.querySelector(".wind").innerHTML ="Wind Speed: "+ wind_kph + " km/h";
        document.querySelector(".description").innerHTML = text;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')";
        userInput.value = '';
    }
}

//onclick
searchBtn.addEventListener('click', weather.fetchWeather(userInput.value));
userInput.addEventListener('keyup' , ((e) =>{
    if(e.key ==='Enter'){
        weather.fetchWeather(userInput.value)
    }
}));




function loadWeather(){
    fetch("https://api.weatherapi.com/v1/current.json?q=Adelaide&key=" +apiKey)
    .then(res => res.json())
    .then(data => {
        weather.displayWeather(data);
    })
}