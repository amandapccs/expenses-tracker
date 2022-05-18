// Coloque aqui suas actions
const getEmail = (payload) => ({
  type: 'GET_EMAIL', payload,
});

const getCurrencies = (payload) => ({
  type: 'GET_CURRENCIES', payload,
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

export default getEmail;
