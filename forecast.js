const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=28080c2ee84a4c4681c64842240404&q=" +
    latitude +
    "," +
    longitude;
  // console.log(url);
  request({ url: url }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service !", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const data = JSON.parse(body);
      callback(
        undefined,
        data.current.condition.text +
          ". Current temp is " +
          data.current.temp_f +
          ", feels like " +
          data.current.feelslike_f +
          " in " +
          data.location.name
      );
    }
  });
};

module.exports = forecast;
