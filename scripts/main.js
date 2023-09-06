import { createNewCard } from './criar_novo_card.js';
import { instanciarGerente, instanciarDesenvolvedor } from './classes/func_agregator.js';
import { normalizeClasses } from './normalize_classes.js';
import { criar_modal } from './criar_modal.js';

let cards_element = document.getElementById('gerente_and_devs-wrapper');
let gte_add_btn = document.getElementById('add-gte');
let dev_add_btn = document.getElementById('add-dev');
let workers_element = document.getElementById('workers-wrapper');
let body_element = document.getElementById('body');
let modal_element = document.getElementById('modal');
let btn_fechar_modal = document.getElementById('btn-cancelar-acao');
let btn_gerar_aleatorio = document.getElementById('gerar-aleatorio');

//gte_add_btn.addEventListener('click', criarGte);
//dev_add_btn.addEventListener('click', criarDev);

gte_add_btn.addEventListener('click', (event) => {
  modal_element.showModal();
  btn_gerar_aleatorio.addEventListener('click', criarGte);
});

dev_add_btn.addEventListener('click', (event) => {
  modal_element.showModal();
  //btn_gerar_aleatorio.addEventListener('click', criarDev);
});

btn_fechar_modal.addEventListener('click', (event) => {
  modal_element.close();
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
    let qtd_cards = document.querySelectorAll('.gerente-card').length;
    if(!elemento_aviso !== null && qtd_cards == 0){
        cards_element.innerHTML = aviso_zero;
    } else if(elemento_aviso !== null && qtd_cards>0){
        elemento_aviso.remove();
    }else{info_1_idade +" ano";
    }
  })

function criarGte(){
    let objGte;
    let card;
    
    objGte = instanciarGerente();
    objGte = normalizeClasses(objGte);
    card = createNewCard(objGte);
    cards_element.innerHTML+=(card);
}

function criarDev(){
    let objDev;
    let card;
    
    objDev = instanciarDesenvolvedor();
    objDev = normalizeClasses(objDev);
    card = createNewCard(objDev);
    cards_element.innerHTML+=(card);
}
