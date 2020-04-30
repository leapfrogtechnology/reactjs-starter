import React from 'react';
import Router from './Router';

import ErrorBoundary from './common/errors/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
};

export default App;
