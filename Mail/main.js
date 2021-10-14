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

const showAllowed = document.querySelector('#risposta')

const registered = ['mario.rossi@example.it', 'pippo.inzaghi@example.it', 'mario.delillo@example.it', 'massimino@example.it']

checkBtn.addEventListener('click', function () {

  const email = emailCheck.value
  console.log(email);

  let show = false

  for (let e = 0; e < registered.length; e++) {
    const element = registered[e];
    /* console.log(element) */

    if (email == registered[e]) {

      show = true

      console.log('trovato');

    }
  }

  if (show == true) {
    const allowed = `<div id="allowed" class="block">
        <h2 class="">CONGRATULAZIONI! HAI AVUTO L'ACCESSO AL SITO!</h2>
      </div>`

    showAllowed.innerHTML = allowed

    console.log(allowed);

    console.log(showAllowed);
  } else {

    const rejected = `<div id="rejected" class="block">
        <h2 class="">HEY! NON FARE IL FURBO, NON SEI REGISTRATO ESCI <span>SUBITO!</span></h2>
      </div>`

    showAllowed.innerHTML = rejected


  }

  console.log(show);
})