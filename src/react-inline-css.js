/**
 * @copyright © 2015, Rick Wong. All rights reserved.
 */
var React = require("react");

var refCounter = 0;

/**
 * @module InlineCss
 */
var InlineCss = React.createClass({
	displayName: "InlineCss",
	propTypes: {
		componentName: React.PropTypes.string,
		stylesheet: React.PropTypes.string.isRequired,
		namespace: React.PropTypes.string,
		wrapper: React.PropTypes.string
	},
	_transformSheet: function (stylesheet, namespace, componentName) {
		return stylesheet.
			// Prettier output.
			replace(/}\s*/ig, '\n}\n').
			// Regular rules are namespaced.
			replace(
			/(^|}|;|,)\s*([&a-z0-9\-_\.:#\(\),>*\s]+)\s*(\{)/ig,
			function (matched) {
				return matched.replace(componentName, "#" + namespace);
			}
		);
	},
	render: function () {
		var componentName = this.props.componentName || "&";
		var Wrapper = this.props.wrapper || "div";
		var namespace = this.props.namespace || "InlineCss-" + refCounter++;
		var transformedSheet = this._transformSheet(
			this.props.stylesheet, namespace, componentName
		);

		return React.createElement(
			Wrapper,
			{id: namespace},
			this.props.children,
			React.createElement("style", {
				scoped:                  true,
				dangerouslySetInnerHTML: {__html: transformedSheet}
			})
		);
	}
});

module.exports = InlineCss;
