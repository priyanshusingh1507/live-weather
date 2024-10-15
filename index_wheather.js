const apiKey="8b9ee80fb8e6ee92390245ee9ea86217";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
let weatherIcon=document.querySelector(".weather-icon")

async function checkweather(city)
{
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";

    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="photos/clouds.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src="photos/rain.png";
    }
    else if(data.weather[0].main=="Snow")
    {
        weatherIcon.src="photos/snow.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src="photos/clear.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src="photos/drizzle.png";
    }
    else if(data.weather[0].main=="Wind")
    {
        weatherIcon.src="photos/wind.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        weatherIcon.src="photos/mist.png";
    }
    else if(data.weather[0].main=="Humidity")
    {
        weatherIcon.src="photos/humidity.png";
    }
    document.querySelector(".weather").style.display="block";
    }

searchBtn.addEventListener("click", ()=>{

    checkweather(searchBox.value);
})


