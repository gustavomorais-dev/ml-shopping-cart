import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { showLoading, hideLoading } from './helpers/messageFunctions';
import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const productsSection = document.getElementsByClassName('products')[0];
const cartProductsContainer = document.getElementsByClassName('cart__products')[0];

const recoverCart = () => {
  const productsIds = getSavedCartIDs();
  const products = productsIds.map(async (id) => {
    const details = await fetchProduct(id);
    return details;
  });
  Promise.all(products).then((list) => {
    list.forEach((productDetails) => {
      const { id, title, price, pictures } = productDetails;
      const newCartElement = createCartProductElement({ id, title, price, pictures });
      cartProductsContainer.appendChild(newCartElement);
    });
  });
};

const addProduct = async (event) => {
  const productId = event.target.parentNode.firstChild.innerText;
  saveCartID(productId);
  const productDetails = await fetchProduct(productId);
  const { id, title, price, pictures } = productDetails;
  const newCartElement = createCartProductElement({ id, title, price, pictures });
  cartProductsContainer.appendChild(newCartElement);
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
recoverCart();
