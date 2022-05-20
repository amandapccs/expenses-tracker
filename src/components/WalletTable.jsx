import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, editExpense } from '../actions';
import '../styles/WalletTable.module.css'

class WalletTable extends React.Component {
  render() {
    const { expenses, expenseRemover, editExp } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { expenses.map((expItem) => (
            <tr key={ expItem.id }>
              <td>{ expItem.description }</td>
              <td>{ expItem.tag }</td>
              <td>{ expItem.method }</td>
              <td>{ Number(expItem.value).toFixed(2) }</td>
              <td>{ expItem.exchangeRates[expItem.currency].name }</td>
              <td>{ Number(expItem.exchangeRates[expItem.currency].ask).toFixed(2) }</td>
              <td>
                { (Number(expItem.value)
          * Number(expItem.exchangeRates[expItem.currency].ask)).toFixed(2) }
              </td>
              <td>Real</td>

              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => editExp(expItem) }
                >
                  Editar

                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => expenseRemover(expItem.id) }
                >
                  Excluir
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenseRemover: (id) => dispatch(removeExpense(id)),
  editExp: (exp) => dispatch(editExpense(exp)),
});

WalletTable.propTypes = {
  expenses: propTypes.arrayOf(propTypes.any).isRequired,
  expenseRemover: propTypes.func.isRequired,
  editExp: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
