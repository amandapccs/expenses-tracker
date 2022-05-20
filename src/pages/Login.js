import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import getEmail from '../actions';
import loginImage from '../images/login-image.svg';
import styles from '../styles/Login.module.css';

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
  }

  render() {
    const { isDisabled, password, email } = this.state;
    const { getUserEmail, history } = this.props;

    return (
      <section className={ styles.login }>

        <div className={ styles.loginDiv}>
          <form>
            <h1>Faça seu login</h1>
            <label htmlFor="email">
              Seu email
            </label>
            <input
              id="email"
              type="text"
              data-testid="email-input"
              placeholder="seu-email@exemplo.com"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
            <label htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              type="password"
              data-testid="password-input"
              placeholder="digite sua senha"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
            <button
              type="button"
              disabled={ isDisabled }
              onClick={ () => {
                getUserEmail(email);
                history.push('/carteira');
              } }
            >
              Entrar

            </button>
          </form>
          <img src={loginImage} alt="login" className= { styles.loginImage } />
        </div>

      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserEmail: (email) => dispatch(getEmail(email)),
});

Login.propTypes = {
  getUserEmail: propTypes.func.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
