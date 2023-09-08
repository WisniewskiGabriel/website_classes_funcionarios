import { createNewCard } from './criar_novo_card.js';
import { instanciarGerente, instanciarDesenvolvedor } from './classes/func_agregator.js';
import { normalizeClasses } from './normalize_classes.js';

let cards_element = document.getElementById('gerente_and_devs-wrapper');
let gte_add_btn = document.getElementById('add-gte');
let dev_add_btn = document.getElementById('add-dev');
let workers_element = document.getElementById('workers-wrapper');
let body_element = document.getElementById('body');
let modal_element = document.getElementById('modal');
let btn_fechar_modal = document.getElementById('btn-cancelar-acao');
let btn_continuar_acao = document.getElementById('btn-continuar-acao');
let btn_aleatorio_wrapper = document.getElementById('aleatorio-wrapper');
let titulo_cargo_element = document.getElementById('titulo-cargo');
let atributo_especifico_element = document.getElementById('atributo-especifico');

btn_continuar_acao.addEventListener('click', () => {

  let input_nome = document.getElementById('val_nome_func');
  let input_idade = document.getElementById('val_idade_func');
  let input_cargo = document.getElementById('val_cargo_func');
  let input_atributo_func = document.getElementById('val_atributo_func');

  let str_nome = input_nome.value;
  let str_idade = input_idade.value;
  let str_cargo = input_cargo.value;
  let str_atributo_func = input_atributo_func.value;
  
  let str_tipo = titulo_cargo_element.innerText;
  let nome_input_atributo;
  let isGerente = false;
  let isDev = false;

  if(str_tipo.includes("Gerente")){
    isGerente = true;
    nome_input_atributo = "Departamento";
  }

  if(str_tipo.includes("Desenvolvedor")){
    isDev = true;
    nome_input_atributo = "Linguagem";

  }

  let obj_strOfInputs = {'Nome':str_nome,'Idade':str_idade,'Cargo':str_cargo,nome_input_atributo:str_atributo_func};
  let array_empty_fields = [];

  Object.entries(obj_strOfInputs).forEach(([key, value]) => {
    if(!value.length > 0){
      array_empty_fields.push(key);
    }
  });
  
  let deuErro = false;

  try{

    if(array_empty_fields.length > 0){
      throw new Error("existem campos vazios");
    }

    if(isGerente){
      criarGte(str_nome,str_idade,str_cargo,str_atributo_func);      
    } else if(isDev){
      criarDev(str_nome,str_idade,str_cargo,str_atributo_func);
    }
  } catch {
    deuErro = true;
    useError("Preencha todos os campos.");
    let array_fields = document.querySelectorAll("input");

    array_fields.forEach((input) => {
      if(!input.value.length > 0){
        input.style.borderColor = '#eb4f44';
        input.style.borderWidth = '0.2rem';
      } else {
        input.style.borderColor = 'black';
        input.style.borderWidth = '0.1rem';
      }
    });
  } finally {
    if (!deuErro){
      emptyFields();
      emptyError();
    }
  }

})

gte_add_btn.addEventListener('click', (event) => {
  
  let str_cargo = "Gerente";
  let element_gte_aleatorio = "<button id='gerar-gte-aleatorio'>Gerar gerente aleatoriamente!</button>";
  btn_aleatorio_wrapper.innerHTML = element_gte_aleatorio;

  titulo_cargo_element.innerText = "Cadastrar "+str_cargo;
  atributo_especifico_element.innerText = "Departamento:";
  modal_element.showModal();
  
  let btn_gerar_gte_aleatorio = document.getElementById('gerar-gte-aleatorio');
  btn_gerar_gte_aleatorio.addEventListener('click', criarGteRandom);

});

