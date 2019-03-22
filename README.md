
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#skip-navigation)

# ➤ skip-navigation

<h1 align="center">skip-navigation</h1>
{{ template:description }}


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#installation)

## ➤ Installation

```
$ npm i skip-navigation
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#usage)

## ➤ Usage

```html
<!DOCTYPE html>
<html>
  <body>
    <skip-button></skip-button>
    <a href="#">Irrelevant link 1</a>
    <a href="#">Irrelevant link 2</a>

    <!-- More irrelevant links.. -->

    <main>
        <skip-anchor></skip-anchor>

        <!-- Main content -->
    </main>
  </body>
</html>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#skip-button)

## ➤ `<skip-button>`


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#skip-button)

## ➤ skip-button

Button that skips to an anchor.

### Attributes

| Attribute | Type  | Description                                      |
|-----------|-------|--------------------------------------------------|
| `for`     | `any` | ID of the anchor that should be navigated to. Optional. |

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

## ➤ `<skip-anchor>`


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#skip-anchor)

## ➤ skip-anchor

Anchor that the skip button can skip to.


{{ template:contributors }}

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).

  