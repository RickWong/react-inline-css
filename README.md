![screenshot](https://i.imgur.com/7Pop4SZ.png?1)

# React Inline Css

Make your React components visually predictable. React Inline Css  allows you to write traditional CSS stylesheets in your components, automatically namespacing them for you.

Inspired by the [SUIT CSS](https://suitcss.github.io/) methodology.

## Demo:

[Mao-mao-mao!](https://edealer.nl/mao)

## Example:

You write:

```javascript
		/** @jsx React.DOM */

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
<div class="Style-4n412lnmi">
	<div class="card">
		<img src="mao.jpg">
		<p>Mao</p>
	</div>
	<style>
		.Style-4n412lnmi .card { 
		  cursor: pointer; 
		  margin: 15px; 
		  padding: 15px; 
		  text-align: center; 
		  height: 200px; 
		}
		.Style-4n412lnmi img { 
		  width: 130px; 
		  height: 130px; 
		}
		.Style-4n412lnmi p { 
		  margin: 10px; 
		}
	</style>
</div>
```

For a cascaded effect, see the `index.html` demo.

## Installation

	npm install --save react-inline-css

## Usage

Run `npm run watch` in your terminal and play with `views/Main.jsx` to get a feel of
the server-side rendering and client-side hot updates.

## Community

Let's start one together! After you ★Star this project, follow me [@Rygu](https://twitter.com/rygu)
on Twitter.

## License

BSD 3-Clause license. Copyright © 2015, Rick Wong. All rights reserved.
