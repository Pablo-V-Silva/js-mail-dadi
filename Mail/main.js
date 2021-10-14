/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
*/

// chiedere la mail all'utente
/* chiedi la mail all'utente
      SE è dentro alla whitelist
        appare a schermo il consenso
      ALTRIMENTI
        appare a schermo il dissenso */

/* STRUMENTI
Array
for
if
*/

// Istruzioni
const emailCheck = document.getElementById('emailCheck')

const checkBtn = document.getElementById('check')

const showAllowed = document.getElementById('allowed')

const showRejected = document.getElementById('rejected')

const email = emailCheck.value

const registered = ['mario.rossi@example.it', 'pippo.inzaghi@example.it', 'mario.delillo@example.it', 'massimino@example.it']
console.log(registered)

checkBtn.addEventListener('click', function () {
  for (let e = 0; e < registered.length; e++) {
    const element = registered[e];
    console.log(element)

    if (email === registered[e]) {
      const check = `<h2 class="block">CONGRATULAZIONI! HAI AVUTO L'ACCESSO AL SITO!</h2>`

      showAllowed.innerHTML += check
    } else if (email != registered[e]) {
      const wrong = `<h2 class="block">HEY! NON FARE IL FURBO, NON SEI REGISTRATO ESCI <span>SUBITO!</span></h2>`

      showRejected.innerHTML += wrong
    }



  }
})