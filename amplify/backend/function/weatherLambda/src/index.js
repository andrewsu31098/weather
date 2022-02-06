const axios = require("axios");

exports.handler = async (event) => {
  // TODO implement
  const currentWeatherCall = await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${event.queryStringParameters.city}&appid=676728a638b5368dca365235de652f0c`
  );
  const cityLat = currentWeatherCall.data.coord.lat;
  const cityLon = currentWeatherCall.data.coord.lon;

  const oneWeatherCall = await axios(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=minutely,hourly,alerts&appid=676728a638b5368dca365235de652f0c&units=imperial`
  );

  let finishedCallJSON = oneWeatherCall.data;
  finishedCallJSON["name"] = currentWeatherCall.data.name;
  finishedCallJSON["country"] = currentWeatherCall.data.sys.country;

  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },

    body: JSON.stringify(finishedCallJSON),
  };
  return response;
};
