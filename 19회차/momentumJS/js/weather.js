const weather = document.querySelector('.weather .temperature');
const city = document.querySelector('.weather .location');
const API_KEY = 'dabeec5de20d5b7bd7753d1b05573c0d';

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailure);

function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(typeof data.main.temp);
      weather.innerText = `${data.main.temp.toFixed(1)}°C`;
      city.innerText = `${data.name}`;
    });
}

function onGeoFailure() {
  alert('날씨를 불러올 수 없습니다. 다시 시도해주세요.');
}
