var cityService = require("../services/city");

module.exports = {
  getListCity: (req, res) => {
    var listCities = cityService.getListCity();
    res.status(200).json(listCities);
  },

  getListCityByCityNameandCountry: (req, res) => {
    if (req.query.q) {
      var listCities = cityService.getListCityByCityNameandCountry(req.query.q);
      res.status(200).json(
        {status: 200,
        cities: listCities}
      );
    } else {
      res.status(404).json({
        status: 404,
        message: "Not found",
      });
    }
  },
};
