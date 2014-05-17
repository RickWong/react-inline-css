/*!
 * React Style component 0.1.0
 * https://github.com/RickWong/ReactStyle
 *
 * Copyright 2014 Rick Wong
 * Released under the MIT license
 */
 (function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['react'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('react'));
    } else {
        root.Style = factory(root.React);
    }
}(this, function (React) {
    return React.createClass({
    	displayName: 'Style',
		componentWillMount: function () {
			this.props.namespace = "Style-" + Math.random().toString(36).substring(9);
			this.props.sheet     = this.props.sheet

				// Put all CSS-properties at start of new line.
				.replace(/([a-z0-9\-_]+\s*:)(?!\/\/)/ig, '\n  $1')

				// Prettier output.
				.replace(/}\s*/ig, '\n}\n')

				// Regular rules are namespaced.
				.replace(/(^|}|;)\s*([a-z0-9\-_\.:#\(\)]+\s*{)/ig, '$1\n.' + this.props.namespace + ' $2');
		},
		render: function () {
			return React.DOM.div({
					className: this.props.namespace
				},
				this.props.children,
				React.DOM.style({
					dangerouslySetInnerHTML: {
						__html: this.props.sheet
					}
				})
			);
		}
	});
}));
