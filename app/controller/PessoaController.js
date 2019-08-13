let nome = document.getElementById('nome');
let email = document.getElementById('email');
let telefone = document.getElementById('telefone');
let btnAdicionar = document.getElementById('btnAdicionar');

const pessoa = new PessoaDAO();

btnAdicionar.addEventListener('click', () => {
    console.log(`Nome: ${nome.value}\nEmail: ${email.value}\nTelefone: ${telefone.value}`);
    pessoa.salvar(nome.value, email.value, parseInt(telefone.value));
    pessoa.consultar();
});