var musicoModel = require("../models/musicoModel");

function medidasMusico(req, res) {
    console.log('cheguei no controle')

    musicoModel.medidasMusico().then(function (resultado) {
        if (resultado.length > 0) {
            console.log(resultado)
            res.status(200).json(resultado);

        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function medidasMusicoNao(req, res) {
    console.log('cheguei no controle')

    musicoModel.medidasMusicoNao().then(function (resultado) {
        if (resultado.length > 0) {
            console.log(resultado)
            res.status(200).json(resultado);

        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    medidasMusico,
    medidasMusicoNao
    

}