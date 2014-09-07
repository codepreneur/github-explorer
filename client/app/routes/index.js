import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return [
        { login: "codepreneur", name: "Vaidas Mykolaitis" },
        { login: "globegitter", name: "Markus Padourek" },
        { login: "tomdale", name: "Tom Dale" },
        { login: "wycats", name: "Yehuda Katz" },
        { login: "jgwhite", name: "Jamie White" },
        { login: "rlivsey", name: "Richard Livsey" }
   ]
	}
});
