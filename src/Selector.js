import React, { Component } from "react";
class Selector extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Test</legend>
            <input type="radio" name="text" />
            <label htmlFor="alt1">Alternativ 1</label>
            <input type="radio" name="text" />
            <label htmlFor="alt2">Alternativ 2</label>
            <input type="radio" name="text" />
            <label htmlFor="alt3">Alternativ 3</label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Selector;
