import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies, fetchCurrencyATM } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies, fetchCurrATM } = this.props;
    const { value, currency, method, tag, description } = this.state;
    const expenses = { value, description, currency, method, tag };
    return (
      <div>
        <Header />
        <form>
          <input
            type="number"
            data-testid="value-input"
            placeholder="Valor da Despesa"
            onChange={ this.handleChange }
            name="value"
            value={ value }
          />

          <label htmlFor="moeda">
            Moeda
            <select
              id="moeda"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              { currencies.map((curr) => <option key={ curr }>{ curr }</option>) }
            </select>
          </label>

          <select
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          <select
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <input
            type="text"
            data-testid="description-input"
            placeholder="Descrição"
            onChange={ this.handleChange }
            name="description"
            value={ description }
          />
        </form>

        <button
          type="button"
          onClick={ () => {
            fetchCurrATM(expenses);
            this.setState({ value: '' });
          } }
        >
          Adicionar despesa

        </button>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencies()),
  fetchCurrATM: (expenses) => dispatch(fetchCurrencyATM(expenses)),
});

Wallet.propTypes = {
  currencies: propTypes.arrayOf(propTypes.any).isRequired,
  fetchCurrency: propTypes.func.isRequired,
  fetchCurrATM: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
