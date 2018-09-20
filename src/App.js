import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import Selector from "./Selector.js";
import Artboard from "./Artboard";

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
			<Artboard
                image="katter"
                music="gitar"
                poem="vår"
                navbar="1"
            />
        </section>
      </div>
    );
  }
}

export default App;
