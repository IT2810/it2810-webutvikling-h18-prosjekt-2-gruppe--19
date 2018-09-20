import React, { Component } from "react";

class Selector extends Component {
  constructor(props) {
    super(props);
    // Sets default state of the Selector to the first radio button
    this.state = {
      value: this.props.label1
    };
    // Overrides the handleChange function
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // Sets the state of Selector when a radio button changes to checked or unchecked
    this.setState({
      value: event.target.value
    });
    // Updates the onSelected prop which is used to change the navbar state of the App component
    this.props.onSelected(event.target.value, this.props.category);
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>{this.props.category}</legend>
            <div>
              <input
                type="radio"
                id="radio1"
                value={this.props.label1}
                checked={this.state.value === this.props.label1}
                onChange={this.handleChange}
              />
              <label htmlFor="radio1">{this.props.label1}</label>
              <input
                type="radio"
                id="radio2"
                value={this.props.label2}
                checked={this.state.value === this.props.label2}
                onChange={this.handleChange}
              />
              <label htmlFor="radio2">{this.props.label2}</label>
              <input
                type="radio"
                id="radio3"
                value={this.props.label3}
                checked={this.state.value === this.props.label3}
                onChange={this.handleChange}
              />
              <label htmlFor="radio3">{this.props.label3}</label>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Selector;
