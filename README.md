# DebugSensei
DebugSensei is an npm package designed to detect errors in MERN (MongoDB, Express, React, Node.js) stack applications. It uses Gemini AI to analyze errors and provide possible causes and solutions. The package includes functionality for both backend (Node.js) and frontend (React) error handling.

## Features

- Global error handling for Node.js
- Global error handling for browsers
- React Error Boundary component
- Integration with Gemini AI for error analysis

## Installation

Install the package using npm:

```sh
npm install debug-sensei
```

## Setup

### Backend (Node.js)

1. **Setup Global Error Handlers:**

```js
// index.js or your main server file
import { setupNodeErrorHandling } from 'debug-sensei';

setupNodeErrorHandling();
```

2. **Example:**

```js
// server.js
import express from 'express';
import { setupNodeErrorHandling } from 'debug-sensei';

const app = express();
setupNodeErrorHandling();

app.get('/', (req, res) => {
  throw new Error('Test Error');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Frontend (React)

1. **Setup Global Error Handlers:**

```js
// index.js or your main entry file
import { setupBrowserErrorHandling } from 'debug-sensei';

setupBrowserErrorHandling();
```

2. **Using the ErrorBoundary Component:**

```js
// App.js or a root component file
import React from 'react';
import { ErrorBoundary } from 'debug-sensei';

function App() {
  return (
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
  );
}

export default App;
```

## Usage

### Backend (Node.js)

1. **Handling Global Errors:**

The `setupNodeErrorHandling` function sets up global error handlers for `uncaughtException` and `unhandledRejection`.

2. **Error Handling Example:**

```js
// server.js
import express from 'express';
import { setupNodeErrorHandling } from 'debug-sensei';

const app = express();
setupNodeErrorHandling();

app.get('/', (req, res) => {
  throw new Error('Test Error');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Frontend (React)

1. **Handling Global Errors:**

The `setupBrowserErrorHandling` function sets up global error handlers for `window.onerror` and `window.onunhandledrejection`.

2. **Using the ErrorBoundary Component:**

The `ErrorBoundary` component catches errors in the React component tree and displays a fallback UI.

```js
// App.js
import React from 'react';
import { ErrorBoundary } from 'debug-sensei';

function App() {
  return (
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
  );
}

export default App;
```

## Example Code

### Node.js Example

```js
// server.js
import express from 'express';
import { setupNodeErrorHandling } from 'debug-sensei';

const app = express();
setupNodeErrorHandling();

app.get('/', (req, res) => {
  throw new Error('Test Error');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### React Example

```js
// App.js
import React from 'react';
import { ErrorBoundary, setupBrowserErrorHandling } from 'debug-sensei';

setupBrowserErrorHandling();

function App() {
  return (
    <ErrorBoundary>
      <YourComponent />
    </ErrorBoundary>
  );
}

export default App;
```

## Testing

### Backend (Node.js)

Run the Node.js server:

```sh
node server.js
```

### Frontend (React)

Run the React development server:

```sh
npm start
```

### Link Package Locally

To link the package locally for testing:

1. **Link the package:**

```sh
cd path/to/DebugSensei
npm link
```

2. **Link it in your project:**

```sh
cd path/to/your/project
npm link debug-sensei
```

## Contributing

Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.

---

This README provides an overview of how to set up and use the DebugSensei package, both for backend Node.js and frontend React applications. It also includes commands for linking the package locally for testing.