// Dichiarazione lista email
var emailAutorizzate = [ "alessio@boolean.it", "chiara@boolean.it", "clelia@boolean.it", "margherita@boolean.it", "marta@boolean.it", "samuele@boolean.it", "valeria@boolean.it", "veronica@boolean.it" ],
// Dichiarazione variabili
userEmail = prompt("Inserisci la tua e-mail"),
autorizzazione = false;

// Ciclo che verifica se userEmail corrisponde ad una delle email autorizzate e in tal caso restituisce "autorizzazione = true"
for ( var i = 0; i < emailAutorizzate.lenght; i++ ); {
  if ( emailAutorizzate[i] === userEmail ) {
    autorizzazione = true;
    i = emailAutorizzate.lenght;
  }
}

// Messaggio output
if ( autorizzazione == true ) {
  alert("L' email ha l' autorizzazione ad accedere");
} else {
  alert("L' email non ha l' autorizzazione ad accedere");
}


// // OOPURE condensato
// var emailAutorizzate = [ "alessio@boolean.it", "chiara@boolean.it", "clelia@boolean.it", "margherita@boolean.it", "marta@boolean.it", "samuele@boolean.it", "valeria@boolean.it", "veronica@boolean.it" ],
// userEmail = prompt("Inserisci la tua e-mail");
//
// // Ciclo e messaggio output
// for ( var i = 0; i < emailAutorizzate.lenght; i++ ); {
//   if ( emailAutorizzate[i] === userEmail ) {
//     i = emailAutorizzate.lenght;
//     alert("L' email ha l' autorizzazione ad accedere");
//   } else if ( i = emailAutorizzate.lenght ) {
//     alert("L' email non ha l' autorizzazione ad accedere");
//   }
// }
