/*Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente*/

// lista creata
let listaSpesa = ["carne","olio","riso","pasta","burro","aqua","biscotti"]; 
//variabile serve per contare gli elementi della lista 
let numeroLista = parseInt(0) ;
/*
//loop for per stampare ogni ogetto  nella lista indvidualmente
for(let i = 0 ; i < listaSpesa.length ; i++){
    
//ogni volta che si fa il loop facio un calcolo di +1 alla variabile numeroLista
    numeroLista += 1 ;
//variabele che serve per identificare l'ogetto nella lista (va all'ogetto successivo ogni volta che viene eseguito il loop)
    let lista = listaSpesa[i];
// stampo la mia lista
    console.log(numeroLista +("- ")+ lista);
};*/

//Variabile per contare con un loop whille
let contatore = 0 ;

//loop con whille
while(contatore < listaSpesa.length){
//variabile che serve per prendere l'elemento in ordine dalla lista
    let lista = listaSpesa[contatore];
//viriabile che serve per identificare ordinare la lista in numeri 
    numeroLista += 1 ;
//stampo la mia lista 
    console.log(numeroLista +("- ")+ lista);
//faccio calcolo al contatore per non fare un loop indefinita e mi crasha il pc !
    contatore += 1;
};