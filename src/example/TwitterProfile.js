import React from "react";
import Profile from "./Profile";
import InlineCss from "../react-inline-css";

/**
 * @module TwitterProfile
 */
const TwitterProfile = React.createClass({
	statics: {
		css: () => `
			& .card {
				border-radius: 5px;
				background-color: rgb(178, 223, 218);
				border: 1px solid #e1e8ed;
				padding: 0;
			}
			& .card > img {
				background: #fff;
				border: 6px solid #fff;
				border-radius: 6px;
				margin: 15px;
				box-shadow: rgba(136, 153, 166, 0.14902) 0px 1px 1px 0px;
			}
			& .card > p {
				font-family: 'Helvetica Neue', Helvetica, arial, sans-serif;
				color: #292f33;
				font-size: 18px;
				display: block;
				background: #f5f8fa;
				border-radius: 0 0 5px 5px;
				margin: 0;
				padding: 10px;
				bottom: 0;
				font-weight: bold;
			}
		`
	},
	render: function () {
		return (
			<InlineCss stylesheet={TwitterProfile.css()}>
				<Profile {...this.props} />
			</InlineCss>
		);
	}
});

export default TwitterProfile;
