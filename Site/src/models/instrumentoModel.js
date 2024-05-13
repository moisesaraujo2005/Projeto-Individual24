var database = require("../database/config");



function classico(idUsuario, idInstrumento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function classico():", idUsuario, idInstrumento);
    var instrucao2 = `
        INSERT INTO instrumento_usuario (fkInstrumento, fkUsuario) VALUE (${idInstrumento}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}
function aco(idUsuario,idInstrumento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function aço():", idUsuario,idInstrumento);
    var instrucao3 = `
        INSERT INTO instrumento_usuario (fkInstrumento,fkUsuario) VALUE (${idInstrumento}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao3);
    return database.executar(instrucao3);
}

function seteCordas(idUsuario,idInstrumento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function seteCordas():", idUsuario,idInstrumento);
    var instrucao4 = `
        INSERT INTO instrumento_usuario (fkInstrumento, fkUsuario) VALUE (${idInstrumento}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao4);
    return database.executar(instrucao4);
}

function guita(idUsuario, idInstrumento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function guita():", idUsuario,idInstrumento);
    var instrucao5 = `
        INSERT INTO instrumento_usuario (fkInstrumento,fkUsuario) VALUE (${idInstrumento}, ${idUsuario});
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