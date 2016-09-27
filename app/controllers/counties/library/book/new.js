import Ember from 'ember';

export default Ember.Controller.extend({

    name: null,

    actions: {
        save() {
            const library = this.get('model');
            const name = this.get('name').trim();
            this.set('name', '');

            if (!name) {
                return;
            }
            // ************************* Option 1 **************************
            // This may work if book model has a belongsTo('library')
            // const book = this.get('store').createRecord('book', {
            //     name,
            //     library,
            // });
            // book.save().then(() => {
            //     this.transitionToRoute('counties.library', library);
            // });


            // ************************* Option 2 **************************
            const book = this.get('store').createRecord('book', {
                name,
            });

            book.save().then(() => {
                library.get('books').pushObject(book);
                return library.save();
            }).then(() => {
                this.transitionToRoute('counties.library', library);
            });
        },
    },
});
