import React, { Component } from 'react';

class NavBar extends Component {
	constructor(props) {
		super(props);
		// Sets default state of the NavBar to 1
		this.state = {
			value: this.props.label1
		};
		// Overrides the handleChange function
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		// Sets the state of Navbar when a radio button changes to checked or unchecked
		this.setState({
			value: event.target.value
		});
		// Updates the onSelected prop which is used to change the navbar state of the App component
		this.props.onSelected(event.target.value);
	}

	render() {
		return (
			// JSX which sets the value of the radio inputs and changes state value of
			// navbar to the one clicked.
			<div className="Tab-bar">
				<div className="Tab">
					<input
						type="radio"
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
