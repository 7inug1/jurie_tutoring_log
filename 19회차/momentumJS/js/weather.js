const temperature = document.querySelector('.temperature .temperature');
const currentLocation = document.querySelector('.temperature .location');
const API_KEY = 'dabeec5de20d5b7bd7753d1b05573c0d';

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailure);

function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.opentemperaturemap.org/data/2.5/temperature?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(typeof data.main.temp);
      currentLocation.innerText = `📍 ${data.name}`;
      temperature.innerText = `🌡️ ${data.main.temp.toFixed(1)}°C`;
    });
}

function onGeoFailure() {
  alert(`Can't retrieve location & temperature. Please retry.`);
  // temperature.innerText =
  //   'Failed to retrieve location & temperature. Please refresh or change your browser setting.';
}
