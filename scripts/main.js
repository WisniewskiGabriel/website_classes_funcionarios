import { createNewCard } from './criar_novo_card.js';
import { instanciarGerente,instanciarDesenvolvedor } from './classes/func_agregator.js';


let gerentes_element = document.getElementById('gerente-wrapper');



let objGte = instanciarGerente();
console.log(objGte);
let objDev = instanciarDesenvolvedor();
console.log(objDev);



function normalizeClasses(obj){

    if(obj.hasOwnProperty(_linguagem)){
        obj[_linguagem] = obj[_acao];        
    }else if(obj.hasOwnProperty(_departamento)){
        obj[_linguagem] = obj[_acao];        
    }

    if(obj.hasOwnProperty(_programando)){
        obj[_programando] = obj[_statusAcao];
    } else if (obj.hasOwnProperty(_gerenciando)){
        obj[_gerenciando] = obj[_statusAcao];
    }
}





//let card = createNewCard(objGte);
//gerentes_element.innerHTML+=(card);

