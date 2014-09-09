import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var repository = this.modelFor('repository');
		
		return {
			repository: repository
		};
	}
});