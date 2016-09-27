import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        // reloading always to have same behavior as CM3 for now
        return this.store.findAll('county', { reload: true });
    },
});
