import DS from 'ember-data';

export default DS.Model.extend({
  currentServings: 0,

  name: DS.attr(),
  originalServings: DS.attr(),
  ingredients: DS.hasMany('ingredient'),
});
