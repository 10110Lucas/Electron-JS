let nome = document.getElementById('nome');
let email = document.getElementById('email');
let telefone = document.getElementById('telefone');
let btnAdicionar = document.getElementById('calcular');

let banco = new PessoaDAO();


let tabelaView = document.querySelector('tbody');

btnAdicionar.addEventListener('click', () => {
    
    banco.create(nome.value, email.value, telefone.value);
    banco.listar();
    // alert("testando:  "+object.nome+"  "+object.numero1);
    /*tabelaView.innerHTML += 
                            `<tr>
                                <td>${nome.value}</td>
                                <td>${parseInt(numero1.value)}</td>
                                <td>${parseInt(numero2.value)}</td>
                            </tr>` */
});