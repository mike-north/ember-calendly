# Ember-calendly [![Build Status](https://travis-ci.org/mike-north/ember-calendly.svg?branch=master)](https://travis-ci.org/mike-north/ember-calendly) [![Ember Observer Score](https://emberobserver.com/badges/ember-calendly.svg)](https://emberobserver.com/addons/ember-calendly) [![npm version](https://badge.fury.io/js/ember-calendly.svg)](https://badge.fury.io/js/ember-calendly) [![Code Climate](https://codeclimate.com/github/mike-north/ember-calendly/badges/gpa.svg)](https://codeclimate.com/github/mike-north/ember-calendly)

[![Greenkeeper badge](https://badges.greenkeeper.io/mike-north/ember-calendly.svg)](https://greenkeeper.io/)

Easy [Calendly](https://calendly.com/) integration for Ember.js apps.

**[FASTBOOT](http://ember-fastboot.com) COMPATIBLE**

## Use

```
ember install ember-calendly
```

Then you have three options for embedding calendly.

### Inline

```hbs
{{calendly-inline
  url='https://calendly.com/mnorth'
  style=(hash
    min-width='320px'
    height='580px')}}
```

### Popup Widget

```hbs
{{calendly-popup-widget
  url='https://calendly.com/mnorth'}}
```


### Popup Text

```hbs
{{calendly-popup-text
  url='https://calendly.com/mnorth'}}
```

## Other stuff

You may also import Calendly as an ES6 module

```js
import Calendly from 'calendly';

Calendly.closePopupWidget();
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

&copy; Levanto Financial Inc, All Rights Reserved
