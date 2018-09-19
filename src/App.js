import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import Selector from "./Selector.js";

class App extends Component {
  handleSelected = (option, category) => {
    console.log({ option, category });
  };

  state = { shouldHide: "true" };
  
  showHide = () => {
  	this.setState({shouldHide: !this.state.shouldHide});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Fantastisk gruppeutstilling av gruppe 19
          </h1>
          <div className="Settings-button" onClick={this.showHide}>
            <span>{this.state.shouldHide ? 'v' : '^'}</span>
          </div>
        </header>

        <section className="Filters" className={this.state.shouldHide ? 'hidden' : ''}>
          <Selector
            onSelected={this.handleSelected}
            category="Figur"
            label1="Katt"
            label2="Hest"
            label3="Krokodille"
          />
          <Selector
            onSelected={this.handleSelected}
            category="Musikk"
            label1="Gitar"
            label2="Techno"
            label3="Klassisk"
          />
          <Selector
            onSelected={this.handleSelected}
            category="Dikt"
            label1="Vår"
            label2="Sommer"
            label3="Vinter"
          />
        </section>

        <section className="Art-section">
          <NavBar />

          <div>
            <img src="header.jpg" alt="Art 1" />
            <p>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipisicing elit, <br />
              sed do eiusmod tempor incididunt ut labore et
            </p>
          </div>

          <button>Play music</button>
        </section>
      </div>
    );
  }
}

export default App;
