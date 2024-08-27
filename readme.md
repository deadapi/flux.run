# serve-og

A server that serves files and mocks you when things go wrong. Because why not?

## Overview

`serve-og` is a lightweight Node.js server designed for serving HTML files locally. Ideal for development and testing, this package allows you to quickly set up a local server that serves static HTML files from a specified directory.

## Features

- Serve an HTML file from a specified directory
- Configuration
- Basic security with Helmet
- Request logging with Morgan

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. **Install the package**:
```bash
   npm install serve-og
```
   This command will automatically install all dependencies, including `nodemon` for development.

### Default Configuration

By default, the server is configured with:

- **Port**: `3000`
- **Directory**: `src`
- **File**: `index.html`
- **Server Name**: `Local Server`

These can be overridden by specifying environment variables when starting the server.

### Usage[with default config]

1. **Run the Server in Development Mode**:

   - Use the following command to start the server:
```bash
   serve.dev 
```

2. **Run the Server in Production Mode**:

   - Use the following command to start the server:
```bash
    serve.prod
```


### Environment Variables[custom deployment]

You can customize the server behavior by setting environment variables. The following variables are available:

- `PORT`: Port number for the server (default is 3000).
- `DIRECTORY`: Directory containing the HTML file (default is `src`).
- `FILE`: HTML file to serve (default is `index.html`).
- `SERVER_NAME`: Name of the server (default is "Local Server").

To use environment variables, you can set them inline with the command or create a `.env` file in the project root.

**Example with environment variables:**
```bash
   PORT=4000 
   DIRECTORY=public 
   FILE=sample.html 
   SERVER_NAME="My Server" 
```
```bash
   serve.dev
```
### Manually Restarting the Server

While nodemon is running, you can manually restart the server by typing `rs` in the terminal.

### Example Output

When you run the server with nodemon, you should see output similar to the following:
```bash
- `> serve-og@1.0.0 start`
- `> nodemon scripts/server.js test sample.html test`
- `[nodemon] 3.1.4`
- `[nodemon] to restart at any time, enter rs`
- `[nodemon] watching path(s): *.*`
- `[nodemon] watching extensions: js,mjs,cjs,json`
- `[nodemon] starting node scripts/server.js test sample.html test`
- `Local Server running at http://localhost:3000`
- `Serving "index.html" from "src"`
```

### Notes

- The `index.html` file should be placed in the `src` folder (if running default).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
