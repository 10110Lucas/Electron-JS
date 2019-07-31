const { ipcRenderer } = require('electron');

let btnJanela = document.getElementById('janela');

btnJanela.addEventListener('click', () => {
    ipcRenderer.send('abrir-nova-janela');
})

let btnFechaApp = document.getElementById('janela-principal');
btnFechaApp.addEventListener('click', () => {
    ipcRenderer.send('fechar-app');
})