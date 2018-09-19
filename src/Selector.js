import React, { Component } from "react";
class Selector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.label1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });

    this.props.onSelected(event.target.value, this.props.category);
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>{this.props.category}</legend>
            <input
              type="radio"
              value={this.props.label1}
              checked={this.state.value === this.props.label1}
              onChange={this.handleChange}
            />
            <label>{this.props.label1}</label>
            <input
              type="radio"
              value={this.props.label2}
              checked={this.state.value === this.props.label2}
              onChange={this.handleChange}
            />
            <label>{this.props.label2}</label>
            <input
              type="radio"
              value={this.props.label3}
              checked={this.state.value === this.props.label3}
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
