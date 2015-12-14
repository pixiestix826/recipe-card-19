import { test } from 'qunit';
import moduleForAcceptance from 'recipe-card-19/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipes/new');

test('User can visit a recipe page and see a recipe', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('User can see a list of recipe-items', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('User can change the serving size of the recipe', function(assert) {
  let number = '.num-servings-input';

  fillIn(number, 8);

  click('.adjust-recipe');

  andThen(function() {
    find('.num-servings-input');

    assert.expect(number === 8);

  });
});
