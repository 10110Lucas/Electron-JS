const { app, BrowserWindow } = require('electron');

let win = null;
app.on('ready', () => {
    win = new BrowserWindow({
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('app/view/index.html');

    win.once('ready-to-show', () => {
        win.show();
        win.maximize();
        //win.setWindow(null);
    });
});

app.on('window-all-closed', () => {
    app.quit();
});