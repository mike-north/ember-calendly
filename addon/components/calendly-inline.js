import Ember from 'ember';

const { computed, Component, Handlebars } = Ember;

export default Component.extend({
  classNames: ['calendly-inline-widget'],
  attributeBindings: ['url:data-url', 'styleString:style'],
  styleString: computed(function() {
    let style = this.get('style');
    let styleAttrs = [];
    for (var k in style) {
      styleAttrs.push(`${k}: ${style[k]}`);
    }
    return new Handlebars.SafeString(styleAttrs.join('; '));
  }).volatile(),
  didInsertElement() {
    this._super(...arguments);
    let e = this.$()[0];
    e.removeChild(e.childNodes[0]);
    Calendly.createInlineWidgets();
  }
});
