// C:\Users\SHASHWAT TRIPATHI\Desktop\Placements\DebugSensei\src\ErrorBoundary.js
import React, { Component } from 'react';
import { processError } from './errorProcessor.js';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorMsg: '' // Add this line to the state
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by boundary:', error);
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });

    processError(error).then(result => {
      if (result) {
        console.log("           ");
        console.error(`----------------------------------------------[Debug Sensei Response]------------------------------------------------------`);
        console.log(result);
        this.setState({ errorMsg: result }); // Update state with the result
      } else {
        console.error('Unable to determine cause.');
      }
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Error: Check console for errors causes and solution</h1>
          
        </div>
      );
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;
