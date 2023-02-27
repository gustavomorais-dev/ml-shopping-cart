import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { showLoading, hideLoading } from './helpers/messageFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const productsSection = document.getElementsByClassName('products')[0];

const listProducts = async () => {
  showLoading();
  const productsList = await fetchProductsList('computador');
  hideLoading();
  productsList.forEach((p) => {
    const { id, title, thumbnail, price } = p;
    const product = createProductElement({ id, title, thumbnail, price });
    productsSection.appendChild(product);
  });
};

listProducts();
