/*!
 * React Style component 0.2.0
 * https://github.com/RickWong/ReactStyle
 *
 * Copyright 2014 Rick Wong
 * Released under the MIT license
 */
!(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['react'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('react'));
    } else {
        root.Style = factory(root.React);
    }
}(this, function (React) {
	"use strict";

	var refCounter = 0;

	/**
	 * @module Style
	 */
	var Style = React.createClass({
		displayName: "Style",
		propTypes: {
			sheet: React.PropTypes.string.isRequired,
			namespace: React.PropTypes.string,
			wrapper: React.PropTypes.string
		},
		_transformSheet: function (sheet, namespace) {
			return sheet.
			// Put all CSS-properties at start of new line.
			replace(/([a-z0-9\-_]+\s*:)(?!\/\/)/ig, "\n  $1").
			// Prettier output.
			replace(/}\s*/ig, "\n}\n").
			// Regular rules are namespaced.
			replace(/(^|}|;|,)\s*([&a-z0-9\-_\.:#\(\),>*\s]+)\s*(\{)/ig, function (matched) {
				return matched.replace(/&/g, "." + namespace);
			});
		},
		render: function () {
			var Wrapper = this.props.wrapper || "div";
			var namespace = this.props.namespace || "react-style-" + refCounter++;
			var transformedSheet = this._transformSheet(this.props.sheet, namespace);

			return React.createElement(
				Wrapper,
				{ className: namespace }, [
					this.props.children,
					React.createElement("style", 
						{ scoped: true, dangerouslySetInnerHTML: { __html: transformedSheet } }
					)
				]
			);
		}
	});

	return Style;
}));
