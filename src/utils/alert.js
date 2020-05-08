import Alert from '../components/common/alert';

export function warning({ title, text, buttonText, preConfirm }) {
  Alert.fire({
    icon: 'warning',
    title,
    text,
    showCancelButton: true,
    confirmButtonText: buttonText,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    preConfirm,
  });
}
