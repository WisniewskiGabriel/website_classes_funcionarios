export function createNewCard(objFuncionario){
    
    let info_0_tipo = objFuncionario._tipo;
        let info_1_idade = objFuncionario._idade;
            let info_2_statusAcao = objFuncionario._statusAcao;
                let info_3_trabalhando = objFuncionario._trabalhando;
            let info_4_nome = objFuncionario._nome;
        let info_5_cargo = objFuncionario._cargo;
    let info_6_acao = objFuncionario._acao;

    let str_acao_label = ""
    let str_icon = "";
    let timestamp = Date.now();
    
    if(info_0_tipo === "Gerente"){
        str_icon = "boss";
        str_acao_label = "Departamento"
    } else {
        str_icon = "dev";
        str_acao_label = "Linguagem"
    }
    if(info_2_statusAcao === true){
        info_3_trabalhando = "Trabalhando";
    }
    if(Number(info_1_idade) === 1){
        info_1_idade = info_1_idade +" ano";
    } else {
        info_1_idade = info_1_idade +" anos";
    }
    let card_template =
        
        `<div class='gerente-card' id='${timestamp}'><nav><h3>                                                  ${info_0_tipo}
        </h3><p>|</p><h4>                                                                                       ${info_1_idade}
        </h4><p>|</p><button class='demitir-btn' value='${timestamp}'>                                          ${info_3_trabalhando}
        </button></nav><span><img src='imgs/${str_icon}.png' alt=''><div><span><h3>Nome:</h3><p>                ${info_4_nome}
        </p></span><span><h3>Cargo:</h3><p>                                                                     ${info_5_cargo}
        </p></span><span><h3>${str_acao_label}:</h3><p>                                                         ${info_6_acao}
        </p></span></div></span></div>`;
    return card_template;
}