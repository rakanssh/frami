const { BrowserWindow } = require("electron");
const { googleUrl } = require("../config/urls");
const path = require("path");

/**
 * Creates and returns the main application window
 */
function createMainWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    frame: false,
    resizable: false,
    icon: path.join(
      __dirname,
      "../../assets/icons",
      process.platform === "win32"
        ? "icon.ico"
        : process.platform === "darwin"
        ? "icon.icns"
        : "icon_256x256.png"
    ),
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
