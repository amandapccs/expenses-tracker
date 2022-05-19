// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  edit: false,
  currentEdit: {},
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((curr) => curr !== 'USDT'),
    };
  case 'GET_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  case 'REMOVE_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== action.id)],
    };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      edit: true,
      currentEdit: action.expItem,
    };
  case 'UPDATE_EXPENSE':
    return {
      ...state,
      edit: false,
      currentEdit: {},
      expenses: state.expenses.map((exp) => {
        if (exp.id === action.payload.id) return action.payload;
        return exp;
      }),
    };
  default:
    return state;
  }
}
