// @ts-check
import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import calendly from 'ember-calendly';

export default Component.extend({
  classNames: ['calendly-inline-widget'],
  attributeBindings: ['url:data-url', 'styleString:style'],
  styleString: computed(function() {
    let style = this.get('style');
    let styleAttrs = [];
    for (let k in style) {
      styleAttrs.push(`${k}: ${style[k]}`);
    }
    return htmlSafe(styleAttrs.join('; '));
  }).volatile(),
  didInsertElement() {
    this._super(...arguments);
    if (this.$().length) {
      let [e] = this.$();
      if (e && e.childNodes.length) {
        e.removeChild(e.childNodes[0]);
      }

      if (calendly._autoLoadInlineWidgets) {
        calendly._autoLoadInlineWidgets();
        return;
      }

      if (calendly.createInlineWidgets) {
        calendly.createInlineWidgets();
        return;
      }
    }
  }
});
