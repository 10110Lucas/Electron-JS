class Pessoa {

    constructor(id, nome, email, tell){
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = tell;
        this._array = [];
    }

    get getId(){
        return this._id;
    }

    get getNome(){
        return this._nome;
    }

    get getEmail(){
        return this._email;
    }

    get getTelefone(){
        return this._telefone;
    }

    armazena(pess){
        this._array.push(pess);
        console.log(this._array);
    }

    consulta(){
        console.log(this._array);
    }

    retorno(){
        return [].concat(this._array);
    }
}