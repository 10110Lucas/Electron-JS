const { app, BrowserWindow, ipcMain } = require('electron');

//-------------------------- Telas ---------------------------------------------------------------

let win;
app.on('ready', () => {
  win = new BrowserWindow({
    titleBarStyle: 'hidden',
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('app/view/index.html');
  win.once('ready-to-show', () =>{ win.show(); win.maximize(); win.setMenu(null); });
});

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
    });
  }
  novaJanelaAberta.loadURL(`file://${__dirname}/view/criacao.html`);
});

//----------------------------------- Interações das janelas --------------------------------------

ipcMain.on('fechar-a-janela', () => {
  novaJanelaAberta.close();
});

ipcMain.on('fechar-app', () => {
  win.close();
});

ipcMain.on('fechar-app2', () => {
  win.close();
});

ipcMain.on('maximizar-app', () => {
  win.maximize();
});

ipcMain.on('minimizar-app', () => {
  win.unmaximize();
});

app.on('window-all-closed', () => {
  app.quit();
});