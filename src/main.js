const { app, BrowserWindow } = require("electron");
const { createMainWindow } = require("./windows/mainWindow");
const { registerShortcuts } = require("./shortcuts/keyboard");

// Enable hot reloading in development mode
if (process.env.NODE_ENV === "development") {
  try {
    require("electron-reloader")(module, {
      watchRenderer: true,
      ignore: [/node_modules|[\/\\]\./],
    });
    console.log("Hot reloading enabled");
  } catch (err) {
    console.error("Error enabling hot reload:", err);
  }
}

let mainWindow;

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
