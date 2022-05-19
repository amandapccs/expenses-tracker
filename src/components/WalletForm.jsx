import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyATM } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies, fetchCurrATM } = this.props;
    const { value, currency, method, tag, description } = this.state;
    const expensesInfo = { value, description, currency, method, tag };
    return (
      <div>
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
            fetchCurrATM(expensesInfo);
            this.setState({ value: '' });
          } }
        >
          Adicionar despesa

        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrATM: (expenses) => dispatch(fetchCurrencyATM(expenses)),
});

WalletForm.propTypes = {
  currencies: propTypes.arrayOf(propTypes.any).isRequired,
  fetchCurrATM: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
