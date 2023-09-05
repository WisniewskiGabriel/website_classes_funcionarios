import { createNewCard } from './criar_novo_card.js';
import { instanciarGerente, instanciarDesenvolvedor } from './classes/func_agregator.js';
import { normalizeClasses } from './normalize_classes.js';

let gtes_element = document.getElementById('gerente-wrapper');
let devs_element = document.getElementById('devs-wrapper');
let gte_add_btn = document.getElementById('add-gte');
let dev_add_btn = document.getElementById('add-dev');
let workers_element = document.getElementById('workers-wrapper');


gte_add_btn.addEventListener('click', criarGte);
dev_add_btn.addEventListener('click', criarDev);
workers_element.addEventListener('click', (event) => {
    if(event.target.className === 'demitir-btn') {
        document.getElementById(event.target.value).remove()
    }
  })


function criarGte(){

    let objGte;
    let card;
    
    objGte = instanciarGerente();
    objGte = normalizeClasses(objGte);
    card = createNewCard(objGte);
    gtes_element.innerHTML+=(card);
}

function criarDev(){

    let objDev;
    let card;
    
    objDev = instanciarDesenvolvedor();
    objDev = normalizeClasses(objDev);
    card = createNewCard(objDev);
    devs_element.innerHTML+=(card);
}
