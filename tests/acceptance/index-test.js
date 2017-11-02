import { test } from 'qunit';
import moduleForAcceptance from 'component-isolation/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('simulating User input to validate blank user input', function(assert) {
  visit('/');

  fillIn('#nValue', '');
  click('#genEven');

  andThen(function() {
    assert.equal($('.result-header').text(),'Results for Even Numbers:' );
    assert.equal($('.result-value').text(),'Please enter number of elements!');
  });
});

test('simulating User input to generate 5 Even Numbers', function(assert) {
  visit('/');

  fillIn('#nValue', 5);
  click('#genEven');

  andThen(function() {
    assert.equal($('.result-header').text(),'Results for Even Numbers:' );
    assert.equal($('.result-value').text(),'2|4|6|8|10');
  });
});

test('simulating User input to generate 5 Fibonacci Numbers', function(assert) {
  visit('/');

  fillIn('#nValue', 5);
  click('#genFibonacci');

  andThen(function() {
    assert.equal($('.result-header').text(),'Results for Fibonacci Numbers:' );
    assert.equal($('.result-value').text(),'0|1|1|2|3');
  });
});
