FizzBuzz
===

## js-fizzbuzz

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
**Consigli del giorno:**
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
## BONUS:
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
Applica stili differenti agli elementi aggiunti al DOM, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## SVOLGIMENTO 

1. scrivere un for con indice che parte da 1 e finisce a indice 100
1. scrivere un if che controlla se sono divisibili di 3 e 5 insieme.
1. un else if che controlla se sono dvisibili solo di 3
1. un secondo else if che controlla se sono divisibili di 5
1. e un else finale per i numeri che non sono divisibili ne di 3 ne di 5
1. scrivere in html un big-box che contiene tutti i box più piccoli
1.creare una classe box su css che uso su js dopo aver creato un div dentro a big-box
1. creare altre 3 classi con i background, 1 per ogni if
