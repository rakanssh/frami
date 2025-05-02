# Frami

A simple, clean Electron-based browser application designed for broadcasting software integration.
Features a content-only window ready for capture, and a set of keyboard shortcuts to control it.
Navigation and resizing uses the value currently in clipboard.

## Usage

### Keyboard Shortcuts

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

## Installation

#### From Release

1. Download the latest release for your platform from the [releases page](https://github.com/username/frami/releases)
2. Extract the archive (if applicable)
3. Run/Install the application

### From Source

- [Node.js](https://nodejs.org/) v22
- npm

1. Clone the repository:

   ```bash
   git clone https://github.com/username/frami.git
   cd frami
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the application:

   ```bash
   npm run build
   ```

4. Find the built files for your platform in /dist

## Development

### Setup

```bash
npm install
```

## Run

```bash
npm start
```
