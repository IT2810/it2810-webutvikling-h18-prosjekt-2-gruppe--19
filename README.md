## Innhold og funksjonalitet
 
Brukeren har et valg mellom 3 kategorier av bilder, 3 kategorier av tekst og 3 kategorier av lyd. Basert på disse valgene vil det bli generert en utstilling med 4 kombinasjoner av lyd, tekst og bilde. Hver kombinasjon vises som en separat side i et «tabs display». Brukeren kan alltid endre sine valg av kategorier og utstillingen vil så endre seg i samsvar med valgene som blir gjort. 

I oppgaven står det at bildene skal være grafikk i svg-filer, lyden bør være i mp3 og at tekstene kan være dikt, sanger e.l, men at de skal lagres i en json-fil. Alle disse kravene er oppfylt og prosjektet vårt inneholder 12 svg-filer, 12 mp3-filer (lagret lokalt i public/assets) og til slutt 12 dikt som er lagret i en og samme json-fil. I tillegg har vi lagret stiene til både svg- og mp3-filene i denne json-filen slik at vi får en fin oversikt over de ulike filene i prosjektet vårt. 

 
## Teknologi

### REACT

Løsningen er basert på REACT og JSX. Vi benytter Node.js til å sette opp utviklings- og server-miljøet for REACT-applikasjonen. I løsningen vår har vi implementert fire forskjellig komponenter ved bruk av ES6 klasser som er organisert slik at App er parent-component til Artboard, Selector og Navbar. Hele UI-et til nettsiden er implementert med JSX i REACT-komponentene våre. 

I state-objektet til App holder vi styr på hvilke bilde-, lyd-, og tekst-kategorier som er valgt. I tillegg ser den om skjemaet for valg av kategorier skal vises i mobil-modus og hvilken “tab” som for øyeblikket er valgt. Disse oppdateres ved å kopiere tilstandsvariabler fra Selector- og Nav-komponentene til props som videre blir sendt til App-komponenten. Denne informasjonen sendes videre til Artboard-komponenten via props som Artboard bruker til å oppdatere sitt eget tilstandsobjekt med detaljer om hvilket bilde, lydfil og teskt som skal hentes.

### AJAX

Både SVG-filene og tekstene lastes dynamisk med AJAX gjennom funksjonene loadSVG og loadJSON. Filene lastes bare når kombinasjonen de blir brukt i vises. Når filen først blir lest, vil den bli lagret på klienten. Dette gjorde vi ved å lagre informasjonen vi lastet underveis i komponenten. Lyd blir håndtert med HTML-5-taggen og det trengs dermed ingen implementasjon for håndtering av data. 

### RESPONSIVE WEB DESIGN

Nettsiden vår er designet etter Mobile First-prinsippet som vil si at vi begynte med å designe layout for mobile enheter. Vi benytter CSS media queries for å justere sideoppsettet når nettleserbredden er større enn 800 piksler. Da flyttes valgboksene fra å stå i samme kolonne som bilde og tekst til en separat kolonne til venstre for utstillingen. SVG-filene våre skaleres etter skjermstørrelse og vi bruker CSS grid til bl.a. å skalere tab-baren. Vi benytter Viewport for å skalere siden til enhetens skjermstørrelse.

### SAMARBEID, BRUK AV GIT, KODING

I koden benytter vi navnekonvensjonene lowerCamelCase for funksjoner og UpperCamelCase for klasser. Vi har brukt issues i GitHub for å lage deloppgaver og holde oversikt over hvem som jobber på hva. Commits som tilhører en issue har blitt tagget med issue-id slik at det tydelig kommer frem hvilke endringer som er gjort ifm. et issue.

### Testing

Underveis i utviklingsprosessen har det vært et sterkt mål om at nettsiden skal være responsiv, derfor har vi jevnlig testet for skalering på andre enheter med ulik skjermstørrelse i nettleseren. Dette har gitt mer kontroll over ønsket oppførsel for de ulike enhetene og/eller skjermstørrelsene.

Etter at vi fikk plassert nettsiden på en server ble det mye enklere for oss å teste om prosjektet vårt fungerte på ulike enheter. Vi kunne da teste nettsiden på mobiltelefonene våre. Her testet vi både horisontal og vertikal visning. 
Et eksempel på hva vi har testet er at på enheter med stor skjermstørrelse ville vi at kategori-valgene skulle ligge til venstre for selve “kunstverket”, mens på mobil så ville vi at det skulle være en dropdown-funksjon (lokalisert over “kunstverket”) hvor man kunne velge mellom å vise og å skjule kategoriene. Et annet eksempel er at vi ville at tabsene skulle ligge på samme rad uansett skjermstørrelse. Begge fungerte etter hvert slike vi hadde ønsket.

Det viser seg at oppførselen er slik vi vil at den skal være på de forskjellige enhetene våre, noe som hele tiden har vært målet. Enhetene vi har brukt til å teste med er: iPhone 8, LG G4, Macbook Pro 15’, HP Spectre og Microsoft Surface Pro 3.I tillegg fungerer nettsiden slik vi vil i samtlige nettlesere vi har prøvd. Dette inkluderer da chrome, safari, firefox og edge. 

## Kilder:
### SVG-filene
https://svgrepo.com

### Musikk-filene
https://freesound.org

### Dikt:
Eget materiale
