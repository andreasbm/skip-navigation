{{ template:title }}
{{ template:badges }}
{{ template:description }}

## Installation

```
$ npm i @appnest/skip-navigation
```

## Usage

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

## Motivation

Without being able to bypass long lists of links, some users are at a huge disadvantage. A user should never be required to perform any action perhaps 200s of times before reaching the main content. Sighted users have a built-in "skip navigation" mechanism: their eyes so why not give one to keyboard users? A "skip navigation" link is a link at the top of the page which jumps the user down to an anchor or target at the beginning of the main content. The most accessible method for visually hiding "skip navigation" links is to hide them off screen, then cause them to be positioned on screen when they receive keyboard focus.

{{ doc:src/skip-button.ts }}
{{ doc:src/skip-anchor.ts }}
{{ template:contributors }}
{{ template:license }}

  