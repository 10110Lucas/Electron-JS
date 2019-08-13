const mysql = require('mysql');

class PessoaDAO{

    constructor(){
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
        this._connection.connect();
        this._connection.query('SELECT * FROM pessoa', (error, results, fields) => {
            if (error) throw error;
            console.log(results);
        });
        this._connection.end();
    }

    salvar(name, email, tell){
        this._connection.connect();

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

    // salvar("teste0001", "james@bgr.com", "987654321");
    // consultar();
}