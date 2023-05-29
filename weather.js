let weather = {
    apiKey : "34d6d8dc8a584ef6b4d92016232105",
    fetchWeather: function (city) {
        fetch("https://api.weatherapi.com/v1/current.json?q="+city+"&key=" + this.apiKey)
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
        console.log(name, icon, text, temp_c, humidity);
        document.querySelector(".city").textContent = "Weather in " + name;
        document.querySelector(".weatherImg").src = icon;
        document.querySelector(".celcius").innerHTML = temp_c + "°C";
        document.querySelector(".humidity").innerHTML = humidity + "%";
        document.querySelector(".wind").innerHTML = wind_kph + "km/h";
        userInput.value = '';
    }
}

const searchBtn = document.querySelector("#searchBtn");
const userInput = document.querySelector("#userInput");

searchBtn.addEventListener('click', weather.fetchWeather(userInput.value));
userInput.addEventListener('keyup' , ((e) =>{
    if(e.key ==='Enter'){
        weather.fetchWeather(userInput.value)
    }
}));
