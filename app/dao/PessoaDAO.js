class PessoaDAO {

    constructor(){
        this._i = 0;
        this._id = [];
        this._nome = [];
        this._email = [];
        this._telefone = [];
    }

    create(nome, email, telefone){
        this._id.push(this._i + 1);
        this._nome.push(nome);
        this._email.push(email);
        this._telefone.push(telefone);
    }

    listar(){
        alert(`${this._id} \n ${this._nome} \n ${this._email} \n ${this._telefone}`);
    }
}