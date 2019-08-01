let nome = document.getElementById('nome');
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let btnSomar = document.getElementById('calcular');

// let object = new Tabela(nome.value, parseInt(numero1.value), parseInt(numero2.value));


let tabelaView = document.querySelector('tbody');

btnSomar.addEventListener('click', () => {
    
    // alert("testando:  "+object.nome+"  "+object.numero1);
    tabelaView.innerHTML += 
                            `<tr>
                                <td>${nome.value}</td>
                                <td>${parseInt(numero1.value)}</td>
                                <td>${parseInt(numero2.value)}</td>
                                <td>${parseInt(numero1.value) + parseInt(numero2.value)}</td>
                            </tr>`
});