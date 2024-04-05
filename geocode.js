const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://geocode.maps.co/search?q=" +
    address +
    "&api_key=660f3e316db8f453850699hns62c70e";
  request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    if (error) {
      callback("Unable to connect to geocode service !", undefined);
    } else if (data.length === 0) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        latitude: data[0].lat,
        longitude: data[0].lon,
        location: data[0].display_name,
      });
    }
  });
};

module.exports = geocode;
