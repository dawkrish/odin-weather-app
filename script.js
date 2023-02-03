const output = document.getElementById('output')
const inputTag = document.getElementById('cityName')
const sumbitBtn = document.getElementById('sumbit')

let input = inputTag.value
const API_KEY = '81cf9d847238e86dbdb1391958a7d4de'
let city = 'Agra'

async function getData(){
  let fetch_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  const response = await fetch(fetch_url,{mode:'cors'})
  const cityData = await response.json()

  try{
    console.log(cityData);
    output.innerHTML = `${city} :  ${cityData.weather[0].main}`
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