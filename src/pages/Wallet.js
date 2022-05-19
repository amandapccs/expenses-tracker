import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import EditForm from '../components/EditForm';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    const { edit } = this.props;
    return (
      <div>
        <Header />
        { edit ? <EditForm /> : <WalletForm /> }
        <WalletTable />
      </div>);
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  edit: state.wallet.edit,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  fetchCurrency: propTypes.func.isRequired,
  edit: propTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
