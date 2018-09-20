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

	mystatething(data2) {
		this.setState(data2);
	}
	
	loadJson(path) {

		$.ajax({
			url: path,
			dataType: "json",
			cache: false,
			success: function(data) {
				this.updateState(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(path, status, err.toString());
			}.bind(this)
		});
	}

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

	SVGParse(xml) {
		let element = new XMLSerializer().serializeToString(xml.documentElement);
		this.setState({
			imagexml: element
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
		this.loadJson("art_assets.json");
	}

	componentWillReceiveProps() {
		this.getData();
	}

	render() {
	return (
		<div>

			<h3>{ this.state.poem ? this.state.poem.title : 'Loading...' }</h3>
			<p>Av { this.state.poem ? this.state.poem.author : 'Loading...' }</p>

			<p>{ this.state.poem ? this.state.poem.poem : 'Loading...' }</p>

			<audio controls id="player" src={ this.state.music ? this.state.music.path : 'Loading...' } type="audio/mpeg"></audio>

			{/* Livin' on the edge */}
			<div dangerouslySetInnerHTML={{ __html: this.state.imagexml }} />
		</div>
		);
	}
}

export default Artboard;
