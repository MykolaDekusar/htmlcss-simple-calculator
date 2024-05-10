'use strict';
let numero = '';
let primoNumero = '';
let calcolo = 0;
const risultato = document.getElementById("result");
const buttons = document.querySelector('.tastierino');

buttons.addEventListener('click', function (evento) {
    const valoreId = evento.target.innerText;
    //trasmetto alla funzione il valore del mio click
    logica(valoreId);
})

function logica(valore) {
    let num = 0;
    switch (valore) {
        default:
            if (!isNaN(Number(valore))) {
                numero += valore;
                risultato.innerText = numero;
            }
            break;
        case '=':
            risultato.innerText = operazione();
            break;
        case 'c':
            numero = '';
            primoNumero = '';
            calcolo = 0;
            risultato.innerText = '0';
            break;
        case '+':
            primoNumero += numero;
            numero = '';
            num = operazione(valore);
            break;
        case '-':
            primoNumero += numero;
            numero = '';
            break;
        case 'x':
            primoNumero += numero;
            numero = '';
            break;
        case '/':
            primoNumero += numero;
            numero = '';
            break;
    }
}

function operazione(valore) {
    let calcolo = 0;
    console.log(valore === '+');
    switch (valore) {
        case (valore === '+'):
            calcolo = Number(primoNumero) + Number(numero);
            return calcolo;
    }
}