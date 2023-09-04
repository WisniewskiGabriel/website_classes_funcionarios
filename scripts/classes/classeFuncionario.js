export class Funcionario{                                                                          //classe bem feijão com arroz mesmo
    constructor(nome,idade,cargo){
        this._nome = nome;                                                                  //construtor com "_" antes do nome...
        this._idade = idade;                                                                //... para diferenciar do nome dos...
        this._cargo = cargo;                                                                //... argumentos
        this._trabalhando = false;
    }

    get nome(){                                                                             //getters and...
        return this._nome;                                                                  //...
    }                                                                                       //...
                                                                                            //...
    set nome(novoNome){                                                                     //... setters
        this._nome = novoNome
    }

    get idade(){
        return this._idade;
    }

    set idade(novaIdade){
        this._idade = novoIdade
    }

    get cargo(){
        return this._cargo;
    }

    set cargo(novoCargo){
        this._cargo = novoCargo
    }

    seApresentar(){                                                                         //esse método simula um funcionário se apresentando
        let strApresentacao =
        "Olá, meu nome é "+this._nome+", "+
        "tenho "+this._idade+" ano"+(Number(this.idade)>1 ? 's' : '')+" "+
        "e trabalho nessa empresa no cargo de "+this._cargo;
        //console.log(strApresentacao);
    }

    trabalhar(){                                                                            //esse aqui só vira true ou avisa se já é true,...
        if(this._trabalhando === true){                                                     //... tornar false não está previsto
            //console.log("Já está trabalhando.");
        } else {
            this._trabalhando = true;
        }
    }
}