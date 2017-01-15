import Ember from 'ember';
import calendly from 'calendly';

const { computed, Component, String: { htmlSafe } } = Ember;

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
    let [e] = this.$();
    if (e && e.childNodes.length) {
      e.removeChild(e.childNodes[0]);
    }
    calendly.createInlineWidgets();
  }
});