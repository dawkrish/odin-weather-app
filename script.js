const inputTag = document.getElementById('cityName')
const sumbitBtn = document.getElementById('sumbit')
const weatherTag = document.getElementById('weather')
const cityTag = document.getElementById('city')
const dateTag = document.getElementById('date-day')
const tempTag = document.getElementById('temperature')

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
  let fetch_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  const response = await fetch(fetch_url,{mode:'cors'})
  const cityData = await response.json()

  try{
    console.log(cityData);

    weatherTag.innerHTML = `${cityData.weather[0].main}`
    cityTag.innerHTML = `${city}`
    dateTag.innerHTML = `${weekday}, ${day}/${month}/${year}<br>${hours}:${mins}`
    tempTag.innerHTML = `${Math.round(cityData.main.temp)} °C`

  }
  catch(err){
    output.innerHTML = cityData.message
  }
}

getData()

sumbitBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  city = inputTag.value
  getData()
})