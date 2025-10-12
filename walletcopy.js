function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('copyToast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }).catch(err => {
    console.error('Ошибка копирования: ', err);
  });
}