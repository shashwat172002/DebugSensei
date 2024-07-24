
# DebugSensei
`DebugSensei` is an npm package designed to detect errors in MERN (MongoDB, Express, React, Node.js) stack applications. It uses Artificial Intelligence to analyze errors and provide possible causes and solutions. The package includes functionality for both backend (Node.js) and frontend (React) error handling.

## Features

- Global error handling for Node.js
- Global error handling for browsers
- React Error Boundary component
- Integration with Artificial Intelligence for error analysis

## Installation

Install the package using npm:

```sh
npm install debugsensei
```

## Setup

### Backend (Node.js)

1. **Setup Global Error Handlers:**

   ```js
   // index.js or your main server file
   import { setupNodeErrorHandling } from 'debugsensei';

   setupNodeErrorHandling();
   ```

2. **Example Usage:**

   ```js
   // server.js
   import express from 'express';
   import { setupNodeErrorHandling } from 'debugsensei';

   const app = express();
   setupNodeErrorHandling();

   // Example errors for testing
   eval('let a = ;'); // SyntaxError
   null.f(); // TypeError
   let arr = new Array(-1); // RangeError
   decodeURIComponent('%'); // URIError

   app.listen(3000, () => {
     console.log('Server running on port 3000');
   });
   ```

### Frontend (React)

1. **Setup Global Error Handlers:**

   ```js
   // index.js or your main entry file
   import { setupBrowserErrorHandling } from 'debugsensei';

   setupBrowserErrorHandling();
   ```

2. **Using the ErrorBoundary Component:**

   ```js
   // App.js or a root component file
   import React from 'react';
   import { ErrorBoundary } from 'debugsensei';

   function App() {
     return (
       <ErrorBoundary>
         <YourComponent />
       </ErrorBoundary>
     );
   }

   export default App;
   ```

### Link Package Locally

To test the package locally:

1. **Link the package:**

   ```sh
   cd path/to/DebugSensei
   npm link
   ```

2. **Link it in your project:**

   ```sh
   cd path/to/your/project
   npm link debugsensei
   ```

## Contributing

Feel free to submit issues or pull requests.

---
