import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <div>
        <h3 data-testid="email-field">{ email }</h3>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>

        <form>
          <input type="number" data-testid="value-input" placeholder="Valor da Despesa" />

          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              { currencies.map((curr) => <option key={ curr }>{ curr }</option>) }
            </select>
          </label>

          <select data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          <select data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <input type="text" data-testid="description-input" placeholder="Descrição" />
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  email: propTypes.string.isRequired,
  currencies: propTypes.arrayOf(propTypes.any).isRequired,
  fetchCurrency: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
