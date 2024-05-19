
var database = require("../database/config");
function buscarUltimasMedidas(fkInstrumento) {

    var instrucaoSql = `select count(${fkInstrumento}) from instrumento_usuario ;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
   
}