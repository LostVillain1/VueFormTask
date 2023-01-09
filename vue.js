let app = new Vue({
    el: '.app',
    data: {
        inputs: [{
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z_$]{2,30}$/,
                warning: 'Wrong Name',
                redAlert: false
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                warning: 'Wrong Number',
                redAlert: false
            },
            {
                name: 'Email',
                value: '',
                pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                warning: 'Wrong Email',
                redAlert: false
            },
            {
                name: 'Age',
                value: '',
                pattern: /^[2-9]|\d{1,}$/,
                warning: 'Wrong Age',
                redAlert: false
            }
        ],
        showForm: true,
        successPercent: 0,
    },
    methods: {
        validateInput(input) {
            input.redAlert = false;
            console.log('Kek')
            console.log(input.value.length)
            if (!input.pattern.test(input.value) && input.value != '') {
                input.redAlert = true
            }
        },
    },
    computed: {
        checkButtondDisabled: function() {
            correctForms = this.inputs.filter(item => item.redAlert == false && item.value != '')
            if (correctForms.length == this.inputs.length) {
                return false
            }
            return true
        },
        checkProgress: function() {
            progress = 0
            correctForms = this.inputs.filter(item => item.redAlert == false && item.value != '')
            progress = correctForms.length * 25
            return progress
        }
    }

});