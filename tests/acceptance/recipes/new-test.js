import { test } from 'qunit';
import moduleForAcceptance from 'recipe-card-19/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipes/new');

test('User can visit a recipe page and see a recipe', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('User can see a basic recipe list of recipe-items', function(assert) {
  visit('/');

  fillIn('.recipe-items', '1 Pound Chicken');

  andThen(function() {
    var recipeItem = findWithAssert('.recipe-items');
    var numServings = findWithAssert('.num-servings-input');

    assert.equal(recipeItem.length, 7);
    assert.equal(numServings.length, 1);
    assert.equal(numServings.eq(0).val(), 8, 'Input starts with a value of 8');
  });
});

// test('User can change the serving size of the recipe', function(assert) {
//   visit('/');
//   let number = '.num-servings-input';
//
//   fillIn(number, 8);
//
//   click('.adjust-recipe-submit');
//
//   andThen(function() {
//
//   });
// });
