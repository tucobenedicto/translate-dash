import { connect } from 'react-redux';

import { getTranslationsRequest } from '../actions';
import {
  translationsLoadingSelector,
  translationsErrorMessageSelector,
  currentInterfaceSelector,
} from '../reducers/translations';
import TranslateDashboardComponent from './TranslateDashboard.component';

const mapStateToProps = ({ translations }) => ({
  areTranslationsLoading: translationsLoadingSelector(translations),
  translationsErrorMessage: translationsErrorMessageSelector(translations),
  currentInterface: currentInterfaceSelector(translations),
});

const mapDispatchToProps = dispatch => ({
  fetchAPIData: () => {
    dispatch(getTranslationsRequest());
  },
});

const TranslateDashboard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TranslateDashboardComponent);

export default TranslateDashboard;
