import React from "react";
import InlineCss from "../react-inline-css";

/**
 * @module Profile
 */
const Profile = React.createClass({
	statics: {
		css: () => `
			& .card {
				margin: 15px;
				padding: 15px;
				text-align: center;
				height: 200px;
			}
			& .card > img {
				width: 130px;
				height: 130px;
			}
			& .card > p {
				margin: 10px;
			}
		`
	},
	render: function () {
		return (
			<InlineCss stylesheet={Profile.css()}>
				<div className="card">
					<img src={this.props.image || 'mao.jpg'} />
					<p>{this.props.name || 'Default Mao'}</p>
				</div>
			</InlineCss>
		);
	}
});

export default Profile;
