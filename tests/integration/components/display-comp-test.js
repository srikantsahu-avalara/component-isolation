import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('display-comp', 'Integration | Component | display comp', {
  integration: true,
  beforeEach(){
    this.renderDisplayComponent = function() {
      this.render(
        hbs`
        {{display-comp 
          results=_results 
          resultType=resultType
        }}
        `);
    };
    this.setProperties({
      _results: [],
      resultType: ''
    });
  }
});

test('it renders as default', function (assert) {

  // Set any properties with
  // this.set('results', []);
  
  this.renderDisplayComponent();

  assert.equal($('#result-header').text(), 'Results for  Numbers:');

});

test('it renders with results', function (assert) {
  
  this.renderDisplayComponent();

  // Set any properties with
  this.setProperties({
    _results: [10,20,30],
    resultType: 'Even'
  });

  assert.equal($('#result-header').text(), 'Results for Even Numbers:');
  assert.equal($('#result-value').text(), '10|20|30');

});
