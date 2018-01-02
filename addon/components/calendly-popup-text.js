// @ts-check
import Component from '@ember/component';
import calendly from 'calendly';

export default Component.extend({
  url: '',
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