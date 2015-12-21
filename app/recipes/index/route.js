import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('recipe');
    return [
        {amount: '1 lb', name: 'Chicken'},
        {amount: '1 Cup', name: 'Sliced Carrots'},
        {amount: '0.5 Cup', name: 'Sliced Celery'},
        {amount: '0.75 Cup', name: 'Butter'},
        {amount: '0.75 Cup', name: 'Chopped Onions'},
        {amount: '0.25 Cup', name: 'Flour'},
        {amount: '2', name: 'Pie Crusts'},
    ];
  },
});
