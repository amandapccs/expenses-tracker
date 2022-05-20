import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyATM } from '../actions';
import styles from '../styles/WalletForm.module.css';

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
        <form className={ styles.mainForm }>
          <label htmlFor="value">
            Valor da despesa:
            <input
              type="number"
              id="value"
              data-testid="value-input"
              onChange={ this.handleChange }
              name="value"
              value={ value }
            />
          </label>

          <label htmlFor="moeda">
            Moeda:
            <select
              id="moeda"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              { currencies.map((curr) => <option key={ curr }>{ curr }</option>) }
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento:
            <select
              id="method"
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria:
            <select
              id="tag"
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
          </label>

          <label htmlFor="description">
            Decrição:
            <input
              type="text"
              id="description"
              data-testid="description-input"
              placeholder="Descrição"
              onChange={ this.handleChange }
              name="description"
              value={ description }
            />
          </label>
          <button
            type="button"
            onClick={ () => {
              fetchCurrATM(expensesInfo);
              this.setState({ value: '' });
            } }
          >
            Adicionar despesa

          </button>
        </form>

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
