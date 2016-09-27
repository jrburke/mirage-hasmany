import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL,
});

Router.map(function () {
    this.route('counties', function () {
        this.route('library', { path: 'library/:library_id' }, function () {
            this.route('book', function () {
                this.route('new');
            });
        });
        this.route('county', { path: ':county_id' });
    });
});

export default Router;
