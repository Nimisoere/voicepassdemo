import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { enrollActions, alertActions } from "../../_actions";
import Formsy from "formsy-react";
import { seoObject } from "../../_constants";
import { FormInput, VPButton, Seo, PageDescription, MySelect } from "../_Shared";

class EnrollForm extends React.Component {
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

  enrollVoice = () => {
    this.props.enrollVoice();
  }

  /* handleSubmit = data => {
    const { bvn, ...actionData } = data;
    this.props.submit(actionData);
  }; */

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
          onValidSubmit={this.enrollVoice}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          className=""
        >
          {alert && alert.message ? (
            <Alert className={`${alert.type}`}>{alert.message}</Alert>
          ) : (
            ""
          )}

          <MySelect
            name="beneficiaryAccountType"
            title="Account Type"
            options={[{value: 'GT Bank', label: 'GT Bank'}]}
            valueKey="value"
            labelKey="label"
            placeholder='Destination Bank'
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
            title="Complete Enrollment"
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
  const { submitting, success, failed, response, error } = state.enrollment;
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
    enrollVoice: bindActionCreators(enrollActions.enrollVoice, dispatch),
    //submit: bindActionCreators(enrollActions.enroll, dispatch)
  };
};
const Enroll = connect(mapStateToProps, mapDispatchToProps)(EnrollForm);

export { Enroll };
