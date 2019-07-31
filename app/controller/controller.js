const { ipcRenderer } = require('electron');

let minimizarApp = document.getElementById('minimizar');
let maximizarApp = document.getElementById('maximizar');
let fecharApp = document.getElementById('fechar');

minimizarApp.addEventListener('click', () => {
    ipcRenderer.send('minimizar-app');
});
maximizarApp.addEventListener('click', () => {
    ipcRenderer.send('maximizar-app');
});
fecharApp.addEventListener('click', () => {
    ipcRenderer.send('fechar-app');
});

let nome = document.getElementById('nome');
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let btnSomar = document.getElementById('calcular');

let tabelaView = document.querySelector('tbody');

btnSomar.addEventListener('click', () => {

    tabelaView.innerHTML += 
                            `<tr>
                                <td>${nome.value}</td>
                                <td>${parseInt(numero1.value)}</td>
                                <td>${parseInt(numero2.value)}</td>
                                <td>${parseInt(numero1.value) + parseInt(numero2.value)}</td>
                            </tr>`
});