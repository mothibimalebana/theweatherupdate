import '../css/style.css';

const weatherApp = (function () {
  //get city name from user and use it in the api
  const getCityData = async (cityName) => {
    const res = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Heidelber%20South%20Africa?unitGroup=metric&include=current&key=6W3RPBWACVQN6E7X2BYT43F9H&contentType=json'
    );
    const resWeather = res.json().then((res) => {
      const cityConditions = res.currentConditions.conditions;
      const cityFeelsLike = res.currentConditions.feelslike;
      const cityName = res.resolvedAddress;
      const weatherIcon = res.currentConditions.icon;
      const citySunrise = res.currentConditions.sunrise;
      const citySunset = res.currentConditions.sunset;

      console.log(res);
    });
  };

  //declare functions down here:
  getCityData().then((res) => {});
})();
