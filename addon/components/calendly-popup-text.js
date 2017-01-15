import Ember from 'ember';
import calendly from 'calendly';

const { Component } = Ember;

export default Component.extend({
  tagName: 'a',
  click(e) {
    calendly.showPopupWidget(this.get('url'));
    e.preventDefault();
  },
  willDestroyElement() {
    this._super(...arguments);
    calendly.closePopupWidget();
  }
});