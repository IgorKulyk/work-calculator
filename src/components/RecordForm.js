import React from "react";
import { Field, reduxForm } from "redux-form";

class RecordForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="start" component={this.renderInput} label="Start time" type="datetime-local" />
        <Field name="end" component={this.renderInput} label="End time" type="datetime-local" />
        <Field name="location" component={this.renderInput} label="Location" type="text" />
        <Field name="city" component={this.renderInput} label="City" type="text" />
        <Field name="salary" component={this.renderInput} label="Salary" type="number" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.start) {
    errors.start = "Start time can not be empty";
  }
  if (!formValues.end) {
    errors.end = "End time can not be empty";
  }
  if (!formValues.location) {
    errors.location = "Location can not be empty";
  }
  if (!formValues.city) {
    errors.city = "City can not be empty";
  }
  if (!formValues.salary) {
    errors.salary = "Salary can not be empty";
  }
  if (formValues.salary < 0) {
    errors.salary = "Salary can not be negative number"
  }
  
  return errors;
};

export default reduxForm({
  form: "simple",
  validate: validate
})(RecordForm);
