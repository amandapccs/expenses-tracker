// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_EMAIL':
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
