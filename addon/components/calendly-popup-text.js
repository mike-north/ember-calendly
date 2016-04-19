import Ember from 'ember';

export default Ember.Component.extend({
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
