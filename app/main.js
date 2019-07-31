const { app, BrowserWindow, ipcMain } = require('electron');

let win;

app.on('ready', () => {
  win = new BrowserWindow({
    titleBarStyle: 'hidden',
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  
  win.loadFile('app/index.html');

  win.once('ready-to-show', () =>{ win.show() });
});

ipcMain.on('fechar-app', () => {
  win.close();
})

app.on('window-all-closed', () => {
  app.quit();
});

//-------------------------------------------------------------------------------------------------------------

let novaJanelaAberta = null;

ipcMain.on('abrir-nova-janela', () => {

  if(novaJanelaAberta == null){
    novaJanelaAberta = new BrowserWindow({
      width: 300,
      height: 200,
      alwaysOnTop: true,
      frame: false,
      webPreferences: {
        nodeIntegration: true
      }
    });
    novaJanelaAberta.on('closed', () => {
      novaJanelaAberta = null;
    })
  }
  
  novaJanelaAberta.loadURL(`file://${__dirname}/criacao.html`);
});

ipcMain.on('fechar-a-janela', () => {
  novaJanelaAberta.close();
});