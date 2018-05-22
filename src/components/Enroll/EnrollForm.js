import React from "react";
import { Alert, Button, Row, Container, Col } from "reactstrap";
import Formsy from "formsy-react";

import { Spinner, FormInput, VPButton } from "../_Shared";

class EnrollForm extends React.Component {
  state = {
    canSubmit: false
  };

  /*   componentWillUnmount() {
    this.props.clearAlerts();
  } */

  disableButton = () => {
    this.setState({ ...this.state, canSubmit: false });
  };

  enableButton = () => {
    this.setState({ ...this.state, canSubmit: true });
  };

  /*  handleSubmit = data => {
    this.props.recharge(data);
  }; */

  resetForm = () => {
    this.setState({
      ...this.state,
      canSubmit: false
    });
    //this.props.resetForm();
    //this.refs.rechargeForm.reset();
  };

  render() {
    const { canSubmit } = this.state;

    return (
      <Formsy
        ref="rechargeForm"
        onValidSubmit={this.handleSbmit}
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
          name="bvn"
          title="BVN"
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

        <VPButton title="Complete Enrollment" visible={true} canSubmit={true} />
      </Formsy>
    );
  }
}

/* const mapStateToProps = state => {
  const { alert } = state;
  return {
    alert
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearAlerts: bindActionCreators(alertActions.clear, dispatch)
  };
}; */

export { EnrollForm as Enroll };
