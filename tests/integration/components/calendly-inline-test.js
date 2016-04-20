import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('calendly-inline', 'Integration | Component | calendly inline', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{calendly-inline
    url='https://calendly.com/mnorth'
    style=(hash
      min-width='320px'
      height='580px')}}`);

  assert.equal(this.$().text().trim(), '');

  assert.equal(this.$('iframe').length, 1, 'Iframe has spawned');
  assert.equal(this.$('iframe').attr('src'), 'https://calendly.com/mnorth');
});
