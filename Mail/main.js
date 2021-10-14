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
const checkEmail = document.getElementById('emailCheck')

const checkBtn = document.getElementById('check')

const registered = ['mario.rossi@example.it', 'pippo.inzaghi@example.it', 'mario.delillo@example.it', 'massimino@example.it']

for (let e = 0; e < registered.length; e++) {
  const element = registered[e];

  if (checkEmail == registered) {
    let confirm = document.getElementById('allowed')

    confirm = `<div class=""><h2>CONGRATULAZIONI HAI ACCESSO A QUESTO PORTALE!</h2></div>`
  } else if (checkEmail != registered) {
    let rejected = document.getElementById('rejected')

    rejected = `<h2>EHY TU! NON FARE IL FURBO! NON SEI STATO INVITATO, ESCI <span>SUBITO</span></h2>`
  }

}