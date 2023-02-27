import { showError, hideError } from './messageFunctions';

export const fetchProduct = async (id) => {
  hideError();
  if (!id) throw new Error('ID não informado');
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    showError();
  }
};

export const fetchProductsList = async (query) => {
  hideError();
  if (!query) throw new Error('Termo de busca não informado');
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    showError();
  }
};
