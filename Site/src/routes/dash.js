var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/buscarUltimasMedidas/:fkInstrumento", function (req, res) {
    dashController.buscarUltimasMedidas(req, res);
});