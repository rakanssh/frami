# Frami

A simple, clean Electron-based browser application designed for broadcasting software integration. Features a frameless window locked to its launch resolution.

## Keyboard Shortcuts

| Shortcut         | Description                    |
| ---------------- | ------------------------------ |
| `⌘/Ctrl+Shift+I` | Toggle Developer Tools         |
| `⌘/Ctrl+Shift+R` | Reload the page                |
| `⌘/Ctrl+Shift+[` | Go back in history             |
| `⌘/Ctrl+Shift+]` | Go forward in history          |
| `⌘/Ctrl+Shift+L` | Navigate to URL from clipboard |

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
