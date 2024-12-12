import '../css/style.css';

const weatherApp = (function () {
  //get city name from user and use it in the api
  const getResponse = async () => {
    const res = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Heidelber%20South%20Africa?unitGroup=metric&include=current&key=6W3RPBWACVQN6E7X2BYT43F9H&contentType=json',
      { mode: 'cors' }
    );
    return res.json();
  };
  const getCityData = getResponse().then((response) => {
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

    console.log(cityData);
  });

  //declare functions down here:
  console.log(getResponse());
})();
