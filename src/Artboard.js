import React, { Component } from "react";

class Artboard extends Component {
    getData() {
        let list = Array(3).fill(null);
        if(this.props.image === "Katt" && this.props.music === "Gitar" && this.props.poem === "Vår" && this.props.navbar === "1"){
            list[0] = "assets/Svg/Katter/katt1.svg";
            list[1] = "assets/Musikk/Gitar/167114__ibcharlie-parker__guitar.mp3";
            list[2] = "public/assets/Tekst/Vår/vår.json";
            return list;
        }
    }

    render() {
    return (
        <div>
            <img src={this.getData()[0]} alt="Art 1" />
            <p>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipisicing elit, <br />
                sed do eiusmod tempor incididunt ut labore et
            </p>
            <audio controls id="player" src={this.getData()[1]} type="audio/mpeg"></audio>
        </div>
        );
    }
}

export default Artboard;
