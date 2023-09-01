import { createNewCard } from './criar_novo_card.js';

let gerentes_element = document.getElementById('gerente-wrapper');

let objGte = {tipo:'Gerente',idade:'18 anos',statusFunc: "Trabalhando",acao: 'Gerenciando',nome:'José',cargo:'Chefinho',atribuicao:'RPA'}

let card = createNewCard(objGte);

gerentes_element.innerHTML+=(card);
gerentes_element.innerHTML+=(card);
gerentes_element.innerHTML+=(card);
gerentes_element.innerHTML+=(card);

console.log(card);