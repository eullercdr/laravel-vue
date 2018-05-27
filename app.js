Vue.filter('doneLabel', function (value) {
    if (value == false) {
        return "Não Paga";
    }
    return "Paga";
});

Vue.filter('statusGeneral', function (value) {
    if (value === false) {
        return "Nenhuma conta cadastrada";
    }
    if(!value){
        return "Nenhuma conta a pagar";
    }

    return "Existem " + value + " contas a serem pagas";

});

var app = new Vue({
    el: '#app',
    data: {
        test: "",
        title: "Contas a Pagar",
        menus: [
            {id: 0, name: "Listar Contas"},
            {id: 1, name: "Criar Conta"}
        ],
        activedView: 0,
        formType: "insert",
        bill: {
            date_due: '',
            name: '',
            value: 0,
            done: false
        },
        names: [
            'Conta de Luz',
            'Conta de Agua',
            'Empréstimo',
            'Gasolina',
            'Celular'
        ],
        bills: [
            {date_due: '20/08/2016', name: 'Conta de Luz', value: 70.00, done: true},
            {date_due: '20/08/2016', name: 'Água', value: 25.99, done: false},
            {date_due: '20/08/2016', name: 'Cartão de Crédito', value: 1500.99, done: false},
            {date_due: '20/08/2016', name: 'Empréstimo', value: 250.99, done: false},
            {date_due: '20/08/2016', name: 'Gasolina', value: 200.00, done: false}
        ]
    },
    computed: {
        contasPagas: function () {
            if (this.bills.length==0) {
                return false;
            }

            var count = 0;
            for (var i in this.bills) {
                if (!this.bills[i].done) {
                    count++;
                }
            }
            return count;
        }
    },
    methods: {
        showView: function (number) {
            this.activedView = number;
            if (number == 1) {
                this.formType = "insert";
            }
        },
        submit: function () {

            if (this.formType == 'insert') {
                this.bills.push(this.bill);
            }

            this.bill = {
                date_due: '',
                name: '',
                value: 0,
                done: 0
            };

            this.activedView = 0;
        },
        loadBill: function (bill) {
            this.bill = bill;
            this.activedView = 1;
            this.formType = 'update';
        },
        deleteBill: function (bill) {
            if (confirm('Deseja excluir esta conta?')) {
                this.bills.$remove(bill)
            }

        }
    }
});

app.$watch('test', function (novoValor, velhoValor) {
    console.log(novoValor);
    console.log(velhoValor);
});

