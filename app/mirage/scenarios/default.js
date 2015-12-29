// let ingredients = [
//       {amount: '1 lb', name: 'Chicken'},
//       {amount: '1 Cup', name: 'Sliced Carrots'},
//       {amount: '0.5 Cup', name: 'Sliced Celery'},
//       {amount: '0.75 Cup', name: 'Butter'},
//       {amount: '0.75 Cup', name: 'Chopped Onions'},
//       {amount: '0.25 Cup', name: 'Flour'},
//       {amount: '2', name: 'Pie Crusts'},
// ];
//
// export default function(server) {
//
//   // Seed your development database using your factories. This
//   // data will not be loaded in your tests.
//
//   ingredients.forEach(function(recipe) {
//     server.createList('recipe', ingredients);
//   });
// }

export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.create('recipe', {ingredients: [1, 2, 3, 4, 5, 6]});
  server.createList('ingredient', 6, {recipe: 1});
}
