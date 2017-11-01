import Ember from 'ember';

export default Ember.Component.extend({
    formattedResult: '',
    didReceiveAttrs() {
        this._super(...arguments);
        if (this.results.length !== 0) {
            this.set('formattedResult', this.results.join('|'));
        } else {
            this.set('formattedResult', 'Please enter number of elements!');
        }
    }
});
