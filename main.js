const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow(){
  const win = new BrowserWindow({
    width: 1000, height: 650, icon: path.join(__dirname,'icon.ico'),
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  });
  win.setMenuBarVisibility(false);
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', ()=>{ if (process.platform !== 'darwin') app.quit(); });
