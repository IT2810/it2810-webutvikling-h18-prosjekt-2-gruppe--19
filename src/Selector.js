import React, { Component } from "react";
class Selector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "option1"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>{this.props.category}</legend>
            <input
              type="radio"
              value="option1"
              checked={this.state.value === "option1"}
              onChange={this.handleChange}
            />
            <label>{this.props.label1}</label>
            <input
              type="radio"
              value="option2"
              checked={this.state.value === "option2"}
              onChange={this.handleChange}
            />
            <label>{this.props.label2}</label>
            <input
              type="radio"
              value="option3"
              checked={this.state.value === "option3"}
              onChange={this.handleChange}
            />
            <label>{this.props.label3}</label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Selector;
