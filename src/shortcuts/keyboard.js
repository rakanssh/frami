const { globalShortcut } = require("electron");

/**
 * Register global keyboard shortcuts
 * @param {BrowserWindow} win - The browser window to apply shortcuts to
 */
function registerShortcuts(win) {
  globalShortcut.register("CommandOrControl+Shift+I", () => {
    win.webContents.toggleDevTools();
  });

  globalShortcut.register("CommandOrControl+R", () => {
    win.webContents.reload();
  });

  globalShortcut.register("CommandOrControl+[", () => {
    if (win.webContents.canGoBack()) {
      win.webContents.goBack();
    }
  });

  globalShortcut.register("CommandOrControl+]", () => {
    if (win.webContents.canGoForward()) {
      win.webContents.goForward();
    }
  });
}

module.exports = {
  registerShortcuts,
};
