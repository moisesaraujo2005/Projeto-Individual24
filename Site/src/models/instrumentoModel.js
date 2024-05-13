var database = require("../database/config");



function classico(idUsuario, idInstrumento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function classico():", idUsuario, idInstrumento);
    var instrucao2 = `
        INSERT INTO instrumento_usuario (fkInstrumento, fkUsuario) VALUE (${idInstrumento}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}
function aco(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function aço():", nome);
    var instrucao3 = `
        INSERT INTO instrumento (nome) VALUE ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao3);
    return database.executar(instrucao3);
}

function seteCordas(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function seteCordas():", nome);
    var instrucao4 = `
        INSERT INTO instrumento (nome) VALUE ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao4);
    return database.executar(instrucao4);
}

function guita(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function guita():", nome);
    var instrucao5 = `
        INSERT INTO instrumento (nome) VALUE ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao5);
    return database.executar(instrucao5);
}


module.exports = {
    classico,
    aco,
    seteCordas,
    guita


};