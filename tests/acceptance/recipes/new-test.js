import { test } from 'qunit';
import moduleForAcceptance from 'recipe-card-19/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipes/new');

test('User can visit a recipe page and see a recipe', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('User can see the serving size of the recipe', function(assert) {
  let number = 0;
  visit('/');

  fillIn('.num-servings--input', number);

  // click('.adjust-recipe');

  andThen(function() {

    assert.equal(number = 8);

  });
});
