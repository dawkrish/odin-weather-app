const inputTag = document.getElementById('cityName')
const sumbitBtn = document.getElementById('sumbit')
const weatherTag = document.getElementById('weather')
const cityTag = document.getElementById('city')
const dateTag = document.getElementById('date-day')
const tempTag = document.getElementById('temperature')

const feelsTag = document.getElementById('feels-like')
const humidityTag = document.getElementById('humidity')
const pressureTag = document.getElementById('pressure')
const windSpeedTag = document.getElementById('wind-speed')

const weekday_arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const date = new Date();
console.log(date);
let hours = date.getHours()
let mins = date.getMinutes()
let weekday = weekday_arr[date.getDay()];
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()


if(mins < 10) mins = "0" + mins 

let input = inputTag.value
const API_KEY = '81cf9d847238e86dbdb1391958a7d4de'
let city = 'Agra'

async function getData(){
  let fetch_url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  const response = await fetch(fetch_url1,{mode:'cors'})
  const cityData = await response.json()

  try{
    console.log(cityData);
    let str = cityData.weather[0].description
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    const str2 = arr.join(" ");

    let lat = cityData.coord.lat
    let lon = cityData.coord.lon

    weatherTag.innerHTML = `${str2}`
    cityTag.innerHTML = `${cityData.name}`
    dateTag.innerHTML = `${weekday}, ${day}/${month}/${year}<br>${hours}:${mins}`
    tempTag.innerHTML = `${Math.round(cityData.main.temp)} °C`

    feelsTag.innerHTML = `${Math.round(cityData.main.feels_like)} °C`
    humidityTag.innerHTML = `${cityData.main.humidity} %`
    pressureTag.innerHTML = `${cityData.main.pressure} Pa`
    let speed = cityData.wind.speed * 3.6
    windSpeedTag.innerHTML = `${Math.round(speed * 100) / 100} km/h`
  }
  catch(err){

  }
}

getData()

sumbitBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  if(inputTag.value == ""){
    alert("Enter A city")
  }
  else{
    city = inputTag.value
    getData()
  }
})

window.addEventListener("keydown",(e)=>{
  if(e.key == "Enter"){
    sumbitBtn.click()
  }
})