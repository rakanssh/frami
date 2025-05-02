const { clipboard } = require("electron");
const localShortcut = require("electron-localshortcut");

/**
 * Register global keyboard shortcuts
 * @param {BrowserWindow} win - The browser window to apply shortcuts to
 */
function registerShortcuts(win) {
  // Toggle dev tools
  localShortcut.register(win, "CommandOrControl+Shift+I", () => {
    win.webContents.toggleDevTools({
      mode: "detach",
      defaultInspectedElement: "console",
    });
  });

  // Reload the page
  localShortcut.register(win, "CommandOrControl+R", () => {
    win.webContents.reload();
  });

  // Go back
  localShortcut.register(win, "CommandOrControl+[", () => {
    if (win.webContents.navigationHistory.canGoBack()) {
      win.webContents.navigationHistory.goBack();
    }
  });

  // Go forward
  localShortcut.register(win, "CommandOrControl+]", () => {
    if (win.webContents.navigationHistory.canGoForward()) {
      win.webContents.navigationHistory.goForward();
    }
  });

  // Zoom in
  localShortcut.register(win, "CommandOrControl+=", () => {
    win.webContents.zoomFactor += 0.1;
  });

  // Zoom out
  localShortcut.register(win, "CommandOrControl+-", () => {
    win.webContents.zoomFactor -= 0.1;
  });

  // Reset zoom
  localShortcut.register(win, "CommandOrControl+0", () => {
    win.webContents.zoomFactor = 1;
  });

  // Navigate to URL from clipboard
  localShortcut.register(win, "CommandOrControl+L", () => {
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

  // Set window width from clipboard
  localShortcut.register(win, "CommandOrControl+Shift+W", () => {
    const clipboardText = clipboard.readText().trim();
    const width = parseInt(clipboardText, 10);
    if (!isNaN(width) && width > 0) {
      const [, height] = win.getSize();
      win.setSize(width, height);
    }
  });

  // Set window height from clipboard
  localShortcut.register(win, "CommandOrControl+Shift+H", () => {
    const clipboardText = clipboard.readText().trim();
    const height = parseInt(clipboardText, 10);
    if (!isNaN(height) && height > 0) {
      const [width] = win.getSize();
      win.setSize(width, height);
    }
  });
}

module.exports = {
  registerShortcuts,
};