dev_add_btn.addEventListener('click', (event) => {
  
  let str_cargo = "Desenvolvedor";
  let element_dev_aleatorio = "<button id='gerar-dev-aleatorio'>Gerar desenvolvedor aleatoriamente!</button>";
  btn_aleatorio_wrapper.innerHTML = element_dev_aleatorio;

  titulo_cargo_element.innerText = "Cadastrar "+str_cargo;
  atributo_especifico_element.innerText = "Linguagem:";
  modal_element.showModal();
  let btn_gerar_dev_aleatorio = document.getElementById('gerar-dev-aleatorio');
  btn_gerar_dev_aleatorio.addEventListener('click', criarDevRandom);
});

btn_fechar_modal.addEventListener('click', (event) => {
  fecharModal();
});

workers_element.addEventListener('mouseover', (event) => {
    if(event.target.className === 'demitir-btn') {
        event.target.innerText = "Demitir?";
    }
  })
  workers_element.addEventListener('mouseout', (event) => {
    if(event.target.className === 'demitir-btn') {
        event.target.innerText = "Trabalhando";
    }
  })
workers_element.addEventListener('click', (event) => {
    if(event.target.className === 'demitir-btn') {
        document.getElementById(event.target.value).remove()
    }
  })
  body_element.addEventListener('click', (event) => {
    let aviso_zero = "<h1 id='aviso-zero-funcionarios'>Nenhum funcionário adicionado</h1>";
    let elemento_aviso = document.getElementById('aviso-zero-funcionarios');
    let qtd_cards = document.querySelectorAll('.worker-card').length;
    if(!elemento_aviso !== null && qtd_cards == 0){
        cards_element.innerHTML = aviso_zero;
    } else if(elemento_aviso !== null && qtd_cards>0){
        elemento_aviso.remove();
    }else{info_1_idade +" ano";
    }
  })

function criarGte(nome,idade,cargo,atributo){
    let objGte;
    let card;
    
    objGte = instanciarGerente(nome,idade,cargo,atributo);
    objGte = normalizeClasses(objGte);
    card = createNewCard(objGte);
    cards_element.innerHTML+=(card);
    fecharModal();
    card = "";
}

function criarDev(nome,idade,cargo,atributo){
  let objDev;
  let card;
  
  objDev = instanciarDesenvolvedor(nome,idade,cargo,atributo);
  objDev = normalizeClasses(objDev);
  card = createNewCard(objDev);
  cards_element.innerHTML+=(card);
  fecharModal();
  card = "";
}

function criarGteRandom(){
    let objGte;
    let card;
    
    objGte = instanciarGerente();
    objGte = normalizeClasses(objGte);
    card = createNewCard(objGte);
    cards_element.innerHTML+=(card);
    fecharModal();
    card = "";
    emptyFields();
    emptyError();
}

function criarDevRandom(){
    let objDev;
    let card;
    
    objDev = instanciarDesenvolvedor();
    objDev = normalizeClasses(objDev);
    card = createNewCard(objDev);
    cards_element.innerHTML+=(card);
    fecharModal();
    card = "";
    emptyFields();
    emptyError();
}

function fecharModal(){
  modal_element.close();
}

function emptyFields(){
  document.getElementById('val_nome_func').value = "";
  document.getElementById('val_nome_func').style.borderColor = 'black';
  document.getElementById('val_nome_func').style.borderWidth = '0.1rem';


  document.getElementById('val_idade_func').value = "";
  document.getElementById('val_idade_func').style.borderColor = 'black';
  document.getElementById('val_idade_func').style.borderWidth = '0.1rem';


  document.getElementById('val_cargo_func').value = "";
  document.getElementById('val_cargo_func').style.borderColor = 'black';
  document.getElementById('val_cargo_func').style.borderWidth = '0.1rem';


  document.getElementById('val_atributo_func').value = "";
  document.getElementById('val_atributo_func').style.borderColor = 'black';
  document.getElementById('val_atributo_func').style.borderWidth = '0.1rem';

}

function emptyError(){
  let elemento = document.getElementById('error-msg');
  elemento.innerText = "Ou inserir dados manualmente";
  elemento.style.color = 'black';
}

function useError(str){
  let elemento = document.getElementById('error-msg');
  elemento.innerText = str;
  elemento.style.color = '#eb4f44';
}