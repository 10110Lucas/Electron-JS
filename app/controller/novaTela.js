const { ipcRenderer } = require('electron');

let btnJanela = document.getElementById('janela');

btnJanela.addEventListener('click', () => {
    ipcRenderer.send('abrir-nova-janela');
});

let btnFechaApp = document.getElementById('janela-principal');
btnFechaApp.addEventListener('click', () => {
    ipcRenderer.send('fechar-app');
});

let minimizarApp = document.getElementById('minimizar');
minimizarApp.addEventListener('click', () => {
    ipcRenderer.send('minimizar-app');
});

let maximizarApp = document.getElementById('maximizar');
maximizarApp.addEventListener('click', () => {
    ipcRenderer.send('maximizar-app');
});

let fecharApp = document.getElementById('fechar');
fecharApp.addEventListener('click', () => {
    ipcRenderer.send('fechar-app2');
});