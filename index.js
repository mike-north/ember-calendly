/* eslint-env node */
'use strict';

module.exports = {
  name: 'calendly',

  contentFor(type, config) {
    let content = '';

    if (!process.env.EMBER_CLI_FASTBOOT && type === 'head') {
      content = '<script async type="text/javascript" src="https://calendly.com/assets/external/widget.js"></script>'
        + '<link href="https://calendly.com/assets/external/widget.css" rel="stylesheet">';
    }

    return content;
  }
};