import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import Selector from "./Selector.js";
import Artboard from "./Artboard";

class App extends Component {
  // Selector calls this method when a radio input is clicked and updates the relevant App states
  selectHandler = (option, category) => {
    if (category === "image") {
      this.setState({ image: option });
    }
    if (category === "music") {
      this.setState({ music: option });
    }
    if (category === "poem") {
      this.setState({ poem: option });
    }
  };
  // NavBar calls this method when a radio input is clicekd and updates the relevant App state
  tabSelectHandler = label => {
    this.setState({ nav: label });
  };
  // Sets default states for App
  state = {
    shouldHide: "true",
    image: "katter",
    music: "gitar",
    poem: "vår",
    nav: "0"
  };
  // Updates the state variable which determines if the dropdown menu is visible for mobile devices
  showHide = () => {
    this.setState({ shouldHide: !this.state.shouldHide });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">En reise － i livet?</h1>
        </header>

        <div className="Settings-button" onClick={this.showHide}>
          <span>{this.state.shouldHide ? "v" : "^"}</span>
        </div>

        <section
          className="Filters"
          className={this.state.shouldHide ? "hidden" : ""}
        >
          <Selector
            onSelected={this.selectHandler}
            category="image"
            label1="katter"
            label2="hester"
            label3="krokodiller"
          />
          <Selector
            onSelected={this.selectHandler}
            category="music"
            label1="gitar"
            label2="techno"
            label3="klassisk"
          />
          <Selector
            onSelected={this.selectHandler}
            category="poem"
            label1="vår"
            label2="sommer"
            label3="vinter"
          />
        </section>

        <section className="Art-section">
          <NavBar
            onSelected={this.tabSelectHandler}
            label1="0"
            label2="1"
            label3="2"
            label4="3"
          />
          <Artboard
            image={this.state.image}
            music={this.state.music}
            poem={this.state.poem}
            navbar={this.state.nav}
          />
        </section>
      </div>
    );
  }
}

export default App;
