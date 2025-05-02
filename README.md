# Frami

A simple, clean Electron-based browser application designed for broadcasting software integration.
Features a content-only window ready for capture, and a set of keyboard shortcuts to control it.
Navigation and resizing uses the value currently in clipboard.

## Keyboard Shortcuts

| Shortcut         | Description                      |
| ---------------- | -------------------------------- |
| `⌘/Ctrl+Shift+I` | Toggle Developer Tools           |
| `⌘/Ctrl+R`       | Reload the page                  |
| `⌘/Ctrl+[`       | Go back in history               |
| `⌘/Ctrl+]`       | Go forward in history            |
| `⌘/Ctrl+=`       | Zoom in                          |
| `⌘/Ctrl+-`       | Zoom out                         |
| `⌘/Ctrl+0`       | Reset zoom                       |
| `⌘/Ctrl+L`       | Navigate to URL from clipboard   |
| `⌘/Ctrl+Shift+W` | Set window width from clipboard  |
| `⌘/Ctrl+Shift+H` | Set window height from clipboard |

## Project Structure

```
project-root/
├── src/
│   ├── main.js           # Application entry point
│   ├── windows/          # Window management
│   │   └── mainWindow.js
│   ├── shortcuts/        # Keyboard shortcuts
│   │   └── keyboard.js
│   └── config/           # Configuration files
│       └── urls.js
├── package.json
└── README.md
```

## Development

### Setup

```bash
npm install
```

### Run

```bash
npm start
```

### Build

```bash
npm run build
```
