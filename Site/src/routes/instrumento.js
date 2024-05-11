var express = require("express");
var router = express.Router();

var instrumentoController = require("../controllers/instrumentoController");


router.post("/classico", function (req, res) {
    instrumentoController.classico(req, res);
})
router.post("/aco", function (req, res) {
    instrumentoController.aco(req, res);
})
router.post("/seteCordas", function (req, res) {
    instrumentoController.seteCordas(req, res);
})
router.post("/guita", function (req, res) {
    instrumentoController.guita(req, res);
})
module.exports = router;