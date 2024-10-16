# Karakterhenter

Dette prosjektet er en enkel web applikasjon som henter og viser informasjon om karakterer fra Dattebayo API av brukerens input.

## Hvordan bruke
1. Skriv inn navnet på en karakter i input-feltet.
2. Klikk på "Hent" knappen.
3. Karakterens navn og bilde vil bli vist hvis funnet. Hvis ikke, vil en feilmelding vises.


## HTML elementer
fetchButton: Knappen som utløser henteoperasjonen.
resultDiv: Div-en hvor den hentede karakterens informasjon vil bli vist.


## Liten forklaring for fetchData()
Denne funksjonen utløses når hente-knappen klikkes. Den utfører følgende trinn:
1. Henter karakterens navn fra input-feltet.
2. Sjekker om input-feltet ikke er tomt.
3. Sender en GET-forespørsel til Dattebayo API med karakterens navn.
4. Behandler responsen:
    - Hvis en karakter blir funnet, vises karakterens navn og bilde.
    - Hvis ingen karakter blir funnet, vises en feilmelding.
5. Håndterer eventuelle feil som oppstår under henteoperasjonen.

