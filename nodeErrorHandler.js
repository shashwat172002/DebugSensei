// C:\Users\SHASHWAT TRIPATHI\Desktop\Placements\DebugSensei\src\nodeErrorHandler.js
import { processError } from './errorProcessor.js';

function handleError(error) {
    processError(error).then(result => {
        if (result) {
            console.log("           ");
            console.error(`----------------------------------------------[Debug Sensei Response]------------------------------------------------------`);
            console.log(result);
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

export function setupNodeErrorHandling() {
    process.on('uncaughtException', handleError);
    process.on('unhandledRejection', handleRejection);
}
