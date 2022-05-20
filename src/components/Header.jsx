import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styles from '../styles/Header.module.css';
import moneyIcon from '../images/payments_FILL0_wght400_GRAD0_opsz48.svg'

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const updatedTotal = expenses.reduce((acc, curr) => {
      const currencyValue = Number(curr.exchangeRates[curr.currency].ask);
      const spentValue = Number(curr.value) * currencyValue;
      acc += spentValue;
      return acc;
    }, 0);
    return (
      <div className={ styles.header }>
        <div>
          <img src={ moneyIcon} alt='money icon' />
        </div>
        <div className= {styles.userHeaderInfo }>
          <h3 data-testid="email-field">{ `Email: ${email}` }</h3>
          <p data-testid="total-field">{ `Despesa Total: ${updatedTotal.toFixed(2)}` }</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.arrayOf(propTypes.any).isRequired,
};

export default connect(mapStateToProps)(Header);
