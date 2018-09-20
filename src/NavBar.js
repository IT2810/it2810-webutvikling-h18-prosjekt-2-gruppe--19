import React, { Component } from 'react';

class NavBar extends Component {
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

        this.props.onSelected(event.target.value);
    }

    render() {
        return (
            <div className="Tab-bar">
                <div className="Tab">
                    <input
                        type="radio"
                        name="tabNumber"
                        id="tab1"
                        value={this.props.label1}
                        checked={this.state.value === this.props.label1}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="tab1">1</label>
                </div>
                <div className="Tab">
                    <input
                        type="radio"
                        name="tabNumber"
                        id="tab2"
                        value={this.props.label2}
                        checked={this.state.value === this.props.label2}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="tab2">2</label>
                </div>
                <div className="Tab">
                    <input
                        type="radio"
                        name="tabNumber"
                        id="tab3"
                        value={this.props.label3}
                        checked={this.state.value === this.props.label3}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="tab3">3</label>
                </div>
                <div className="Tab">
                    <input
                        type="radio"
                        name="tabNumber"
                        id="tab4"
                        value={this.props.label4}
                        checked={this.state.value === this.props.label4}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="tab4">4</label>
                </div>
            </div>
        )
    }
}

export default NavBar;