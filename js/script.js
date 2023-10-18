//Raccolta dati
const km = parseInt(prompt("Inserisci il numero di km che vuoi percorrere: "));
const age = parseInt(prompt("Inserisci la tua età: "));
const pricePerKm = 0.21;
const adult = 18;
const elderly = 65;
const discountUnderage = 0.2;
const discountElderly = 0.4;
let discount;

//Stampa dati nella console
console.log(km, age);

//Calcolo prezzo del biglietto
let price = km * pricePerKm;

//Calcolo di un eventuale sconto
if(age < adult) {
    discount = price * discountUnderage;
    price = price - discount;
} else if (age > elderly) {
    discount = price * discountElderly;
    price = price - discount;
}

//Arrotondamento del prezzo a 2 cifre decimali 
price = price.toFixed(2);

//Stampa prezzo nella console
console.log(price);

//Preparazione messaggio da visualizzare
const message = `Visto che hai ${age} anni, il costo del biglietto per il percorso di ${km} km sarà di: ${price} Euro`;

//Stampa del messaggio nella console
console.log(message);

//Inserimento del messaggio nel documento HTML
document.getElementById("price_message").innerHTML = message;
