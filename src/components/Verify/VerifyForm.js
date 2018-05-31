import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { transactionActions, alertActions, verifyTransactionActions } from "../../_actions";
import Formsy from "formsy-react";
import { seoObject } from "../../_constants";
import {
  FormInput,
  VPButton,
  Seo,
  PageDescription,
  MySelect
} from "../_Shared";
import Verifying from "./Verifying";

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
        //this.resetForm();
        return {
          ...previousState,
          submitSuccess: true
        };
      }
    });
  }

  handleVerification = (transactionId) => {
    this.props.verifyTransaction({transactionId});
  }

  handleSubmit = data => {
    this.props.submit(data);
  };

  render() {
    const { canSubmit, submitSuccess } = this.state;
    const { alert, submitting, success, response } = this.props;

    return (
      <div>
        {!submitSuccess ? (
          <div>
            <Seo
              title={seoObject.transation.title}
              description={seoObject.base.description}
              base={false}
            />
            <PageDescription title={seoObject.transation.title} />
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

              <MySelect
                name="beneficiaryAccountType"
                title="Account Type"
                options={[{ value: "GT Bank", label: "GT Bank" }]}
                valueKey="value"
                validating={submitting}
                labelKey="label"
                placeholder="Destination Bank"
              />

              <FormInput
                name="destinationaccount"
                title="Destination Account"
                validating={submitting}
                validations={{
                  isNumeric: true,
                  maxLength: 10
                }}
                validationErrors={{
                  isNumeric: "You have to type valid number",
                  maxLength: "You can not type in more than 10 characters"
                }}
                type="text"
                required
              />
              <FormInput
                name="transferAmount"
                title={["Amount ", <small key="small">(in Naira)</small>]}
                validating={submitting}
                validations={{
                  isNumeric: true,
                  matchRegexp: /^0*[1-9]\d*$/
                }}
                validationErrors={{
                  isNumeric: "You have to type valid number",
                  matchRegexp: "You have to type valid number"
                }}
                type="number"
                required
              />
              <FormInput
                name="pin"
                title="PIN"
                validating={submitting}
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
                title="Proceed"
                visible={true}
                inProcess={submitting}
                canSubmit={canSubmit}
              />
            </Formsy>
          </div>
        ) : (
          <Verifying response={response} VerifyTransaction={this.handleVerification} />
        )}
      </div>
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
    submit: bindActionCreators(transactionActions.performTransaction, dispatch),
    verifyTransaction: bindActionCreators(verifyTransactionActions.verifyTransaction, dispatch)
  };
};
const Transaction = connect(mapStateToProps, mapDispatchToProps)(
  TransactionForm
);

export { Transaction };
