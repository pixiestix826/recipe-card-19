import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  numServings: DS.attr(),
  ingredientAmount: DS.attr(),
  ingredientName: DS.attr(),
});
