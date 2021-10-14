/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

//generare due numeri, uno il giocatore, l'altro la cpu
//chi ha il valore più alto vince

/* STRUMENTI
Math.floor (Math.random() * 7)
inner.html
*/

const player = Math.floor(Math.random() * 7)
const cpu = Math.floor(Math.random() * 7)
const winner = document.getElementById('winner');
const dice = document.getElementById('throw');

dice.addEventListener('click', function () {
  if (player > cpu) {
    const playerWin = `<h1>Il Player Ha vinto lo SQUID GAME con ${player}, battendo il computer che ha avuto ${cpu}</h1>`
    winner.innerHTML = playerWin

  } else if (player == cpu) {
    const both = `<h1>Il Player ha pareggiato con il computer con ${player} rispetto a ${cpu}</h1>`
    winner.innerHTML = both

  } else {
    const cpuWin = `<h1>La CPU ha vinto lo SQUID GAME con ${cpu} rispetto a ${player}</h1>`
    winner.innerHTML = cpuWin
  }

})
