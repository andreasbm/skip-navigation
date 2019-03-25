<h1 align="center">@a11y/skip-navigation</h1>
<p align="center">
		<a href="https://npmcharts.com/compare/@a11y/skip-navigation?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@a11y/skip-navigation.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@a11y/skip-navigation"><img alt="NPM Version" src="https://img.shields.io/npm/v/@a11y/skip-navigation.svg" height="20"/></a>
<a href="https://david-dm.org/andreasbm/skip-navigation"><img alt="Dependencies" src="https://img.shields.io/david/andreasbm/skip-navigation.svg" height="20"/></a>
<a href="https://github.com/andreasbm/skip-navigation/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/andreasbm/skip-navigation.svg" height="20"/></a>
	</p>

<p align="center">
  <b>Web component friendly skip navigation functionality.</b></br>
  <sub> Go here to see a demo <a href="https://appnest-demo.firebaseapp.com/skip-navigation/">https://appnest-demo.firebaseapp.com/skip-navigation/</a>.<sub>
</p>

<br />


<p align="center">
	<img src="https://raw.githubusercontent.com/andreasbm/skip-navigation/master/example.gif" width="600">
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#installation)

## ➤ Installation

```
$ npm i @a11y/skip-navigation
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#usage)

## ➤ Usage

Here's an example on how to use this library. After you have imported it you can use the `<skip-button>` and `<skip-anchor` tags. The `skip-button` element presents a skip button to the user when it is focused. The `skip-anchor` element defines where to the focus should be set when the skip button is used.

```html
<!DOCTYPE html>
<html>
  <body>
    <skip-button></skip-button>
    <a href="#">Irrelevant link 1</a>
    <a href="#">Irrelevant link 2</a>

    <!-- More irrelevant links.. -->

    <skip-anchor></skip-anchor>

    <!-- Main content -->
  </body>
</html>
```

If you want to have multiple `skip-button` elements you can set an `id` on the `skip-anchor` and use the `for` attribute on the `skip-button` like this.

```html
<!DOCTYPE html>
<html>
  <body>

    <!-- When this skip button is pressed the focus is shifted to the anchor with the maincontent ID -->
    <skip-button for="maincontent">Skip to main content</skip-button>
    <skip-anchor id="navigation"></skip-anchor>

    <a href="#">Irrelevant link 1</a>
    <a href="#">Irrelevant link 2</a>

    <!-- More irrelevant links.. -->

    <skip-anchor id="maincontent"></skip-anchor>

    <!-- Main content -->

    <!-- When this skip button is pressed the focus is shifted to the anchor with the navigation ID -->
    <skip-button for="navigation">Skip to navigation</skip-button>
  </body>
</html>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#documentation)

## ➤ Documentation

This section documents the `attributes`, `css variables` and `slots` of the web components this library exposes.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#skip-button)

## ➤ skip-button

Button that skips to an anchor.

### Attributes

| Attribute | Type     | Description                                      |
|-----------|----------|--------------------------------------------------|
| `for`     | `string` | Optional ID of the anchor that should be navigated to. |

### CSS Custom Properties

| Property                      | Description    |
|-------------------------------|----------------|
| `--skip-button-bg`            | Background.    |
| `--skip-button-border-radius` | Border radius. |
| `--skip-button-color`         | Foreground.    |
| `--skip-button-font-size`     | Font size.     |
| `--skip-button-padding`       | Padding.       |
| `--skip-button-transition`    | Transition.    |

### Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Text to the user. Defaults to "Skip to main content" |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#skip-anchor)

## ➤ skip-anchor

Anchor that the skip button can skip to.

### Attributes

| Attribute | Type     | Description                                      |
|-----------|----------|--------------------------------------------------|
| `id`      | `string` | Optional ID that should be associated with the anchor when using the skip-button for attribute. |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#motivation)

## ➤ Motivation

Without being able to bypass long lists of links, some users are at a huge disadvantage. A user should never be required to perform any action perhaps 200s of times before reaching the main content. Sighted users have a built-in "skip navigation" mechanism: their eyes so why not give one to keyboard users? A "skip navigation" link is a link at the top of the page which jumps the user down to an anchor or target at the beginning of the main content. The most accessible method for visually hiding "skip navigation" links is to hide them off screen, then cause them to be positioned on screen when they receive keyboard focus.

Read more [here](https://webaim.org/techniques/skipnav/) if you are interested in learning more.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors
	

| [<img alt="Andreas Mehlsen" src="https://avatars1.githubusercontent.com/u/6267397?s=460&v=4" width="100">](https://twitter.com/andreasmehlsen) | [<img alt="You?" src="https://joeschmoe.io/api/v1/random" width="100">](https://github.com/andreasbm/weightless/blob/master/CONTRIBUTING.md) |
|:--------------------------------------------------:|:--------------------------------------------------:|
| [Andreas Mehlsen](https://twitter.com/andreasmehlsen) | [You?](https://github.com/andreasbm/weightless/blob/master/CONTRIBUTING.md) |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).

  