class Tabela {

    constructor(nome, numero1, numero2){

        this._nome = nome;
        this._numero1 = numero1;
        this._numero2 = numero2;
        this._total = numero1 + numero2;

        //Object.freeze(this);
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
        return this._total;
    }
}