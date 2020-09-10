const { app, BrowserWindow } = require('electron')

function create() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('src/html/index.html')
  win.removeMenu()
}

app.whenReady().then(create)