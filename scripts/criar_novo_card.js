export function createNewCard(objFuncionario){

    let info_0_tipoFunc = objFuncionario.tipo;
    let info_1_idade = objFuncionario.idade;
    let info_2_statusTrabalhando = objFuncionario.statusFunc;
    let info_3_statusAcao = objFuncionario.acao;
    let info_4_nomeFunc = objFuncionario.nome;
    let info_5_cargo = objFuncionario.cargo;
    let info_6_atribuicao = objFuncionario.atribuicao;

    let card_template =
        
        "<div class='gerente-card'><nav><h3>"                                               +info_0_tipoFunc+
        "</h3><p>|</p><h4>"                                                                 +info_1_idade+
        "</h4><p>|</p><button>"                                                             +info_2_statusTrabalhando+
        "</button><p>|</p><button>"                                                         +info_3_statusAcao+
        "</button></nav><span><img src='imgs/boss.png' alt=''><div><span><h3>Nome:</h3><p>" +info_4_nomeFunc+
        "</p></span><span><h3>Cargo:</h3><p>"                                               +info_5_cargo+
        "</p></span><span><h3>Departamento:</h3><p>"                                        +info_6_atribuicao+
        "</p></span></div></span></div>";

    return card_template;
}