import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ClientENV.locationType
});

Router.map(function() {
  this.resource('user', { path: 'users/:login' });
  
});

export default Router;
