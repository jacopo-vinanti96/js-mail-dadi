var numPlayer = randomDice(),
    numComputer = randomDice(),
    datiGioco = "Il tuo numero è: " + numPlayer + "\nIl numero del computer è: " + numComputer;

function randomDice() {
  return (Math.floor( Math.random() * 6 ) + 1);
}

if ( numPlayer > numComputer ) {
  alert( datiGioco + "\nHAI VINTO!")
} else if ( numPlayer < numComputer ) {
  alert( datiGioco + "\nHAI PERSO...")
} else {
  alert( datiGioco + "\nPAREGGIO!")
}
