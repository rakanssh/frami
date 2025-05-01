const { BrowserWindow } = require("electron");
const { googleUrl } = require("../config/urls");

/**
 * Creates and returns the main application window
 */
function createMainWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Load the default page
  win.loadURL(googleUrl);

  return win;
}

module.exports = {
  createMainWindow,
};
