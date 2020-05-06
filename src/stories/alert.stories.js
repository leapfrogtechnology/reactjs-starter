import React from 'react';
import { Button } from '@storybook/react/demo';

import Alert from '../components/common/alert';

export const AlertContainer = () => (
  <Button
    onClick={() =>
      Alert.fire({
        icon: 'success',
        title: <p>Hello World</p>,
        footer: 'React Starter',
      })
    }
  >
    Simple
  </Button>
);

export default {
  title: 'Alert',
  component: AlertContainer,
};
