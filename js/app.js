const API_KEY = `b618f9b4011e084d791944138a611b93`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp + '°C');
    setInnerText('weather', temperature.weather[0].description);

    // Display additional weather information
    setInnerText('humidity', 'Humidity: ' + temperature.main.humidity + '%');
    setInnerText('wind', 'Wind Speed: ' + temperature.wind.speed + ' m/s');

    // weather icon settings
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}
