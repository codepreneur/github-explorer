import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ["repository"],
  repo: Ember.computed.alias("controllers.repository"),
  
  actions: {
    submitIssue: function () {
      //var vals = this.getProperties("title", "body");
      //console.log(vals);
      //POST issues_url

      var issue = this.get("issue");
      var url = this.get("repo").get("issues_url");
      //Ember.$.post(url, { title: title, body: body }, function (result) {
      //    //success...
      //    this.transitionToRoute("issues");
      //    alert("Issue submitted");
      //});
      console.log("Submitted " + issue.get("title") + " to " + url);
      //reset it
      this.set("issue", this.get("issue").create());
      this.transitionToRoute("issues");
    }
  }
});
