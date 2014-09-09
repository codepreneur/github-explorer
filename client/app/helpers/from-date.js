import Ember from 'ember';

function fromDate(theDate) {
  var today = moment();
  var target = moment(theDate);
  return target.from(today);
}

export { fromDate };

export default Ember.Handlebars.makeBoundHelper(fromDate);
