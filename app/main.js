const { app, BrowserWindow, ipcMain} = require('electron');

let tela = null;

app.on('ready', () => {
    tela = new BrowserWindow({
        transparent: 50,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    tela.loadFile('app/index.html');
});

ipcMain.on('fechar-app', () => {
    tela.close();
})

ipcMain.on('maximizar-app', () => {
    tela.maximize();
})

ipcMain.on('minimizar-app', () => {
    tela.unmaximize();
})