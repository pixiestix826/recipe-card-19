import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  unit: DS.attr(),
  quantity: DS.attr(),
});
