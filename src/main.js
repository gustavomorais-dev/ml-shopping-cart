import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const productsSection = document.getElementsByClassName('products')[0];

const listProducts = async () => {
  const productsList = await fetchProductsList('computador');
  productsList.forEach((p) => {
    const { id, title, thumbnail, price } = p;
    const product = createProductElement({ id, title, thumbnail, price });
    productsSection.appendChild(product);
  });
};

listProducts();
