const {app, BrowserWindow} = require('electron')
const path = require('path')
let win
// dir name is /, resolved to "D:/"
console.log('dirname is', path.resolve(__dirname))

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 800
    })

    win.loadURL('file:///D:\\Pool\\Projects\\wobstorm\\empty-started\\electron-start-1-webpack\\dist\\index.html')
    win.on('close', () => {
        win = null
    })
}


app.on('ready', createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if (win == null) {
        createWindow()
    }
})

