import { Funcionario } from './classeFuncionario.js';

export class Gerente extends Funcionario{
    constructor(nome,idade,cargo,departamento){
    super(nome,idade,cargo);
    this._departamento = departamento;
    this._gerenciando = false;
    }

    get departamento(){
        return this.departamento;
    }

    set departamento(novoDepartamento){
        this._departamento = novoDepartamento;
    }

    gerenciar(){
        if(this._gerenciando === true){
            //console.log("Já está gerenciando");
        }else{
            this._gerenciando = true;
            //console.log("Gerenciamento iniciado no departamento "+this._departamento);
        }
    }
}
