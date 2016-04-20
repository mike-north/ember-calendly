import Ember from 'ember';
import layout from '../templates/components/calendly-inline';

const { computed, Component, Handlebars } = Ember;

export default Component.extend({
  classNames: ['calendly-inline-widget'],
  attributeBindings: ['url:data-url', 'styleString:style'],
  styleString: computed(function() {
    const style = this.get('style');
    const styleAttrs = [];
    for (var k in style) {
      styleAttrs.push(`${k}: ${style[k]}`);
    }
    return new Handlebars.SafeString(styleAttrs.join('; '));
  }).volatile(),
  didInsertElement() {
    this._super(...arguments);
    const e = this.$()[0];
    e.removeChild(e.childNodes[0]);
    Calendly.createInlineWidgets();
  }
});
