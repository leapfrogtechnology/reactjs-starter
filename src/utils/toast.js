import 'izitoast/dist/css/iziToast.css';

import iziToast from 'izitoast';

iziToast.settings({
  timeout: 6000,
  resetOnHover: true,
  progressBar: false,
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOutDown',
  position: 'bottomCenter',
  displayMode: 'replace',
});

export function success({ title, message }) {
  iziToast.success({
    title,
    message,
  });
}

export function error({ title, message }) {
  iziToast.error({
    title,
    message,
  });
}

export function warning({ title = '', message }) {
  iziToast.warning({
    title,
    message,
  });
}
