var express = require("express");
var router = express.Router();
var musicoController = require("../controllers/musicoController");

router.get("/medidasMusico", function (req, res) {
    musicoController.medidasMusico(req, res);
});

router.get("/medidasMusicoNao", function (req, res) {
    musicoController.medidasMusicoNao(req, res);
});


module.exports = router;