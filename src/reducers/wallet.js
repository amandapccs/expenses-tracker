// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'GET_EXPENSES':
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
}
