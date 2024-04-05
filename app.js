const request = require("request");
const geocode = require("./geocode");
const forecast = require("./forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide address.");
} else {
  geocode(address, (error, { latitude, longitude }) => {
    if (error) {
      throw new Error(error);
    }
    forecast(latitude, longitude, (error, data) => {
      error ? console.log(error) : console.log(data);
    });
  });
}
