import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { showLoading, hideLoading } from './helpers/messageFunctions';
import { saveCartID } from './helpers/cartFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const productsSection = document.getElementsByClassName('products')[0];
const cartProducts = document.getElementsByClassName('cart__products')[0];

const addProduct = async (event) => {
  const productId = event.target.parentNode.firstChild.innerText;
  saveCartID(productId);
  const productDetails = await fetchProduct(productId);
  const { id, title, price, pictures } = productDetails;
  const newCartElement = createCartProductElement({ id, title, price, pictures });
  cartProducts.appendChild(newCartElement);
};

const listProducts = async () => {
  showLoading();
  const productsList = await fetchProductsList('computador');
  hideLoading();
  productsList.forEach((p) => {
    const { id, title, thumbnail, price } = p;
    const product = createProductElement({ id, title, thumbnail, price });
    product.addEventListener('click', addProduct);
    productsSection.appendChild(product);
  });
};

listProducts();
