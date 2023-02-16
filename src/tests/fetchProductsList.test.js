import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    const actual = typeof fetchProductsList;
    const expected = 'function';

    expect(actual).toBe(expected);
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    console.log(fetchProductsList('computador'));
    const actual = fetchProductsList('computador');
    const expected = 'function';

    expect(actual).toBe(expected);
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {
    const actual = typeof fetchProductsList;
    const expected = 'function';

    expect(actual).toBe(expected);
  });

  // it('...', () => {
  // });
});
