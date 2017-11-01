import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller/*, model*/) {
        controller.setProperties({
            _results: [],
            resultType: ''
        });
    },
    actions: {
        updateResult(resultType, newResults) {
            this.controller.set('_results', newResults);
            this.controller.set('resultType', resultType);
        }
    }

});
