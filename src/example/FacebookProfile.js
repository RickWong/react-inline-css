import React from "react";
import Profile from "./Profile";
import InlineCss from "../react-inline-css";

/**
 * @module Profile
 */
const FacebookProfile = React.createClass({
	statics: {
		css: () => `
			& .card {
				padding-top: 30px;
				border-radius: 3px;
				border: 1px solid rgb(208, 209, 213);
				border-left-color: rgb(223, 224, 228);
				border-right-color: rgb(223, 224, 228);
				border-top-color: rgb(229, 230, 233);
				background: linear-gradient(to bottom, rgba(255,255,255,1) 56%,rgba(204,204,204,1) 100%);
			}
			& .card > img {
				vertical-align: middle;
				padding: 4px;
				background: #fff;
				border: 1px solid #ccc;
				border-radius: 3px;
			}
			& .card > p {
				font-family: Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif;
				font-weight: bold;
				color: rgb(59, 89, 152);
				display: inline;
			}
		`
	},
	render: function () {
		return (
			<InlineCss stylesheet={FacebookProfile.css()}>
				<Profile {...this.props} />
			</InlineCss>
		);
	}
});

export default FacebookProfile;
