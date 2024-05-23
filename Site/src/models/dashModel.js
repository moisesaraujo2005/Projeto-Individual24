
var database = require("../database/config");
function buscarUltimasMedidas() {

    var instrucaoSql = `select instrumento.nome,  
instrumento_usuario.fkInstrumento, 
count(instrumento_usuario.fkInstrumento) as qtdEscolhida
from instrumento_usuario 
join instrumento
on instrumento.idInstrumento = fkInstrumento
group by fkInstrumento;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function pegarVotos() {

    var instrucaoSql = `select count(fkInstrumento) as qtdVotos from instrumento_usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
    pegarVotos
};