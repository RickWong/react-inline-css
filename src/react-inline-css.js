/**
 * @copyright © 2015, Rick Wong. All rights reserved.
 */
var React      = require("react");
var assign     = Object.assign ? Object.assign : React.__spread;
var refCounter = 0;

/**
 * @module InlineCss
 */
var InlineCss = React.createClass({
	displayName: "InlineCss",
	propTypes: {
		namespace:     React.PropTypes.string,
		componentName: React.PropTypes.string,
		stylesheet:    React.PropTypes.string.isRequired,
		className:     React.PropTypes.string,
		wrapper:       React.PropTypes.string
	},
	_transformSheet: function (stylesheet, componentName, namespace) {
		const prevDeclEndGroup = "(^|{|}|;|,)";
		const commentGroup = "((?:\\s*(?:\\/\\*(?:[^\\*]|\\s|(?:[\\*](?!\\/)))*\\*\\/)*\\s*)*)";
		const selectorGroup = "([&a-z0-9\\-~_=\\.:#^\\|\\(\\)\\[\\]\\$’”,>*\\s]+)";
		const declStartGroup = "(\\{)";
		return stylesheet.
			// Prettier output.
			replace(/}\s*/ig, '\n}\n').
			// Regular rules are namespaced.
			replace(
				new RegExp(prevDeclEndGroup + commentGroup + selectorGroup + commentGroup + declStartGroup, "ig"),
				function (matched, p1, p2, p3, p4, p5, offset, string) {
					return p1 + p2 + p3.replace(new RegExp(componentName, "g"), "#" + namespace) + p4 + p5;
				}
			);
	},
	render: function () {
		var namespace     = this.props.namespace || "InlineCss-" + refCounter++;
		var componentName = this.props.componentName || "&";
		var stylesheet    = this._transformSheet(this.props.stylesheet, componentName, namespace);
		var Wrapper       = this.props.wrapper || "div";

		var wrapperProps = assign({}, this.props, {
			id: namespace
		});

		delete wrapperProps.namespace;
		delete wrapperProps.componentName;
		delete wrapperProps.stylesheet;
		delete wrapperProps.wrapper;

		return React.createElement(
			Wrapper,
			wrapperProps,
			this.props.children,
			React.createElement("style", {
				scoped:                  true,
				dangerouslySetInnerHTML: {__html: stylesheet}
			})
		);
	}
});

module.exports = InlineCss;
