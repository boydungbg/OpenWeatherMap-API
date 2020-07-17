var router = require("express").Router();
var cityController = require("../controllers/city");

router.get("/", cityController.getListCity);
router.get("/search/", cityController.getListCityByCityNameandCountry);

module.exports = router;
