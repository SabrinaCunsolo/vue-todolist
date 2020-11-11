// definire una lista di todo e stamparli in pagina in un elenco
// predisporre un input testuale per aggiungere un nuovo todo: al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei todo
// al click su un item della lista, il todo viene rimosso
// BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo todo
// Non pensate alla grafica all'inizio, ma quando le cose girano perfettamente date sfogo alla vostra creatività! :laptop_parrot:
// Nome repo: vue-todolist

var app = new Vue(
    {
        el: '#root',
        data: {
            // creo array di todo
            todoList: [
                'Comprare il pane',
                'Fare pulizie',
                'Revisione auto',
                'Pagare affitto',
                'Regalo per compleanno Anna'
            ],
            // aggiungo nuovo todo vuoto
            nuovoToDo: ''
        },
        methods: {

        },


    }
);
