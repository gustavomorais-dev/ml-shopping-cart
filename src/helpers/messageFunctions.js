const productsSection = document.getElementsByClassName('products')[0];

export const showLoading = () => {
  const load = document.createElement('h1');
  load.innerHTML = 'Carregando...';
  load.className = 'loading';
  productsSection.appendChild(load);
};

export const hideLoading = () => {
  const load = document.getElementsByClassName('loading')[0];
  if (load) load.remove();
};

export const showError = () => {
  const error = document.createElement('h1');
  error.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  error.className = 'error';
  productsSection.appendChild(error);
};

export const hideError = () => {
  const error = document.getElementsByClassName('error')[0];
  if (error) error.remove();
};
