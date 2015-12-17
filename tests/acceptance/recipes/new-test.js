import { test } from 'qunit';
import moduleForAcceptance from 'recipe-card-19/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipes/new');

test('User can visit a recipe page and see a recipe', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    // This may change over time
    assert.equal(currentRouteName(), 'recipes.index');
  });
});

test('User can see a basic recipe card with a list of ingredients', function(assert) {
  visit('/');

  // fillIn('.ingredients', '1 Pound Chicken');

  andThen(function() {
    var ingredients = findWithAssert('.recipe-ingredient');

    // var numServings = findWithAssert('.num-servings-input');

    assert.equal(ingredients.length, 7, 'There should be 7 ingredients in the recipe');

    // assert.equal(numServings.length, 1);
    // assert.equal(numServings.eq(0).val(), 8, 'Input starts with a value of 8');
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
