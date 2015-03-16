var React = require("react");

var refCounter = 0;

/**
 * @module InlineCss
 */
var InlineCss = React.createClass({
	displayName: "InlineCss",
	propTypes: {
		stylesheet: React.PropTypes.string.isRequired,
		namespace: React.PropTypes.string,
		wrapper: React.PropTypes.string
	},
	_transformSheet(stylesheet, namespace) {
		return stylesheet.
			// Prettier output.
			replace(/}\s*/ig, '\n}\n').
			// Regular rules are namespaced.
			replace(
			/(^|}|;|,)\s*([&a-z0-9\-_\.:#\(\),>*\s]+)\s*(\{)/ig,
			(matched) => matched.replace(/&/g, `#${namespace}`)
		);
	},
	render() {
		var Wrapper = this.props.wrapper || "div";
		var namespace = this.props.namespace || "InlineCss-" + refCounter++;
		var transformedSheet = this._transformSheet(this.props.stylesheet, namespace);

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
