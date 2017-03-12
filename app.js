try{
  const {app, BrowserWindow} = require('electron');
  const path=require('path');

  let mainWindow;
  const createWindow = () => {
    mainWindow = new BrowserWindow({ 
        width: 800, 
        height: 600,
        webSecurity: false,
        allowRunningInsecureContent: true,
        /*webPreferences: {
          preload: path.join(__dirname, 'test.js')
        }*/
      });
      mainWindow.loadURL('file://'+path.join(__dirname, 'main/index.html'));

      //mainWindow.webContents.openDevTools();
      mainWindow.on('closed', function () {
        mainWindow = null;
      });
  }

  app.on('ready', createWindow);
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  });
}
catch(ex){
  console.log('Got error: ', ex);
}

//export DISPLAY=':99.0'
//Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 +extension RANDR &
//electron app