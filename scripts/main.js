'use strict';
let numeriUtente = '';
const risultato = document.getElementById("result");
//assegno i pulsanti della calcolatrice alle costanti
const buttons = document.querySelector('.tastierino');
buttons.addEventListener('click', function (evento) {
    const valoreId = evento.target.innerHTML;
    ottieniValore(valoreId);
})

console.log(numeriUtente);

function ottieniValore(valoreId) {
    switch (valoreId) {
        default:
            //se è un numero lo aggiungo all'array
            if (!isNaN(Number(valoreId))) {
                numeriUtente += (Number(valoreId));
                risultato.innerText = numeriUtente;
            }
            return console.log(valoreId);
        case 'c':
            numeriUtente = '';
            risultato.innerText = numeriUtente;
    }

}