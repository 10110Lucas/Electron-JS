let nome = document.getElementById('nome');
let email = document.getElementById('email');
let telefone = document.getElementById('telefone');
let btnAdicionar = document.getElementById('btnAdicionar');
let btnConsultar = document.getElementById('btnConsultar');


let pessoaDAO = new PessoaDAO();

btnAdicionar.addEventListener('click', () => {
    // console.log(`Nome: ${nome.value}\nEmail: ${email.value}\nTelefone: ${telefone.value}`);
    pessoaDAO.salvar(nome.value, email.value, parseInt(telefone.value));
});

btnConsultar.addEventListener('click', () =>{
    pessoaDAO.consultar();
});