'use strict';
let numero = '';
let primoNumero = '';
let calcolo = 0;
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
            if (!isNaN(Number(valore))) {
                numero += valore;
                risultato.innerText = numero;
            }
            break;
        case '=':
            risultato.innerText = operazione(operation);
            numero = operazione(operation);
            console.log(numero);
            operation = '';
            primoNumero = '';
            break;
        case 'c':
            numero = '';
            primoNumero = '';
            calcolo = 0;
            operation = '';
            risultato.innerText = '0';
            break;
        case '+':
            primoNumero += numero;
            numero = '';
            operation += valore;
            break;
        case '-':
            primoNumero += numero;
            numero = '';
            operation += valore;
            break;
        case 'x':
            primoNumero += numero;
            numero = '';
            operation += valore;
            break;
        case '/':
            primoNumero += numero;
            numero = '';
            operation += valore;
            break;
    }
}

function operazione(valore) {
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