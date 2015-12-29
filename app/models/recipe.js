import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  originalServings: DS.attr(),
  ingredients: DS.hasMany('ingredient'),
});
