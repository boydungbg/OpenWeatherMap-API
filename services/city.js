var fs = require("fs");
const path = require("path");
var a = path.join(__dirname, "../public/city.list.min.json");

module.exports = {
  getListCity: () => {
    const cities = JSON.parse(fs.readFileSync(a));
    return cities;
  },
  getListCityByCityNameandCountry: (cityname) => {
    const cities = JSON.parse(fs.readFileSync(a));
    let stringReg = `^${cityname.toLowerCase()}`;
    const regex = new RegExp(stringReg);
    let listCities = cities.filter(({ name, country }) => {
      return (name + "," + country).toLowerCase().match(regex);
    });
    return listCities;
  },
};
