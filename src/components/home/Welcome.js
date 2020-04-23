import React from 'react';

import { withAuthState } from '../hoc/auth';

const Welcome = ({ loggedInUser }) => {
  return <div>Welcome {loggedInUser.email}</div>;
};

export default withAuthState(Welcome);
