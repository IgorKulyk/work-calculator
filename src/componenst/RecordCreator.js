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
    // event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = () => {
    const { start, end, location, city, salary } = this.state;
    if (start && end && location && city && salary) {
      let workTime = this.minuteCounter(end, start);
      let totalPayment = this.moneyCounter(workTime, salary);
      this.props.createWork({ ...this.state, workTime, totalPayment });
    }
  };

  render() {
    return (
      <div className="ui celled list">
        <form
          className="ui form"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="required field">
            <label>Start Time</label>
            <input
              type="datetime-local"
              name="start"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="required field">
            <label>End Time</label>
            <input
              type="datetime-local"
              name="end"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="required field">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Name of location"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="required field">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="required field">
            <label>Salary per hour</label>
            <input
              type="text"
              name="salary"
              placeholder="NIS"
              onChange={this.handleInputChange}
            />
          </div>
          <button className="ui button green" onClick={this.onSubmit}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createWork }
)(RecordCreator);
