// Coloque aqui suas actions
const getEmail = (payload) => ({
  type: 'GET_EMAIL', payload,
});

const getCurrencies = (payload) => ({
  type: 'GET_CURRENCIES', payload,
});

export const getExpenses = (payload) => ({
  type: 'GET_EXPENSES', payload,
});

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE', id,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const result = await response.json();
      dispatch(getCurrencies(result));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchCurrencyATM(payload) {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const result = await response.json();
      delete result.USDT;
      dispatch(getExpenses({ ...payload, exchangeRates: result }));
    } catch (error) {
      console.log(error);
    }
  };
}

export default getEmail;
