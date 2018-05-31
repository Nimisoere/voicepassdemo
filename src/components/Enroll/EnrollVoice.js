import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createProfileActions, alertActions } from "../../_actions";
import Formsy from "formsy-react";
import { seoObject } from "../../_constants";
import {
  FormInput,
  VPButton,
  Seo,
  PageDescription,
} from "../_Shared";

class EnrollVoiceForm extends React.Component {
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
    this.refs.enrollmentForm.reset();
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
    //const { bvn, ...actionData } = data;
    this.props.submit(data);
  };

  showEnrollment = data => {};

  render() {
    const { canSubmit } = this.state;
    const { alert, submitting } = this.props;

    return (
      <div>
        <Seo
          title={seoObject.enrollment.title}
          description={seoObject.base.description}
          base={false}
        />
        <PageDescription title={seoObject.enrollment.title} />
        <Formsy
          ref="enrollmentForm"
          onValidSubmit={this.handleSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          className=""
        >
          <Alert className="alert-info">
            <h5>
              Transaction Processed <br />
              <small>
                please enroll your voice to protect your transactions in future
              </small>
            </h5>
          </Alert>

          {alert && alert.message ? (
            <Alert className={`${alert.type}`}>{alert.message}</Alert>
          ) : (
            ""
          )}

          <FormInput
            name="phonenumber"
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
         
          <VPButton
            title="Enroll your voice"
            visible={true}
            inProcess={submitting}
            canSubmit={canSubmit}
          />
        </Formsy>
      </div>
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
const EnrollVoice = connect(mapStateToProps, mapDispatchToProps)(
  EnrollVoiceForm
);

export { EnrollVoice };
