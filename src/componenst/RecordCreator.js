import React from "react";
import { connect } from "react-redux";
import { createWork } from "../actions";

import RecordForm from "./RecordForm";

class RecordCreator extends React.Component {
  timeCounter = (end, start) => {
    let endDate = new Date(end);
    let startDate = new Date(start);
    let diff = (endDate.getTime() - startDate.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  };

  moneyCounter = (workTime, salary) => {
    return (salary / 60) * workTime;
  };

  onSubmit = formValues => {
    const { start, end, salary } = formValues;
    let workTime = this.timeCounter(end, start);
    let totalPayment = this.moneyCounter(workTime, salary);
    this.props.createWork({ ...formValues, workTime, totalPayment });
  };

  render() {
    return (
      <div>
        <RecordForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createWork })(RecordCreator);
