class Tabela {

    constructor(nome, email, telefone){

        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._total = numero1 + numero2;

        //Object.freeze(this);
    }

    get nome(){
        return this._nome;
    }

    get email(){
        return this._email;
    }

    get telefone(){
        return this._telefone;
    }

    get total(){
        return this._total;
    }
}