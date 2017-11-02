import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-comp', 'Integration | Component | input comp', {
  integration: true
});

test('it renders', function (assert) {

  // Set any properties with
  this.set('results', []);
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-comp}}`);

   assert.equal('true', 'true');
});
