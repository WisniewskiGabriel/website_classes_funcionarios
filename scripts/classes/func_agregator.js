import { getRandomAge,getRandomDepartment,getRandomJob,getRandomName,getRandomLanguage,isNullOrEmpty } from './randomAssets.js';
import { Gerente } from './classeGerente.js';
import { Desenvolvedor } from './classeDesenvolvedor.js';
lineAcross();
//console.log("\nIniciando classe: Gerente\n");                                           //chamar funções relacionadas ao gerente
let objGerente = instanciarGerente();                                                   //argumentos vazios para forçar geração de 
displayGerente(objGerente,true,true);
lineAcross();
//console.log("\n\nIniciando classe: Desenvolvedor\n");                                   //chamar funções relacionadas ao desenvolvedor
let objDesenvolvedor = instanciarDesenvolvedor();
displayDesenvolver(objDesenvolvedor,true,true);
lineAcross();
export function instanciarGerente(nome,idade,cargo,departamento){                             //função que inicia o objeto do gerente
    if(isNullOrEmpty(nome)){                                                 //checa se o arg. está vazio
        nome = getRandomName();                                              //chamada da função para gera nome aleatório
    }
    if(isNullOrEmpty(idade)){                                                //os demais ifs nessa função fazem a mesma coisa...
        idade = getRandomAge();                                              //... porém em atributos diferentes
    }
    if(isNullOrEmpty(cargo)){
        cargo = getRandomJob();
    }
    if(isNullOrEmpty(departamento)){
        departamento = getRandomDepartment();
    }
    let objGerente = new Gerente(nome,idade,cargo,departamento);                        //obj. finalmente instanciado
    return objGerente;
}
export function instanciarDesenvolvedor(nome,idade,cargo,linguagem){                           //mesma lógica do instanciarGerente
    if(isNullOrEmpty(nome)){
        nome = getRandomName();
    }
    if(isNullOrEmpty(idade)){
        idade = getRandomAge();
    }
    if(isNullOrEmpty(cargo)){
        cargo = getRandomJob();
    }
    if(isNullOrEmpty(linguagem)){
        linguagem = getRandomLanguage();
    }
    let objDesenvolvedor = new Desenvolvedor(nome,idade,cargo,linguagem);
    return objDesenvolvedor; 
}

function displayGerente(objGerente,bool_trabalhar,bool_gerenciar){                      //exibe dados do gerente
    if(bool_trabalhar){                                                                 //argumentos bools. definem se tais metodos serão invocados 
        objGerente.trabalhar();                                                     
    }
    if(bool_gerenciar){
        objGerente.gerenciar();
    }
    concatValores(objGerente);                                                          //exibe dados de dentro do objeto em str. contatenado...
    lineAcross();                                                                       //... e propriedades apitalizadas
    objGerente.seApresentar();                                                          //trabalhar ativo por default
}

function displayDesenvolver(objDesenvolvedor,bool_trabalhar,bool_programar){            //mesma lógica do displayGerente, porém chamando os...
    if(bool_trabalhar){                                                                 //... métodos exclusivos do Desenvolvedor
        objDesenvolvedor.trabalhar();
    }
    if(bool_programar){
        objDesenvolvedor.programar();
    }
    concatValores(objDesenvolvedor);
    lineAcross();
    objDesenvolvedor.seApresentar();
}

function concatValores(obj){    	                                                    //itera as propriedade de um obj. qualquer...
                                                                                        //... remove o caractere '_' do início...
    let str_saida = "";                                                                 //... e capitaliza a primeira letra
    let idx = 0;
    for (let prop in obj){
        let str_thisVal = obj[prop];                                                    //valor da propriedade atribuido a 'str_thisVal'
        let str_thisProp = prop.replace(/_/g,'');                                       //expressão regular para remover o '_' (underline)...
                                                                                        //... ex: "_nome" -> "Nome"
        str_thisProp = str_thisProp.charAt(0).toUpperCase()+                            //primeiro caractere para maiúsculo e concatena...
        str_thisProp.slice(1);                                                          //... o restante da string a partir da posição 1
        str_saida+=                                                                     //concatenar a string maior
        (idx>0?", ":"")+                                                                //if ternário para não adicionar ', ' a primeira...
        str_thisProp+": "+str_thisVal;                                                  //... posição do indíce
        idx++;                                                                          //incrementar o contador
    }
    //console.log(str_saida);                                                             //log apenas da string completa.
}

function lineAcross(){
    let lineAcross = "--------------------------------------------"
    //console.log(lineAcross)
}