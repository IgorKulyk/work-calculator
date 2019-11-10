import React from "react";
import { connect } from "react-redux";

class WorkCounter extends React.Component {
  timeCounter = () => {
    if (this.props.records.length === 0) {
      return [0, 0];
    } else {
      let times = this.props.records.map(record => {
        return record.workTime;
      });

      let time = times.reduce((sum, next) => {
        return sum + next;
      });

      return [Math.floor(time / 60), time % 60];
    }
  };

  paymentCounter = () => {
    if (this.props.records.length === 0) {
      return 0;
    } else {
      let totals = this.props.records.map(record => {
        return record.totalPayment;
      });

      return totals.reduce((sum, next) => {
        return sum + next;
      });
    }
  };

  render() {
    return (
      <div className="ui statistics">
        <div className="blue statistic">
          <div className="value">{this.timeCounter()[0]}</div>
          <div className="label">hours</div>
        </div>
        <div className="blue statistic">
          <div className="value">{this.timeCounter()[1]}</div>
          <div className="label">minutes</div>
        </div>
        <div className="green statistic">
          <div className="value">{this.paymentCounter()}</div>
          <div className="label">NIS earned</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { records: state.records };
};

export default connect(mapStateToProps)(WorkCounter);
