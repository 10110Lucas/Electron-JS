const { ipcRenderer } = require('electron');

let btnFecha = document.querySelector('#fechando');
btnFecha.addEventListener('click', () => {
    ipcRenderer.send('fechar-a-janela');
});