import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('popup-widget');
  this.route('popup-text');
  this.route('inline');
});

export default Router;
