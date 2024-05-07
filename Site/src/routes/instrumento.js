var express = require("express");
var router = express.Router();

var instrumentoController = require("../controllers/instrumentoController");


router.post("/classico", function (req, res) {
    instrumentoController.classico(req, res);
})
router.post("/aco", function (req, res) {
    instrumentoController.aco(req, res);
})

module.exports = router;