# Biglietto del treno

### Problema

**Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)**
- **va applicato uno sconto del 20% per i minorenni**
- **va applicato uno sconto del 40% per gli over 65**

### Dati

- Chiedere all'utente quanti km vuole percorrere
- Costo del biglietto al km: 0.21€
- Chiedere l'età del passeggero
- Sconto giovani: 20%
- Sconto anziani: 40%

### Logica della soluzione

1. Calcolare il prezzo del percorso moltiplicando il numero di chilometri da percorrere per il costo del biglietto al km
2. SE il passeggero ha meno di 18 anni si applica uno sconto del 20% 
    ALTRIMENTI SE il passeggero ha più di 65 anni si applica uno sconto del 40%
3. Preparo il messaggio da stampare con il prezzo del biglietto con l'eventuale sconto.

### Output

Stampo il messaggio