const axios = require("axios");

exports.handler = async (event) => {
  // TODO implement
  const weatherData = await axios(
    "https://api.openweathermap.org/data/2.5/onecall?lat=51.509865&lon=-0.118092&exclude=minutely,hourly,alerts,daily&appid=676728a638b5368dca365235de652f0c&units=imperial"
  );
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify(weatherData.data),
  };
  return response;
};
