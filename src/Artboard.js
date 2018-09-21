import React, { Component } from "react";
import $ from 'jquery'; 

class Artboard extends Component {

	constructor(props) {
		super(props);

		this.getData();

		this.state = {
			imagepath: null,
			music: null,
			poem: null
		}
	}
	
	// Load JSON files by AJAX
	loadJson(path) {

		$.ajax({
			url: path,
			dataType: "json",
			cache: false,
			success: function(data) {
				// This function is called when data is loaded
				this.updateState(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(path, status, err.toString());
			}.bind(this)
		});
	}

	// Load SVG files by AJAX
	loadSVG(path) {

		$.ajax({
			url: path,
			dataType: "xml",
			cache: false,
			success: function(data) {
				this.SVGParse(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(path, status, err.toString());
			}.bind(this)
		});
	}

	updateState(data) {
		this.setState({
			imagepath: this.byString(data, "images." + this.props.image)[parseInt(this.props.navbar)].path,
			poem: this.byString(data, "poems." + this.props.poem)[parseInt(this.props.navbar)],
			music: this.byString(data, "music." + this.props.music)[parseInt(this.props.navbar)]
		});

		this.loadSVG(this.state.imagepath);
	}

	// Convert XML element to a string, so that it can be placed in the HTML 
	SVGParse(xml) {
		let element = new XMLSerializer().serializeToString(xml.documentElement);
		this.setState({
			imagexml: element
		});
	}

	// Using the prop strings as parameters in JSON traversal
	// Source: http://jsfiddle.net/alnitak/hEsys/
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
		this.loadJson("art_assets.json");
	}

	// Run each time props change
	componentWillReceiveProps() {
		this.getData();
	}

	render() {
	return (
		<div>
			
			<audio controls id="player" src={ this.state.music ? this.state.music.path : 'Loading...' } type="audio/mpeg"></audio>

			<h3>{ this.state.poem ? this.state.poem.title : 'Loading...' }</h3>
			<p>Av { this.state.poem ? this.state.poem.author : 'Loading...' }</p>
			
			<p className="poem">{ this.state.poem ? this.state.poem.poem : 'Loading...' }</p>

			                         { /* Livin' on the edge */ }
			<div className="Art-image" dangerouslySetInnerHTML={{ __html: this.state.imagexml }} />
		</div>
		);
	}
}

export default Artboard;
