### JS_web

##### 생산성 웹페이지

---

#### 날짜, 시간 및 사용자 이름 저장

![ezgif com-gif-maker](https://user-images.githubusercontent.com/63100352/102588036-1fb3d380-4150-11eb-83c6-58caba29130a.gif)

#### 할 일 목록

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/63100352/103063759-a146ae00-45f5-11eb-8dc4-47fce3aa6d36.gif)

### 개발 사항

#### Making a JS Clock

```js
const getTime = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

//   시간, 분, 초가 한자리 수일 경우 시간 앞에 0을 붙임
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};
```

#### Getting the Weather API 

```js
const getWeather = (lat, lng) =>{
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    })
};
```
---

### Additional development items

* Media query
* 새로운 디자인 .. 