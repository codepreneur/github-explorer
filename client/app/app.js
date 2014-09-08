import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'client', // TODO: loaded via config
  Resolver: Resolver
});

App.Issue = Ember.Object.extend({
  title: "",
  body: "",
  isValid : function(){
      //do some validations...
      return true;
  }
});


loadInitializers(App, 'client');

export default App;
