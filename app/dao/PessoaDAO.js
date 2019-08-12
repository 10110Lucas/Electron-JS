const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'pessoas'
});

function consultar(){
    connection.connect();
    connection.query('SELECT * FROM pessoa', (error, results, fields) => {
        if (error) throw error;
        console.log(results);
    });
    connection.end();
}

function salvar(name, email, tell){
    connection.connect();

    let json = {nome: `${name}`,
                email: `${email}`,
                telefone: parseInt(tell)};

    connection.query('INSERT INTO pessoa SET ?', json, (error, results, fields) => {
            if (error) throw error;
            console.log(results);
    });

    connection.end();
}

// salvar("teste0001", "james@bgr.com", "987654321");
consultar();