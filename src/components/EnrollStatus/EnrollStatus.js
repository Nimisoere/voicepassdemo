import React from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { enrollmentStatusActions, alertActions } from "../../_actions";
import Formsy from "formsy-react";
import { seoObject } from "../../_constants";
import { FormInput, VPButton, Seo, PageDescription } from "../_Shared";

class EnrollStatusForm extends React.Component {
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
    this.refs.enrollmentStatusForm.reset();
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
    const { bvn, ...actionData } = data;
    this.props.submit(actionData);
  };

  render() {
    const { canSubmit } = this.state;
    const { alert, submitting } = this.props;

    return (
      <div>
        <Seo
          title={seoObject.enrollmentStatus.title}
          description={seoObject.base.description}
          base={false}
        />
        <PageDescription title={seoObject.enrollmentStatus.title} />
        <Formsy
          ref="enrollmentStatusForm"
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

          <VPButton
            title="Get Enrollment Status"
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
  const {
    submitting,
    success,
    failed,
    response,
    error
  } = state.enrollmentStatus;
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
    submit: bindActionCreators(
      enrollmentStatusActions.enrollmentStatus,
      dispatch
    )
  };
};
const EnrollStatus = connect(mapStateToProps, mapDispatchToProps)(
  EnrollStatusForm
);

export { EnrollStatus };
