![screenshot](https://i.imgur.com/7Pop4SZ.png?1)

# React Inline CSS

Make your React components visually predictable. React Inline CSS allows you to write traditional CSS stylesheets in your components, automatically namespacing them for you.

Inspired by the [SUIT CSS](https://suitcss.github.io/) methodology.

## Demo

[Mao-mao-mao!](https://edealer.nl/mao)

## Example

You write:

```javascript
var Profile = React.createClass({
	render: function () {
		return (
			<InlineCss stylesheet={`
				& .card {
					cursor: pointer;
					margin: 15px;
					padding: 15px;
					text-align: center;
					height: 200px;
				}
				& img {
					width: 130px;
					height: 130px;
				}
				& p {
					margin: 10px;
				}
				`}>
				<div className="card">
					<img src="mao.jpg" />
					<p>Mao</p>
				</div>
			</InlineCss>
		);
	}
});
```

You get namespaced CSS that works on sub-components (comparable to HTML5 `<style scoped>`):

```html
<div id="InlineCss-1">
	<div class="card">
		<img src="mao.jpg">
		<p>Mao</p>
	</div>
	<style>
		#InlineCss-1 .card { 
		  cursor: pointer; 
		  margin: 15px; 
		  padding: 15px; 
		  text-align: center; 
		  height: 200px; 
		}
		#InlineCss-1 img { 
		  width: 130px; 
		  height: 130px; 
		}
		#InlineCss-1 p { 
		  margin: 10px; 
		}
	</style>
</div>
```

For a cascaded effect, see the `index.html` demo.

## Installation

	npm install --save react-inline-css react

## Usage

Run `npm run watch` in your terminal and play with `example/` to get a feel of react-inline-css.

### SASS / LESS

You can override the `&` as the selector to the current component. This is useful if you want to require precompiled stylesheets from an external file. Here's an example with [SASS loader for Webpack](https://www.npmjs.com/package/sass-loader):

**UserComponent.js**
```javascript
import React from "react";
import InlineCss from "react-inline-css";
const stylesheet = require("!raw!sass!./UserComponent.scss");

class UserComponent extends React.Component {
	render () {
		return (
			<InlineCss componentName="UserComponent" stylesheet={stylesheet}>
				<div className="facebook">Mao is no longer red!</div>
				<div className="google">Mao is no longer red!</div>
				<div className="twitter">Mao is no longer red!</div>
			</InlineCss>
		);
	}
};
```

**UserComponent.scss**
```scss
UserComponent {
	color: red;
	.facebook {
		color: blue;
	}
	.google {
		color: blue;
	}
	.twitter {
		color: green;
	}
}
```

**result**

![screenshot](https://i.imgur.com/e3ErqTz.png?1)

## Community

Let's start one together! After you ★Star this project, follow me [@Rygu](https://twitter.com/rygu)
on Twitter. 

### Contributors

- [Danilo Moret](https://github.com/moret)

## License

BSD 3-Clause license. Copyright © 2015, Rick Wong. All rights reserved.
