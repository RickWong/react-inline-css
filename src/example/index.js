import React from "react";
import ReactDOM from "react-dom";
import InlineCss from "./../react-inline-css"
import Profile from "./Profile";
import FacebookProfile from "./FacebookProfile";
import GoogleProfile from "./GoogleProfile";
import TwitterProfile from "./TwitterProfile";

/**
 * @module Main
 */
const Main = React.createClass({
	statics: {
		css: (avatarSize) => `
			* {
				box-sizing: border-box;
			}
 			& {
				font-family: monospace;
				padding: 10px 30px 30px;
				width: 450px;
				margin: 10px auto;
			}
			& #github {
				position: absolute;
				top: 0;
				right: 0;
				border: 0;
			}
		`
	},
	render () {
		return (
			<InlineCss stylesheet={Main.css()}>
				<a href="https://github.com/RickWong/react-inline-css">
					<img id="github"
						src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67"
						alt="Fork me on GitHub" />
				</a>
				<h2>React Inline CSS</h2>
				<p>React Inline CSS allows you to cascade CSS stylesheets on your components, automatically namespacing them.</p>
				<Profile />
				<FacebookProfile name="Facebook Mao" image="mao2.png" />
				<GoogleProfile name="Google Mao" image="mao3.png" />
				<TwitterProfile name="Twitter Mao" image="mao4.png" />
			</InlineCss>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById("react-root"));
