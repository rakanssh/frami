import { clipboard, BrowserWindow } from "electron";
// @ts-ignore
import localShortcut from "electron-localshortcut";

/**
 * Register global keyboard shortcuts
 * @param win - The browser window to apply shortcuts to
 */
export function registerShortcuts(win: BrowserWindow) {
  // Toggle dev tools
  localShortcut.register(win, "CommandOrControl+Shift+I", () => {
    win.webContents.toggleDevTools();
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

    let urlToCheck = clipboardText;
    try {
      // If no protocol is specified, try with https://
      if (
        !urlToCheck.startsWith("http://") &&
        !urlToCheck.startsWith("https://")
      ) {
        urlToCheck = "https://" + urlToCheck;
      }

      new URL(urlToCheck);

      win.webContents.loadURL(urlToCheck);
    } catch (e) {
      win.webContents.executeJavaScript(
        `console.log("Invalid URL from clipboard: ${urlToCheck}")`
      );
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
