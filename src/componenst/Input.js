import React from "react";

class Input extends React.Component {
  state = {};

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });

    console.log(this.state);
  };

  render() {
    return (
      <div className="ui input">
        {this.props.label}
        <input
          type="text"
          placeholder={this.props.placeholder}
          name={this.props.name}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Input;
