import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createProfileActions, alertActions } from "../../_actions";
import Formsy from "formsy-react";

import { FormInput, VPButton } from "../_Shared";

class CreateForm extends React.Component {
  state = {
    canSubmit: false,
  };

  componentWillUnmount() {
    this.props.clearAlerts();
  }

  resetForm = () => {
    this.refs.createProfileForm.reset();
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

  disableButton = () => {
    this.setState({ ...this.state, canSubmit: false });
  };

  enableButton = () => {
    this.setState({ ...this.state, canSubmit: true });
  };

  handleSubmit = (data) => {
    const { bvn, ...actionData } = data;
    this.props.submit(actionData);
  };

  render() {
    const { canSubmit } = this.state;
    const { alert, submitting } = this.props;

    return (
      <Formsy
        ref="createProfileForm"
        onValidSubmit={this.handleSubmit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        className=""
      >
        {alert && alert.message ? (
          <Alert className={`${alert.type}`}>{alert.message}</Alert>
        ) : (
          ""
        )}

        <FormInput
          name="referenceId"
          title="Reference ID"
          validating={submitting}
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
          name="firstName"
          title="First Name"
          validating={submitting}
          type="text"
          required
        />

        <FormInput
          name="lastName"
          title="Last Name"
          validating={submitting}
          type="text"
          required
        />

        <FormInput
          name="email"
          title="Email address"
          validating={submitting}
          validations={{
            isEmail: true
          }}
          validationErrors={{
            isEmail: "You have to type valid email"
          }}
          type="email"
          required
        />

        <FormInput
          name="phoneNumber"
          title="Phone number"
          validating={submitting}
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
          validating={submitting}
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

        <VPButton
          title="Create Profile"
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
  const { submitting, success, failed, response, error } = state.createProfile;
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
    submit: bindActionCreators(createProfileActions.createProfile, dispatch)
  };
};
const CreateProfile = connect(mapStateToProps, mapDispatchToProps)(CreateForm);

export { CreateProfile };
