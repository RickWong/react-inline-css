import React from "react";
import Profile from "./Profile";
import InlineCss from "../react-inline-css";

/**
 * @module GoogleProfile
 */
const GoogleProfile = React.createClass({
	statics: {
		css: () => `
			@import url(https://fonts.googleapis.com/css?family=Roboto);

			& .card {
				border-radius: 3px;
				background-color: #fff;
				box-shadow: inset 1px 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.07);
				border: 1px solid #d8d8d8;
				border-bottom-width: 2px;
				border-top-width: 0;
				vertical-align: top;
			}
			& .card > img {
				vertical-align: middle;
				border-radius: 9999px;
				border: 0;
				padding: 0;
				margin-right: 3px;
			}
			& .card > p {
				font-family: Roboto, arial, sans-serif;
				color: rgb(38, 38, 38);
				display: block;
			}
		`
	},
	render: function () {
		return (
			<InlineCss stylesheet={GoogleProfile.css()}>
				<Profile {...this.props} />
			</InlineCss>
		);
	}
});

export default GoogleProfile;
