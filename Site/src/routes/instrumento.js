var express = require("express");
var router = express.Router();

var instrumentoController = require("../controllers/instrumentoController");


router.post("/votacao", function (req, res) {
    instrumentoController.votacao(req, res);
})

module.exports = router;