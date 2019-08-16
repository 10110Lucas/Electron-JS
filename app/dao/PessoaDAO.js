const mysql = require('mysql');

class PessoaDAO{

    constructor(){
        this._connection = null;
    }

    banco(){
        this._connection = mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: '',
            database: 'pessoas',
            debug: false
        });
    }



    consultar(){
        this.banco();
        if(!this._connection.connect()){
            this._connection.connect();
        }
        
        var array = [];
        let pessoa = null;

        this._connection.query('SELECT * FROM pessoa', (error, results, fields) => {
            if (error) {
                throw error;
            } else if(results){

                results.forEach(element => {
                    // pessoa = new Pessoa(element.id, element.nome, element.email, element.telefone);
                    // pessoa.armazena(pessoa);
                    array.push(new Pessoa(element.id, element.nome, element.email, element.telefone));
                });

                console.log(array);
                return array;
            }
            
        });
        // return pessoa.retorno();
    }



    salvar(name, email, tell){
        this.banco();
        if(!this._connection.connect()){
            this._connection.connect();
        }
        this._connection.query('INSERT INTO pessoa (nome, email, telefone) value (?, ?, ?)', 
        [name, email, tell],
        (error, results, fields) => {
            if(error){
                console.log('Usuário não foi inserido!');
                throw error;
            } else {
                console.log('Usuário inserido com sucesso!\n', results.insertId);
            }
        });
        this._connection.end();
    }
}