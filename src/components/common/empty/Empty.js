import React from 'react';

import { emptyScreen } from 'assets/images';

const Empty = ({ message }) => {
  return (
    <div className="empty-screen">
      <img src={emptyScreen} alt="no-data" />
      <p className="mt-10">{message}</p>
    </div>
  );
};

Empty.defaultProps = {
  message: 'No data to show.',
};

export default Empty;
