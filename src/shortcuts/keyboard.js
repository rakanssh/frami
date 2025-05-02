const { globalShortcut, clipboard } = require("electron");

/**
 * Register global keyboard shortcuts
 * @param {BrowserWindow} win - The browser window to apply shortcuts to
 */
function registerShortcuts(win) {
  // Toggle dev tools
  globalShortcut.register("CommandOrControl+Shift+I", () => {
    win.webContents.toggleDevTools({
      mode: "detach",
      defaultInspectedElement: "console",
    });
  });

  // Reload the page
  globalShortcut.register("CommandOrControl+Shift+R", () => {
    win.webContents.reload();
  });

  // Go back
  globalShortcut.register("CommandOrControl+Shift+[", () => {
    if (win.webContents.navigationHistory.canGoBack()) {
      win.webContents.navigationHistory.goBack();
    }
  });

  // Go forward
  globalShortcut.register("CommandOrControl+Shift+]", () => {
    if (win.webContents.navigationHistory.canGoForward()) {
      win.webContents.navigationHistory.goForward();
    }
  });

  // Navigate to URL from clipboard
  globalShortcut.register("CommandOrControl+Shift+L", () => {
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
