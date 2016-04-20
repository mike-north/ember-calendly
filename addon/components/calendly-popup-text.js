import Ember from 'ember';
import layout from '../templates/components/calendly-popup-text';

export default Ember.Component.extend({
  layout,
  tagName: 'a',
  click(e) {
    Calendly.showPopupWidget('https://calendly.com/mnorth');
    e.preventDefault();
  },
  willDestroyElement() {
    this._super(...arguments);
    Calendly.closePopupWidget();
  }
});
