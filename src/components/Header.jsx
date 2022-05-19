import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

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
      <div>
        <h3 data-testid="email-field">{ email }</h3>
        <p data-testid="total-field">{ updatedTotal.toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
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
