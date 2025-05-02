const { globalShortcut, clipboard } = require("electron");

/**
 * Register global keyboard shortcuts
 * @param {BrowserWindow} win - The browser window to apply shortcuts to
 */
function registerShortcuts(win) {
  // Toggle dev tools
  globalShortcut.register("CommandOrControl+Shift+I", () => {
    win.webContents.toggleDevTools({ mode: "detach" });
  });

  // Reload the page
  globalShortcut.register("CommandOrControl+R", () => {
    win.webContents.reload();
  });

  // Go back
  globalShortcut.register("CommandOrControl+[", () => {
    if (win.webContents.canGoBack()) {
      win.webContents.goBack();
    }
  });

  // Go forward
  globalShortcut.register("CommandOrControl+]", () => {
    if (win.webContents.canGoForward()) {
      win.webContents.goForward();
    }
  });

  // Navigate to URL from clipboard
  globalShortcut.register("CommandOrControl+L", () => {
    const clipboardText = clipboard.readText().trim();
    const urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
    if (urlPattern.test(clipboardText)) {
      // Ensure the URL has http:// or https:// prefix
      const url = clipboardText.startsWith("http")
        ? clipboardText
        : `https://${clipboardText}`;
      win.webContents.loadURL(url);
    }
  });
}

module.exports = {
  registerShortcuts,
};
