import '../css/style.css';

const weatherApp = (function () {
  const container = document.querySelector('.container');
  const city = document.getElementById('city');
  const temp = document.getElementById('temp');
  const feelslike = document.getElementById('feelslike');
  const sunset = document.getElementById('sunset');
  const sunrise = document.getElementById('sunrise');

  // container.style.background = 'url(``)';

  const getCityResponse = async (city) => {
    if (city == undefined) {
      const res = await fetch(
        'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Heidelber%20South%20Africa?unitGroup=metric&include=current&key=6W3RPBWACVQN6E7X2BYT43F9H&contentType=json',
        { mode: 'cors' }
      );
      return res.json();
    } else {
      const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=current&key=6W3RPBWACVQN6E7X2BYT43F9H&contentType=json`,
        { mode: 'cors' }
      );
      return res.json();
    }
  };
  const getWeatherGIF = async (weatherIcon) => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=oqVqtKYI8bdtGH4vFdngKiJ7GGC0wX2I&s=${weatherIcon}&weirdness=4`,
      { mode: 'cors' }
    );
    return res.json();
  };
  const getCityData = (city) => {
    const getCityData = getCityResponse(city).then((response) => {
      const citySunrise = response.currentConditions.sunrise;
      const citySunset = response.currentConditions.sunset;
      const cityConditions = response.currentConditions.conditions;
      const cityFeelsLike = response.currentConditions.feelslike;
      const cityIcon = response.currentConditions.icon;
      const cityTemp = response.currentConditions.temp;
      const address = response.resolvedAddress;

      const cityData = {
        citySunrise,
        citySunset,
        cityConditions,
        cityFeelsLike,
        cityIcon,
        cityTemp,
        address,
      };
      return cityData;
    });
    return getCityData;
  };
  //declare functions down here:
  getCityData('Heidelberg Gauteng').then((res) => {
    getWeatherGIF('rain').then((res) => {
      console.log(res.data.images.original.url);
      container.style.background = `url(${res.data.images.original.url})`;
    });
  });
})();
