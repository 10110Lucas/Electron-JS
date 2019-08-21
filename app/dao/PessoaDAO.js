const mysql = require('mysql');

class PessoaDAO{
    
    constructor(){
        this._connection = null;
        this._tabelaView = document.querySelector('tbody');
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

        this._connection.connect( () => {
            console.log('conectado ao banco!');
            this._tabelaView.innerHTML = '';

            let query = this._connection.query('SELECT * FROM pessoa');
            
            query.on('result', (row) => {
                setTimeout( () => {

                    console.log('--Pessoa--\nNome: ' + row.nome);
                    console.log('Email: ' + row.email);
                    console.log('Telefone: ' + row.telefone);

                    this._tabelaView.innerHTML += 
                            `<tr>
                                <td>${row.nome}</td>
                                <td>${row.email}</td>
                                <td>${row.telefone}</td>
                            </tr>`
                }, 300);
            });

            query.on('end', () => this._connection.end() );
        });
    }



    salvar(name, email, tell){
        this.banco();
        let sql = 'INSERT INTO pessoa (nome, email, telefone) value (?, ?, ?)';
        let array = [name, email, tell];
        
        alert("Preencher todos os campos\ntamanho do array: "+array.length);
        if(name != '' && email != '' && tell != ''){
            this._connection.connect( () => {
                let query = this._connection.query(sql , array);

                query.on('error', (error) => {
                    console.log('Usuário não foi inserido!');
                    throw error;
                });

                query.on('result', (result) => {
                    console.log(`Usuário ${result.insertId} - ${name} inserido com sucesso!`);
                });

                query.on('end', () => { this._connection.end(); });
            });
            
            this.consultar();
        }
    }
}