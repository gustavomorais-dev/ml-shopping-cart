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
