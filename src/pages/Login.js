import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import getEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabled: true,
      email: '',
      password: '',
    };
  }

  isButtonDisabled = () => {
    const { email, password } = this.state;

    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const valideEmail = regex.test(email);

    const FIVE = 5;
    console.log(password, email);
    if (password.length > FIVE && valideEmail) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.isButtonDisabled();
    });
    console.log(value);
  }

  render() {
    const { isDisabled, password, email } = this.state;
    const { getEm, history } = this.props;
    getEm(email);

    return (
      <div>
        <input
          type="text"
          data-testid="email-input"
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ () => history.push('/carteira') }
        >
          Entrar

        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEm: (email) => dispatch(getEmail(email)),
});

Login.propTypes = {
  getEm: propTypes.func.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
