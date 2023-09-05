import { createNewCard } from './criar_novo_card.js';
import { instanciarGerente, instanciarDesenvolvedor } from './classes/func_agregator.js';
import { normalizeClasses } from './normalize_classes.js';

let cards_element = document.getElementById('gerente_and_devs-wrapper');
let gte_add_btn = document.getElementById('add-gte');
let dev_add_btn = document.getElementById('add-dev');
let workers_element = document.getElementById('workers-wrapper');
let body_element = document.getElementById('body');

gte_add_btn.addEventListener('click', criarGte);
dev_add_btn.addEventListener('click', criarDev);
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
    let qtd_cards = cards_element.childElementCount;
    console.log(qtd_cards);
    console.log(elemento_aviso);

    if(!elemento_aviso !== null && qtd_cards == 0){
        console.log("if");
        cards_element.innerHTML = aviso_zero;
    } else if(elemento_aviso !== null && qtd_cards>=1){
        console.log("else if");
        elemento_aviso.remove();
    }else{
        console.log("else")
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
