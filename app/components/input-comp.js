import Ember from 'ember';

export default Ember.Component.extend({
    nValue: '',
    results: [],
    actions: {
        onGenerateFibonacci() {
            let _results = this.generateFibonacci(this.nValue);
            this.get('onUpdateResult')('Fibonacci', _results);
        },
        onGenerateEven() {
            let _results = this.generateEven(this.nValue);
            this.get('onUpdateResult')('Even', _results);
        }
    },
    generateEven(num) {
        let i = 1;
        let c = 0;
        let arr = [];
        while (c < num) {
            i++;
            if (isEven(i)) {
                arr.push(i);
                c++;
            }
        }
        return arr;

        function isEven(num) {
            if (num % 2 === 0) {
                return true;
            }
            return false;
        }
    },
    generateFibonacci(num) {
        var fibonacci = [];
        if(num*1 > 2) {
            fibonacci = [0, 1];
            for (var i = 1; i < num-1; i++) {
                fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
            }
        } else if(num*1 === 1) {
            fibonacci = [0];
        } else if(num*1 === 2) {
            fibonacci = [0, 1];
        }

        return fibonacci;
    }
});
