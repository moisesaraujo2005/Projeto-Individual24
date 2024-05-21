var database = require("../database/config");



function medidasMusico() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function classico():",);
    var instrucao2 = `
    select count(musico) as qtdMusico from usuario where musico='sim';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}


function medidasMusicoNao() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function classico():",);
    var instrucao2 = `
    select count(musico) as qtdMusicoNao from usuario where musico='nao';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}





module.exports = {
    medidasMusico,
    medidasMusicoNao
};