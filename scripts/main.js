'use strict';
let numero = '';
let primoNumero = '';
let operation = '';
const risultato = document.getElementById("result");
const buttons = document.querySelector('.tastierino');
buttons.addEventListener('click', function (evento) {
    const valoreId = evento.target.innerText;
    //trasmetto alla funzione il valore del mio click
    logica(valoreId);
})

function logica(valore) {
    switch (valore) {
        default:
            //verifico che non stia cliccando sulla board
            if (!isNaN(Number(valore))) {
                numero += valore;
                risultato.innerText = numero;
            }
            break;
        case '=':
            //inizializzo la funzione passando il valore di operation (operatore)
            numero = operazione(operation);
            risultato.innerText = numero;
            operation = '';
            primoNumero = '';
            break;
        //scuoto tutti i campi //RESET
        case 'c':
            numero = '';
            primoNumero = '';
            operation = '';
            risultato.innerText = '0';
            break;
        case '+':
            primoNumero += numero;
            numero = '';
            //passo il valore + all'operatore
            operation += valore;
            break;
        case '-':
            primoNumero += numero;
            numero = '';
            //passo il valore - all'operatore
            operation += valore;
            break;
        case 'x':
            primoNumero += numero;
            numero = '';
            //passo il valore x all'operatore
            operation += valore;
            break;
        case '/':
            primoNumero += numero;
            numero = '';
            //passo il valore / all'operatore
            operation += valore;
            break;
    }
}

function operazione(valore) {
    let calcolo = 0;
    switch (valore) {
        case ('+'):
            calcolo = Number(primoNumero) + Number(numero);
            return calcolo;
        case ('-'):
            calcolo = Number(primoNumero) - Number(numero);
            return calcolo;
        case ('x'):
            calcolo = Number(primoNumero) * Number(numero);
            return calcolo;
        case ('/'):
            if (Number(numero) === 0) {
                return 'Errore';
            }
            calcolo = Number(primoNumero) / Number(numero);
            return calcolo;
    }
}