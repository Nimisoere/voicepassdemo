import React from "react";
import { withFormsy } from "formsy-react";
import { FormFeedback } from "reactstrap";
import "react-select/dist/react-select.css";
import Select from "react-select";

class MySelect extends React.Component {
  changeValue = selectedOption => {
    this.props.setValue(selectedOption);
  };

  render() {
    const errorMessage = this.props.getErrorMessage();
    const {
      options,
      validating,
      valueKey,
      placeholder,
      labelKey,
      disabled,
      showRequired,
      onChange,
      showError,
      getValue,
      name,
      isPristine,
      hasValue
    } = this.props;
    const hasError = !isPristine() && (showError() || !hasValue());
    return (
      <div className="form-label-group">
        <Select
          value={getValue() || ""}
          className={hasError ? "is-invalid" : ""}
          options={options}
          disabled={validating ? true : false || disabled}
          name={name}
          placeholder={placeholder}
          onChange={onChange || this.changeValue}
          valueKey={valueKey}
          labelKey={labelKey}
        />
        {hasError ? <FormFeedback>{errorMessage}</FormFeedback> : ""}
        {showRequired() ? <FormFeedback>Required</FormFeedback> : ""}
      </div>
    );
  }
}

const FormSelect = withFormsy(MySelect);

export { FormSelect as MySelect };
