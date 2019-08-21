class Pessoa {

    constructor(id, nome, email, tell){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = tell;
        this._array = [];
    }

    get getId(){
        return this.id;
    }

    get getNome(){
        return this.nome;
    }

    get getEmail(){
        return this.email;
    }

    get getTelefone(){
        return this.telefone;
    }

    armazena(pess){
        this._array.push(pess);
    }

    consulta(){
        console.log(this._array);
    }

    retorno(){
        return [].concat(this._array);
    }
}