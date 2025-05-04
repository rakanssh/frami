import { app, BrowserWindow } from "electron";
import { createMainWindow } from "./windows/mainWindow";
import { registerShortcuts } from "./shortcuts/keyboard";

let mainWindow: BrowserWindow;

function initApp() {
  mainWindow = createMainWindow();
  registerShortcuts(mainWindow);
}

app.whenReady().then(() => {
  initApp();

  // Re-create window on macOS when dock icon is clicked
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      initApp();
    }
  });
});

// Quit the app when all windows are closed (except on macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
