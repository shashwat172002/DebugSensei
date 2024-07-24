import { processError } from './errorProcessor.js';

function handleError(error) {
    // console.error('Caught exception:', error);
    processError(error).then(result => {
        if (result) {
            console.log("           ");
            console.error(`----------------------------------------------[Debug Sensei Response]------------------------------------------------------`);
            console.log(result)
        } else {
            console.error('Unable to determine cause.');
        }
    });
}

function handleRejection(reason) {
    console.error('Unhandled rejection:', reason);
    processError(reason).then(result => {
        if (result) {
            console.error(`Possible Cause: ${result.cause}`);
        } else {
            console.error('Unable to determine cause.');
        }
    });
}


    process.on('uncaughtException', handleError);
    process.on('unhandledRejection', handleRejection);


    // function handleGlobalError(message, source, lineno, colno, error) {
    //     console.error('Global error handler:', { message, source, lineno, colno, error });
      
    //     // Call the processError function and handle the result
    //     processError(error).then(result => {
    //       if (result) {
    //         console.error(`----------------------------------------------[AI-GEMINI RESPONSE]------------------------------------------------------`);
    //         console.log(result);
    //       } else {
    //         console.error('Unable to determine cause.');
    //       }
    //     });
    //   }
      
    //   function handleGlobalRejection(event) {
    //     console.error('Unhandled rejection:', event.reason);
      
    //     // Call the processError function and handle the result
    //     processError(event.reason).then(result => {
    //       if (result) {
    //         console.error(`----------------------------------------------[AI-GEMINI RESPONSE]------------------------------------------------------`);
    //         console.log(result);
    //       } else {
    //         console.error('Unable to determine cause.');
    //       }
    //     });
    //   }
      
    //   // Set up the global error handlers
    //   window.onerror = handleGlobalError;
    //   window.onunhandledrejection = handleGlobalRejection;


      undefinedfunc();