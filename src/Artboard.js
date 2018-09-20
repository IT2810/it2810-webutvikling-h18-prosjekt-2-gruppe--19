import React, { Component } from "react";
import $ from 'jquery'; 

class Artboard extends Component {


	constructor(props) {
		super(props);

		this.getData();

		this.state = {
			image: null,
			music: null,
			poem: null
		}
	}

	mystatething(data2) {
		this.setState(data2);
	}
	
	loadJson(path) {

		console.log("test");
		$.ajax({
			url: path,
			dataType: "json",
			cache: false,
			success: function(data) {
				this.updateState(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error("art_assets.json", status, err.toString());
			}.bind(this)
		});
	}

	updateState(data) {
		console.log(data);
		console.log(this.props.music);
		this.setState({
			image: this.byString(data, "images." + this.props.image)[parseInt(this.props.navbar)].path,
			poem: this.byString(data, "poems." + this.props.poem)[parseInt(this.props.navbar)],
			music: this.byString(data, "music." + this.props.music)[parseInt(this.props.navbar)]
		});

	}

	// http://jsfiddle.net/alnitak/hEsys/
	byString(o, s) {
		s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
		s = s.replace(/^\./, '');           // strip a leading dot
		var a = s.split('.');
		for (var i = 0, n = a.length; i < n; ++i) {
			var k = a[i];
			if (k in o) {
				o = o[k];
			} else {
				return;
			}
		}
		return o;
	}
  

	getData() {
		// console.log(this.loadFile("art_assets.json"));
		this.loadJson("art_assets.json");
	}




	render() {
	return (
		<div>
			<img src={this.state.image} alt="Art 1" />
			<p>
				Data: { this.state.image }
			</p>

			<audio controls id="player" src="" type="audio/mpeg"></audio>
		</div>
		);
	}
}

export default Artboard;
