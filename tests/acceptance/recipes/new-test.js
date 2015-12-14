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

  fillIn('.recipe-items', '1 Pound Chicken');

  andThen(function() {
    var recipeItem = findWithAssert('.recipe-items');
    assert.equal(recipeItem.length, 7);
  });
});

test('User can change the serving size of the recipe', function(assert) {
  let number = '.num-servings-input';

  fillIn(number, 8);

  click('.adjust-recipe-submit');

  andThen(function() {
    var numServings = findWithAssert('.num-servings-input');
    findWithAssert('.num-servings-input');

    assert.equal(numServings.length, 1);
    assert.equal(numServings.eq(0).val(), 8);
  });
});
