export const showLoading = () => {
  document.getElementById('devtinderLoadingModal').classList.add('modal-open');
};

export const hideLoading = () => {
  document.getElementById('devtinderLoadingModal').classList.remove('modal-open');
};
