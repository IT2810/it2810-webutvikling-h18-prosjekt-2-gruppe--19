import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';

class App extends Component {
	render() {
		return (
			<div className="App">

				<header className="App-header">
					<h1 className="App-title">Fantastisk gruppeutstilling av gruppe 19</h1>
					<div className="Settings-button">
						<span> v </span>
					</div>
				</header>

				<section className="Filters">
					<div>
						<form>
							<fieldset>
								<legend>Test</legend>
								<input type="radio" name="text"/><label htmlFor="alt1">Alternativ 1</label>
								<input type="radio" name="text"/><label htmlFor="alt2">Alternativ 2</label>
								<input type="radio" name="text"/><label htmlFor="alt3">Alternativ 3</label>
							</fieldset>
						</form>
					</div>
					<div>
						<form>
							<fieldset>
								<legend>Test</legend>
								<input type="radio" name="text"/><label htmlFor="alt1">Alternativ 1</label>
								<input type="radio" name="text"/><label htmlFor="alt2">Alternativ 2</label>
								<input type="radio" name="text"/><label htmlFor="alt3">Alternativ 3</label>
							</fieldset>
						</form>
					</div>
					<div>
						<form>
							<fieldset>
								<legend>Test</legend>
								<input type="radio" name="text"/><label htmlFor="alt1">Alternativ 1</label>
								<input type="radio" name="text"/><label htmlFor="alt2">Alternativ 2</label>
								<input type="radio" name="text"/><label htmlFor="alt3">Alternativ 3</label>
							</fieldset>
						</form>
					</div>
				</section>

				<section className="Art-section">
	                <NavBar/>

					<div>
						<img src="header.jpg" alt="Art 1"/>
						<p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit, <br />sed do eiusmod tempor incididunt ut labore et</p>
					</div>

					<button>Play music</button>
				</section>

			</div>
		);
	}
}

export default App;
