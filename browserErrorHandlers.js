// C:\Users\SHASHWAT TRIPATHI\Desktop\Placements\DebugSensei\src\browserErrorHandler.js
import { processError } from './errorProcessor.js';

function handleGlobalError(message, source, lineno, colno, error) {
  console.error('Global error handler:', { message, source, lineno, colno, error });

  // Process the error
  processError(error).then(result => {
    if (result) {
      console.error(`----------------------------------------------[Debug Sensei Response]------------------------------------------------------`);
      console.log(result);
    } else {
      console.error('Unable to determine cause.');
    }
  });
}

function handleGlobalRejection(event) {
  console.error('Unhandled rejection:', event.reason);

  // Process the rejection reason
  processError(event.reason).then(result => {
    if (result) {
      console.error(`Possible Cause: ${result.cause}`);
    } else {
      console.error('Unable to determine cause.');
    }
  });
}

export function setupBrowserErrorHandling() {
  // Set up global error handlers
  window.onerror = handleGlobalError;
  window.onunhandledrejection = handleGlobalRejection;
}
