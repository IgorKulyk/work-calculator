import React from "react";
import { connect } from "react-redux";
import { deleteWork } from "../actions";

class RecordsTable extends React.Component {
  renderList() {
    return this.props.records.map((record, index) => {
      return (
        <tr key={index}>
          <td data-label="Start">{record.start}</td>
          <td data-label="End">{record.end}</td>
          <td data-label="Location">
            {record.location}, {record.city}
          </td>
          <td data-label="Time">
            {`${Math.floor(record.workTime / 60)}: ${record.workTime % 60}`}
          </td>
          <td data-label="Action">
            <button
              className="ui button red"
              onClick={() => this.props.deleteWork(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="ui container">
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Start</th>
              <th>End</th>
              <th>Location</th>
              <th>Work time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { records: state.records };
};

export default connect(mapStateToProps, { deleteWork })(RecordsTable);
