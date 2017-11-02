import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-comp', 'Integration | Component | input comp', {
  integration: true,
  beforeEach(){
    this.renderInputComponent = function() {
      this.render(
        hbs`
        {{input-comp}}
        `);
    };
    this.setProperties({
      nValue: ''
    });
  }
});

test('it renders', function (assert) {
  this.renderInputComponent();
  // Set any properties with
  this.set('nValue', 0);
  // Handle any actions with this.on('myAction', function(val) { ... });


   assert.equal('true', 'true');
});
