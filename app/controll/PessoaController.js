let nome = document.getElementById('nome');
let email = document.getElementById('email');
let telefone = document.getElementById('telefone');
let btnAdicionar = document.getElementById('btnAdicionar');


const pessoaDAO = new PessoaDAO();

btnAdicionar.addEventListener('click', () => {
    // console.log(`Nome: ${nome.value}\nEmail: ${email.value}\nTelefone: ${telefone.value}`);
    // pessoa.salvar(nome.value, email.value, parseInt(telefone.value));
    adicionarNaTabela();
});

function adicionarNaTabela(){
    let pessoa = pessoaDAO.consultar();
    console.log(pessoa);
}


/** 
 *
 * Pessoas, Maquinas e burp não registradas
 * bruno.santana@berghem.com.br
 * - maquina: 7T543T2
 * - burp: não tem
 * - teclado: K320
 * diego.souza@berghem.com.br
 * - maquina: 4FYLQX2
 * - burp: 22/07/2020
 * wagner.silva@berghem.com.br
 * - maquina: 1FJY9X2
 * - burp: 26/06/2020
 * caique.pascoal@berghem.com.br --?
 * - maquina: j77df82
 * - burp: 22/07/2020
 * gustavo.santos@berghem.com.br --?
 * - maquina: 
 * - burp: 
 * michele.rocha@berghem.com.br
 * - maquina: jynx
 * - burp: não tem
 * lucas.ferreira@berghem.com.br
 * - maquina: 1ZDJCK2
 * - burp: não tem
 * leonardo.beda@berghem.com.br
 * - maquina: 4FZKQX2
 * - burp: 03/06/2020
 * bruno.silva@berghem.com.br
 * - maquina: 
 * - burp: 
 *  
**/