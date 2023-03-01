/**
 * Função que retorna todos os itens do carrinho salvos no localStorage.
 * @returns {Array} Itens de ids salvos do carrinho ou array vazio.
 */
export const getSavedCartIDs = () => {
  const cartProducts = localStorage.getItem('cartProducts');
  return cartProducts ? JSON.parse(cartProducts) : [];
};

/**
 * Função que adiciona um product ao carrinho.
 * @param {string} id - ID do product a ser adicionado.
 */
export const saveCartID = (id) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const cartProducts = getSavedCartIDs();
  const newCartProducts = [...cartProducts, id];
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
};

// Função que atualiza o preço do subtotal

export const updatePrice = () => {
  const price = document.getElementsByClassName('total-price')[0];
  const cartProductsContainer = document.getElementsByClassName('cart__products')[0];
  const listOfProducts = cartProductsContainer.childNodes;
  let sum = 0;
  listOfProducts.forEach((product) => {
    const prPrice = product.getElementsByClassName('product__price__value')[0].innerText;
    sum += parseFloat(prPrice);
  });
  price.innerText = sum;
};

/**
 * Função que remove um product do carrinho.
 * @param {string} id - ID do product a ser removido.
 */
export const removeCartID = (id) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const cartProducts = [...getSavedCartIDs()];
  const indexProduct = cartProducts.indexOf(id);
  cartProducts.splice(indexProduct, 1);
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  updatePrice();
};
