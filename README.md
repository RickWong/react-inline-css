![screenshot](https://i.imgur.com/7Pop4SZ.png?1)

# React Inline Css

Make your React components visually predictable. React Inline Css  allows you to write traditional CSS stylesheets in your components, automatically namespacing them for you.

Inspired by the [SUIT CSS](https://suitcss.github.io/) methodology.

## Demo:

[Mao-mao-mao!](https://edealer.nl/mao)

## Example:

You write:

```javascript
var Profile = React.createClass({
	render: function () {
		return (
			<Style sheet="
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
				">
				<div className="card">
					<img src="mao.jpg" />
					<p>Mao</p>
				</div>
			</Style>
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

	npm install --save react-inline-css

## Usage

Run `npm run watch` in your terminal and play with `examples.jsx` to get a feel of react-inline-css.

## Community

Let's start one together! After you ★Star this project, follow me [@Rygu](https://twitter.com/rygu)
on Twitter.

## License

BSD 3-Clause license. Copyright © 2015, Rick Wong. All rights reserved.
