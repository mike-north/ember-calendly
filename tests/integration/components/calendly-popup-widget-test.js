import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('calendly-popup-widget', 'Integration | Component | calendly popup widget', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{calendly-popup-widget
  url='https://calendly.com/mnorth'}}`);

  assert.equal(this.$().text().trim(), '');

  assert.equal(document.querySelectorAll('.calendly-badge-content').length, 1, 'Widget is rendered');
});
