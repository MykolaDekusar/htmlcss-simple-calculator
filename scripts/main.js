'use strict';
let numero = '';
const risultato = document.getElementById("result");
const buttons = document.querySelector('.tastierino');

buttons.addEventListener('click', function (evento) {
    const valoreId = evento.target.innerText;
    //trasmetto alla funzione il valore del mio click
    logica(valoreId);
})

function logica(valore) {
    let primoNumero = '';
    let calcolo = 0;
    switch (valore) {
        default:
            if (!isNaN(Number(valore))) {
                numero += valore;
                risultato.innerText = numero;
            }
            break;
        case '=':
            calcolo = Number(primoNumero) + Number(numero);
            console.log(primoNumero, numero)
            risultato.innerText = calcolo;
            break;
        case 'c':
            numero = '';
            risultato.innerText = '0';
            break;
        case '+':
            primoNumero += numero;
            console.log(primoNumero);
            console.log(numero);
            numero = '';
            break;
        case '-':
            primoNumero = numero;
            console.log(primoNumero);
            console.log(numero);
            numero = 0;
            break;
        case 'x':
            primoNumero = numero;
            console.log(primoNumero);
            console.log(numero);
            numero = 0;
            break;
        case '/':
            primoNumero = numero;
            console.log(primoNumero);
            console.log(numero);
            numero = 0;
            break;
    }
}
