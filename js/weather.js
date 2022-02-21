const API_KEY = "90eeb622b21e2889c468d866cbc1ce8e";

function onGeoOk(position) {
  // 위도 경도 구하기
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather .weather");
      const city = document.querySelector("#weather .city");
      const weatherICon = document.querySelector("#weather img");
      weatherICon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      city.innerText = data.name;
      console.log(data.weather[0].icon);
      weather.innerText = `${data.main.temp} ˚`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
