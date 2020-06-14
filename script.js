
const city = document.querySelector('#city')
const temp = document.querySelector('#temp')
const state = document.querySelector('#state')
const time = document.querySelector('#time')
const wind = document.querySelector('#wind')
const search = parseInt(document.querySelector("#search").value);
const searchBtn = document.querySelector('#searchBtn');

const result = document.querySelector('#result');
weatherDescriptions = document.querySelector('#weather-descriptions')


window.addEventListener('load', () => {
    fetch('http://api.weatherstack.com/current?access_key=b685f154b2304b51c0c3166772cd21fb&query=Lincoln,NE')
.then(res => {
    console.log (res)
    return res.json()
})
.then(data => {
    console.log (data)
    city.textContent = data.location.name;
    state.textContent = data.location.region;
    temp.textContent = (data.current.temperature * 9/5) +32 
    weatherDescriptions.textContent = data.current.weather_descriptions
    time.textContent = data.location.localtime
    //wind.textContent = data.current.wind_speed
    temp.addEventListener('click', () => {
        temp.textContent = data.current.temperature
    })

})


})

searchBtn.addEventListener('click', () => {
    result.innerHTML = search;
})
