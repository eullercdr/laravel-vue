var app = new Vue({
    el: '#app',
    data: {
        title: "Contas a Pagar",
        menus: [
            {id: 0, name: "Listar Contas"},
            {id: 1, name: "Criar Conta"}
        ],
        activedView: 0,
        bills: [
            {date_due: '20/08/2016', name: 'Conta de Luz', value: 70.00, done: 1},
            {date_due: '20/08/2016', name: 'Água', value: 25.99, done: 0},
            {date_due: '20/08/2016', name: 'Cartão de Crédito', value: 1500.99, done: 0},
            {date_due: '20/08/2016', name: 'Empréstimo', value: 250.99, done: 0},
            {date_due: '20/08/2016', name: 'Gasolina', value: 200.00, done: 0}
        ]
    },
    computed: {
        contasPagas: function () {
            var count = 0;
            for (var i in this.bills) {
                if (!this.bills[i].done) {
                    count++;
                }
            }
            return !count ? "Nenhuma conta a pagar" : "Existem " + count + " contas a serem pagas";
        }
    },
    methods: {
        showView: function (number) {
            this.activedView = number;
        }
    }
});