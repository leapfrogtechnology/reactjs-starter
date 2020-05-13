import React, { Suspense } from 'react';
import Router from './Router';

import ErrorBoundary from './common/errors/ErrorBoundary';
import Loading from './common/loading/Loading';

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
