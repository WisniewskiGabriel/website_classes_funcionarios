import { createNewCard } from './criar_novo_card.js';
import { instanciarGerente,instanciarDesenvolvedor } from './classes/func_agregator.js';


let gerentes_element = document.getElementById('gerente-wrapper');



let objGte = instanciarGerente();
console.log(objGte);

objGte = normalizeClasses(objGte);
console.log(objGte);

let card = createNewCard(objGte);
gerentes_element.innerHTML+=(card);

function normalizeClasses(obj){

    if(obj.hasOwnProperty('_linguagem')){


    } else if(obj.hasOwnProperty('_departamento')){

        obj._tipo = "Gerente";
        obj._acao = obj._departamento;
        delete obj._departamento;


        obj._statusAcao = obj._gerenciando;
        delete obj._gerenciando;

    } return(obj)

}

