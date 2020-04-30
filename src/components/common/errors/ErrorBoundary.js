import React, { Component } from 'react';

import * as sentry from 'utils/sentry';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    sentry.catchErrorsWithScope(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>We're sorry — something went wrong.</p>
          <p>Our team has been notified.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
