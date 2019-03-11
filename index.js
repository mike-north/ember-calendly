/* eslint-disable operator-linebreak */
/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-calendly',

  contentFor(type) {
    let content = '';

    if (type === 'head') {
      content =
        '<script async type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>' +
        '<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">';
    }

    return content;
  }
};
