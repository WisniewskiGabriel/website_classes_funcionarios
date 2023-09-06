export function criar_modal(str_tipo_funcionario){
    
    let str_id_random = "";
    let str_atributo_especifico = "";

    if(str_tipo_funcionario === "Gerente"){
        str_id_random = "gerar-gte-aleatorio";
        let str_atributo_especifico = "Departamento";
    } else if (str_tipo_funcionario === "Desenvolvedor"){
        str_id_random = "gerar-dev-aleatorio";
        let str_atributo_especifico = "Linguagem";
    } else {
        throw new Error("FALHA AO CRIAR MODAL DE DEV. OU GERENTE");
    }
    
    let str_modal = 
    "<dialog id='modal'>"+
        "<h2>Gerar "+str_tipo_funcionario+"</h2>"+
        "<button id='"+str_id_random+"'>Gerar aleatoriamente!</button>"+
        "<h3>Ou inserir dados manualmente</h3>"+
        "<form action=''>"+
            "<label for=''>Nome:<input type='text' name='' id=''></label>"+
            "<label for=''>Idade:<input type='text' name='' id=''></label>"+
            "<label for=''>Cargo:<input type='text' name='' id=''></label>"+
            "<label for=''>"+str_atributo_especifico+":<input type='text' name='' id=''></label>"+
        "</form>"+
        "<footer>"+
            "<button id='btn-cancelar-acao'>Cancelar</button>"+
            "<button id='btn-continuar-acao'>Cadastrar</button>"+
        "</footer>"+
    "</dialog>";

    return str_modal;

}

