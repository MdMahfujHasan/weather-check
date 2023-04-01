const API_KEY = `5a5f64fb5d5abd64906d4350475930d6`;

document.getElementById('btn-search').addEventListener('click', function () {
    const inputCityName = document.getElementById('input-city-name');
    const cityNameValue = inputCityName.value;
    document.getElementById('city-name').innerText = cityNameValue.toUpperCase();
    loadWeatherData(cityNameValue);
    inputCityName.value = '';
})
const loadWeatherData = cityName => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeatherData(data));
}

const displayWeatherData = data => {
    console.log(data);
    document.getElementById('degC').classList.remove('hidden');
    document.getElementById('up-arrow').classList.remove('hidden');
    document.getElementById('down-arrow').classList.remove('hidden');

    const temperature = document.getElementById('temperature');
    const condition = document.getElementById('condition');
    const tempMin = document.getElementById('temp-min');
    const tempMax = document.getElementById('temp-max');
    temperature.innerText = data.main.temp;
    condition.innerText = data.weather[0].main;
    tempMin.innerText = data.main.temp_min;
    tempMax.innerText = data.main.temp_max;
}