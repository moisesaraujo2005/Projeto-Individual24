var database = require("../database/config")



function classico(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function classico():",nome);
    var instrucao2 = `
        INSERT INTO instrumento (nome) VALUE ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}
function aco(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function aço():",nome);
    var instrucao3 = `
        INSERT INTO instrumento (nome) VALUE ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao3);
    return database.executar(instrucao3);
}



module.exports = {
classico,
aco
     
  
  };