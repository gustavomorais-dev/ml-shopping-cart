const input = document.getElementsByClassName('cep-input')[0];
const show = document.getElementsByClassName('cart__address')[0];

export const getAddress = async (query) => {
  const cepLength = 8;
  if (!query || query.length !== cepLength) return 'Termo de busca não informado';
  try {
    const promise1 = await fetch(`https://cep.awesomeapi.com.br/json/${query}`);
    const promise2 = await fetch(`https://brasilapi.com.br/api/cep/v2/${query}`);
    console.log(promise1);
    console.log(promise2);
    const data = await Promise.any([promise1, promise2])
      .then((response) => response.json());
    const addressType = data.address_type;
    const addressName = data.address_name;
    const { district, city, state } = data;
    return `${addressType} ${addressName} - ${district} - ${city} - ${state}`;
  } catch (error) {
    return 'CEP não encontrado';
  }
};

export const searchCep = async () => {
  const address = await getAddress(input.value);
  show.innerHTML = address;
};
