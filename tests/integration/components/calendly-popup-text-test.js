import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('calendly-popup-text', 'Integration | Component | calendly popup text', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let done = assert.async();

  this.render(hbs`{{calendly-popup-text url='https://calendly.com/mnorth'}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    ''
  );

  // Template block usage:
  this.render(hbs`
    {{#calendly-popup-text url='https://calendly.com/mnorth'}}
      template block text
    {{/calendly-popup-text}}
  `);

  assert.equal(
    this.$()
      .text()
      .trim(),
    'template block text'
  );

  this.$('a').click();
  setTimeout(() => {
    assert.equal(
      document.querySelectorAll('iframe[src^="https://calendly.com/mnorth"]').length,
      1,
      'Iframe spawned on click'
    );
    done();
  }, 1000);
});
