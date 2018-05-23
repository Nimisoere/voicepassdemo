import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { transactionActions, alertActions } from "../../_actions";
import Formsy from "formsy-react";

import { FormInput, VPButton } from "../_Shared";

class TransactionForm extends React.Component {
  state = {
    canSubmit: false
  };

  componentWillUnmount() {
    this.props.clearAlerts();
  }

  disableButton = () => {
    this.setState({ ...this.state, canSubmit: false });
  };

  enableButton = () => {
    this.setState({ ...this.state, canSubmit: true });
  };

  resetForm = () => {
    this.refs.transactionForm.reset();
  };

  componentWillReceiveProps(nextProps) {
    this.setState((previousState, nextProps) => {
      if (nextProps.success) {
        this.resetForm();
        return {
          ...previousState,
          submitSuccess: true
        };
      }
    });
  }

  handleSubmit = data => {
    const { amount, pin, ...actionData } = data;
    this.props.submit(actionData);
  };

  render() {
    const { canSubmit } = this.state;
    const { alert, submitting } = this.props;

    return (
      <Formsy
        ref="transactionForm"
        onValidSubmit={this.handleSubmit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        className=""
      >
        {alert && alert.message ? (
          <Alert
            className={`${alert.type}`}
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            {alert.message}
          </Alert>
        ) : (
          ""
        )}

        <FormInput
          name="referenceId"
          title="Reference ID"
          validating={false}
          validations={{
            isNumeric: true,
            maxLength: 15
          }}
          validationErrors={{
            isNumeric: "You have to type valid number",
            maxLength: "You can not type in more than 15 characters"
          }}
          type="text"
          required
        />
        <FormInput
          name="transactionId"
          title="Transaction ID"
          validating={false}
          validations={{
            isNumeric: true,
            maxLength: 15
          }}
          validationErrors={{
            isNumeric: "You have to type valid number",
            maxLength: "You can not type in more than 15 characters"
          }}
          type="text"
          required
        />

        <FormInput
          name="amount"
          title="Amount"
          validating={false}
          validations={{
            isNumeric: true,
            maxLength: 15
          }}
          validationErrors={{
            isNumeric: "You have to type valid number",
            maxLength: "You can not type in more than 15 characters"
          }}
          type="text"
          required
        />

        <FormInput
          name="pin"
          title="PIN"
          validating={false}
          validations={{
            isNumeric: true,
            maxLength: 4
          }}
          validationErrors={{
            isNumeric: "You have to type valid number",
            maxLength: "You can not type in more than 4 characters"
          }}
          type="text"
          required
        />

        <VPButton
          title="Perform Transaction"
          visible={true}
          inProcess={submitting}
          canSubmit={canSubmit}
        />
      </Formsy>
    );
  }
}

const mapStateToProps = state => {
  const { alert } = state;
  const { submitting, success, failed, response, error } = state.transaction;
  return {
    alert,
    submitting,
    success,
    failed,
    response,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearAlerts: bindActionCreators(alertActions.clear, dispatch),
    submit: bindActionCreators(transactionActions.performTransaction, dispatch)
  };
};
const Transaction = connect(mapStateToProps, mapDispatchToProps)(TransactionForm);

export { Transaction };
