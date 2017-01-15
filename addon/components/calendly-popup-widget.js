import Ember from 'ember';
import calendly from 'calendly';

const { Component } = Ember;

export default Component.extend({
  color: '#00a2ff',
  text: 'Schedule time with me',
  branding: false,
  didInsertElement() {
    this._super(...arguments);
    calendly.initBadgeWidget(this.getProperties(['url', 'text', 'color', 'branding']));
  },
  willDestroyElement() {
    this._super(...arguments);
    calendly.destroyBadgeWiget();
    calendly.closePopupWidget();
  }
});