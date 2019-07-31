class Tabela {

    constructor(){
        this._nome;
        this._numero1;
        this._numero2;
    }

    get nome(){
        return this._nome;
    }
    
    get numero1(){
        return this._numero1;
    }

    get numero2(){
        return this._numero2;
    }

    get total(){
        return this._numero1 + this._numero2;
    }

    set nome(nome){
        this._nome = nome;
    }

    set numero1(numero1){
        this._numero1 = numero1;
    }

    set numero2(numero2){
        this._numero2 = numero2;
    }
}