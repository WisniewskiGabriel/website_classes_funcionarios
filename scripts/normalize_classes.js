export function normalizeClasses(obj){

    if(obj.hasOwnProperty('_linguagem')){
        
        obj._tipo = "Desenvolvedor";
        obj._acao = obj._linguagem;
        delete obj._linguagem;

        obj._statusAcao = obj._programando;
        delete obj._programando;

    } else if(obj.hasOwnProperty('_departamento')){

        obj._tipo = "Gerente";
        obj._acao = obj._departamento;
        delete obj._departamento;

        obj._statusAcao = obj._gerenciando;
        delete obj._gerenciando;

    } return(obj)

}