var instrumentoModel = require("../models/instrumentoModel");



function votacao(req, res) {
    var instrumento = req.body.classicoServer;
    var idUsuario = req.body.idUsuario;
    var idInstrumento = req.body.idInstrumento;
    

    instrumentoModel.votacao(idUsuario, idInstrumento)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}





module.exports = {
    votacao
    
}
