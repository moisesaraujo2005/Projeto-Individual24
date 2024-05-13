var instrumentoModel = require("../models/instrumentoModel");



function classico(req, res) {
    var instrumento = req.body.classicoServer;
    var idUsuario = req.body.idUsuario;
    var idInstrumento = req.body.idInstrumento;

    instrumentoModel.classico(idUsuario, idInstrumento)
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

function aco(req, res) {
    var instrumento = req.body.acoServer;

    instrumentoModel.aco(instrumento)
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

function seteCordas(req, res) {
    var instrumento = req.body.seteCordasServer;

    instrumentoModel.seteCordas(instrumento)
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

function guita(req, res) {
    var instrumento = req.body.guitaServer;

    instrumentoModel.guita(instrumento)
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
    classico,
    aco,
    seteCordas,
    guita
}
