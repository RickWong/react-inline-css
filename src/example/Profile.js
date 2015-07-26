import React from "react";
import InlineCss from "../react-inline-css";

/**
 * @module Profile
 */
const Profile = React.createClass({
	statics: {
		css: (avatarSize) => `
			& .card {
				margin: 15px;
				padding: 15px;
				text-align: center;
				height: 200px;
			}
			& .card > img {
				width: ${avatarSize}px;
				height: ${avatarSize}px;
			}
			& .card > p {
				margin: 10px;
			}
		`
	},
	render: function () {
		return (
			<InlineCss stylesheet={Profile.css(130)}>
				<div className="card">
					<img src={this.props.image || 'mao.jpg'} />
					<p>{this.props.name || 'Default Mao'}</p>
				</div>
			</InlineCss>
		);
	}
});

export default Profile;
