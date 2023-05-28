const container = document.querySelector(".container");
const apiKey = "34d6d8dc8a584ef6b4d92016232105"
const userInput = document.querySelector("#userInput");
const searchBtn = document.querySelector("#searchBtn");
const celcius = document.querySelector(".celcius");


//get user input
searchBtn.addEventListener('click', getWeather);
userInput.addEventListener('keyup' , ((e) =>{
    if(e.key ==='Enter'){
        getWeather();
    }
}))

function getWeather() {
    fetch(`https://api.weatherapi.com/v1/current.json?q=${userInput.value}&key=${apiKey}`).then(res => res.json()).then(data => {
        console.log(data);
        let location = data.location.name
        let celcisData = data.current.temp_c;
        celcius.textContent = `${celcisData} °C`;
        let img = document.createElement('img')
        img.src = data.current.condition.icon;
        container.appendChild(img);
    }).catch(err => console.log(err));
}