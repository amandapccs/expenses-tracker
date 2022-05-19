import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateExpense } from '../actions';

class EditForm extends React.Component {
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

  componentDidMount() {
    const { currentEdit } = this.props;
    this.setState({
      value: currentEdit.value,
      currency: currentEdit.currency,
      method: currentEdit.method,
      tag: currentEdit.tag,
      description: currentEdit.description,
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  updateExpenses = () => {
    const { currentEdit, updateExp } = this.props;
    const newExpense = { ...currentEdit, ...this.state };
    updateExp(newExpense);
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, method, tag, description } = this.state;
    // const expensesInfo = { value, description, currency, method, tag };
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
              data-testid="currency-input"
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
            this.updateExpenses();
            this.setState({ value: '' });
          } }
        >
          Editar despesa

        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currentEdit: state.wallet.currentEdit,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchCurrATM: (expenses) => dispatch(fetchCurrencyATM(expenses)),
  updateExp: (exp) => dispatch(updateExpense(exp)),
});

EditForm.propTypes = {
  currencies: propTypes.arrayOf(propTypes.any).isRequired,
  // fetchCurrATM: propTypes.func.isRequired,
  currentEdit: propTypes.shape({
    currency: propTypes.string,
    description: propTypes.string,
    exchangeRates: propTypes.objectOf(propTypes.object.isRequired),
    id: propTypes.number,
    method: propTypes.string,
    tag: propTypes.string,
    value: propTypes.string,
  }).isRequired,
  updateExp: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
