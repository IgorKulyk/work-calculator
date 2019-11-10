import React from "react";
import { connect } from "react-redux";
import { createWork } from "../actions";

class RecordCreator extends React.Component {
  state = {};

  minuteCounter = (end, start) => {
    let endDate = new Date(end);
    let startDate = new Date(start);
    let diff = (endDate.getTime() - startDate.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  };

  moneyCounter = (workTime, salary) => {
    return (salary / 60) * workTime;
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  onInputChange = value => {
    console.log(value);
  };

  onSubmit = () => {
    let salary = this.state.salary;
    let workTime = this.minuteCounter(this.state.end, this.state.start);
    let totalPayment = this.moneyCounter(workTime, salary);
    this.props.createWork({ ...this.state, workTime, totalPayment });
  };

  render() {
    return (
      <div className="ui celled list">
        <div className="ui grid">
          <div className="four wide column">Start time:</div>
          <div className="twelve wide column">
            <input
              type="datetime-local"
              name="start"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="four wide column">End time:</div>
          <div className="twelve wide column">
            <input
              type="datetime-local"
              name="end"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="four wide column">Location:</div>
          <div className="twelve wide column">
            <input
              type="text"
              name="location"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="four wide column">City:</div>
          <div className="twelve wide column">
            <input type="text" name="city" onChange={this.handleInputChange} />
          </div>
          <div className="four wide column">Salary per hour:</div>
          <div className="twelve wide column">
            <input
              type="text"
              name="salary"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="sixteen wide column">
            <button className="ui button green" onClick={this.onSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createWork }
)(RecordCreator);
