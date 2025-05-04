import { BrowserWindow, Menu, MenuItem, clipboard } from "electron";
import { googleUrl } from "../config/urls";
import path from "path";

/**
 * Creates and returns the main application window
 */
export function createMainWindow(): BrowserWindow {
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

  // Prevent new window creation
  win.webContents.setWindowOpenHandler(({ url }) => {
    win.loadURL(url);
    return { action: "deny" };
  });

  // Set up context menu
  win.webContents.on("context-menu", (event, params) => {
    const menu = new Menu();

    if (params.linkURL) {
      menu.append(
        new MenuItem({
          label: "Open Link in New Window",
          click: () => {
            win.webContents.loadURL(params.linkURL);
          },
        })
      );
      menu.append(
        new MenuItem({
          label: "Copy Link Address",
          click: () => {
            clipboard.writeText(params.linkURL);
          },
        })
      );
      menu.append(new MenuItem({ type: "separator" }));
    }

    if (params.selectionText) {
      menu.append(new MenuItem({ label: "Copy", role: "copy" }));
      menu.append(new MenuItem({ label: "Cut", role: "cut" }));
      menu.append(new MenuItem({ type: "separator" }));
    }

    if (params.isEditable) {
      menu.append(new MenuItem({ label: "Paste", role: "paste" }));
      menu.append(new MenuItem({ type: "separator" }));
    }

    menu.append(
      new MenuItem({
        label: "Back",
        click: () => {
          if (win.webContents.canGoBack()) {
            win.webContents.goBack();
          }
        },
      })
    );
    menu.append(
      new MenuItem({
        label: "Forward",
        click: () => {
          if (win.webContents.canGoForward()) {
            win.webContents.goForward();
          }
        },
      })
    );
    menu.append(
      new MenuItem({
        label: "Reload",
        click: () => {
          win.webContents.reload();
        },
      })
    );

    menu.popup();
  });

  return win;
}
