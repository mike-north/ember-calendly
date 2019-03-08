/* eslint-disable operator-linebreak */
/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-calendly',

  contentFor(type) {
    let content = '';

    if (type === 'head') {
      content =
        '<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>';
    }

    return content;
  }
};
