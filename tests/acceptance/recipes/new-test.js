import { test } from 'qunit';
import moduleForAcceptance from 'recipe-card-19/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipes/new');

test('User can visit a recipe page', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('User can see the .recipe-items for a single .recipe', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
