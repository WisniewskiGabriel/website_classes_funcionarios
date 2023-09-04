export function createNewCard(objFuncionario){

    let info_0_tipo = objFuncionario._tipo;
        let info_1_idade = objFuncionario._idade;
            let info_2_statusAcao = objFuncionario._statusAcao;
                let info_3_trabalhando = objFuncionario._trabalhando;
            let info_4_nome = objFuncionario._nome;
        let info_5_cargo = objFuncionario._cargo;
    let info_6_acao = objFuncionario._acao;

    let card_template =
        
        "<div class='gerente-card'><nav><h3>"                                               +info_0_tipo+
        "</h3><p>|</p><h4>"                                                                 +info_1_idade+
        "</h4><p>|</p><button>"                                                             +info_2_statusAcao+
        "</button><p>|</p><button>"                                                         +info_3_trabalhando+
        "</button></nav><span><img src='imgs/boss.png' alt=''><div><span><h3>Nome:</h3><p>" +info_4_nome+
        "</p></span><span><h3>Cargo:</h3><p>"                                               +info_5_cargo+
        "</p></span><span><h3>Departamento:</h3><p>"                                        +info_6_acao+
        "</p></span></div></span></div>";

    return card_template;
}