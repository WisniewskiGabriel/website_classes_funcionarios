let name_list = ['Rafaela Oliveira','Gabriel Santos','Isabella Costa','Lucas Silva','Juliana Pereira','Mateus Ferreira',
'Larissa Rodrigues','Leonardo Almeida','Camila Souza','Pedro Lima','Sofia Gonçalves','Eduardo Carvalho','Vitória Martins',
'Gustavo Mendes','Beatriz Nunes','Thiago Rocha','Manuela Barbosa','João Castro','Laura Fernandes','Alexandre Cunha'];

let job_list = ['Engenheiro de Software','Desenvolvedor Front-end','Desenvolvedor Back-end','Arquiteto de Soluções',
'Analista de Dados','Designer de UI/UX','Gerente de Projeto de Tecnologia','Especialista em Segurança Cibernética',
'Engenheiro de DevOps','Cientista de Dados'];

let department_list = ['Desenvolvimento de Software','Design e Experiência do Usuário (UX/UI)','Gerenciamento de Projetos',
'Suporte Técnico','Segurança da Informação'];

let language_list = ['Python','JavaScript','Java','C#','PHP','C++','Ruby','Swift','TypeScript','Go','Kotlin','Rust','R',
'MATLAB','Perl','Objective-C','Shell Scripting (Bash)','Dart','Scala','Lua'];

// ^---^ valores de arrays iniciados ^---^


function isNullOrEmpty(str){
    return str === null || str === '' || str === undefined;                     //checa se str é nula ou vazia
}

function getRandomInt(max) {                                                    //gera número aleatório com range 0 a valor máx.
    return Math.floor(Math.random()*max);
}

function getCountOfAssets(list){                                                //recebe array e retorna quantidade de itens dentro
    return list.length;
}

function getRandomAge(){                                                        //gera uma idade aleatória de 1 a 99
    let age = getRandomInt(99);

    if(Number(age)===0){                                                        //caso random for = 0, inicia com valor 1,...
        age = 1;                                                                //... sendo assim, 1 é o valor mais provável
    }

    return String(age);
}
function getRandomFromList(list){                                               //getRandomFromList pega o tamanho (length) da lista desejada,...
    return list[getRandomInt(getCountOfAssets(list))];                          //... gera uma int aleatória e saca o valor dessa posição
}

function getRandomName(){                                                       //... apenas
    return getRandomFromList(name_list);                                        //...
}                                                                               //... pegam
                                                                                //...
function getRandomJob(){                                                        //... valores
    return getRandomFromList(job_list);                                         //...
}                                                                               //... aleatórios
                                                                                //...
function getRandomDepartment(){                                                 //... a partir
    return getRandomFromList(department_list)                                   //...
}                                                                               //... dos
                                                                                //...
function getRandomLanguage(){                                                   //... arrays
    
    return getRandomFromList(language_list);
}

module.exports = {                                                              //exportar todas essas funções
    isNullOrEmpty,
    getRandomInt,
    getCountOfAssets,
    getRandomAge,
    getRandomFromList,
    getRandomName,
    getRandomJob,
    getRandomDepartment,
    getRandomLanguage
};