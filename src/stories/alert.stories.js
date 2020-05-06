import React from 'react';
import { Button } from '@storybook/react/demo';

import Alert from '../components/common/alert';

export const AlertView = () => (
  <div>
    <Button
      onClick={() =>
        Alert.fire({
          title: <p>Hello World</p>,
        })
      }
    >
      Simple
    </Button>
    <Button
      onClick={() =>
        Alert.fire({
          icon: 'success',
          title: <p>Success</p>,
          footer: 'React Starter',
        })
      }
    >
      Success
    </Button>
    <Button
      onClick={() =>
        Alert.fire({
          icon: 'error',
          title: <p>Error</p>,
          footer: 'React Starter',
        })
      }
    >
      Error
    </Button>
    <Button
      onClick={() =>
        Alert.fire({
          title: 'Are you sure?',
          text: 'You can update this later.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirm',
        }).then(result => {
          if (result.value) {
            Alert.fire('Confirmed', 'Your application has been submitted.', 'success');
          }
        })
      }
    >
      Confirmation
    </Button>
    <Button
      onClick={() =>
        Alert.fire({
          position: 'top-end',
          html: `<p style="color: white;">Your work has been saved</p>`,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          backdrop: 'transparent',
          background: '#3085d6',
        })
      }
    >
      Custom positioned dialog
    </Button>
  </div>
);

export default {
  title: 'Alert',
  component: AlertView,
};
