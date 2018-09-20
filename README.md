# Valg og løsninger med tanke på funksjonalitet:

## Krav til innhold og funksjonalitet på websiden
Brukeren skal kunne velge blant 3 kategorier av bilder, 3 kategorier av lyd og 3 kategorier av tekst, og basert på disse valgene få generert en utstilling med minimum 4 kombinasjoner av et bilde, en tekst og en lyd. Hver kombinasjon skal vises som separat side i et «tabs display» eller tilsvarende løsning som egner seg for å bla mellom de 4 kombinasjonene. Brukeren skal kunne endre på kategorivalgene og få en ny utstilling ved endring.

Se utkast til layout her

, men dette er bare ment som eksempel. Gruppene står fritt til å gjøre det annerledes. 
Startsiden kan være en tilfeldig generert utstilling, eller en tom utstilling med velkomsttekst.

For å komme i gang må dere lage en samling av bilder, lyd og tekst (dikt, sangtekster, haiku). Dere trenger minimum 12 filer av hver, siden dere skal h 3 kategorier á 4 bilder.  Med 3 personer i hver gruppe så kan dere jo ta en medietype hver.

Bildene skal være grafikk i svg-filer (xml-data). Kan lages manuelt, bruk en online editor eller benytt svg-filer du finner på web. 
Lyden bør være i mp3 og ikke bruk for store filer. Det er mye lyd å finne på web (eks. Freesound), dere kan bruke musikk, eller spille inn lyder selv.
Teksten kan våre dikt, sangtekster eller hvilken som helst annen tekst som kan egne seg. Teksten skal være lagret i json (hvordan den er strukturert er opp til dere).  Det finnes flere online databaser og andre kilider for dikt m.m. eksempelvis poetryfoundation.org
Filer lagres lokalt sammen med øvrige kildefiler i denne oppgaven og disse kan grupperes på medietype og kategori i kataloger slik at det er enkelt å generere webadresser til filene ut fra brukervalgene. Filene skal også ligge på github slik at de blir en del av innleveringen.

Siden skal ha responsiv web-design (se under krav til teknologi). 

Merk at github repositoriet i perioder kan være public, at webapplikasjonen vil være offentlig tilgjengelig via den virtuelle maskinen etc. Ikke bruk data som du ikke har rettigheter til, og hvis du bruker åpne data skal du respektere rettigheter og navngi kilde/opphavsmann i hht lisensen. 

Det stilles ingen spesifikke krav til kompleksitet i dataene eller kunstnerisk sinnelag. Implementasjonsutfordringene vil være de samme enten dataene er enkle eller komplekse. 

Du finner en skisse av en layout her

, men dette er et eksempel på hvordan og ikke noe dere må følge.








# Valg og løsninger med tanke på teknologi:


## Krav til bruk av teknologi

### REACT

Løsningen skal baseres på React (og JSX). 
Bruk ES6 (Javascript) og implementer komponentene med class, og implementere en hesiktsmessig komponentstruktur.
Bruk kun de ordinære mekanismene i React for å lagre håndtere og lagre data (du skal mao ikke bruke løsninger som redux, mobx eller andre bibliotek for å håndtere tilstand).
UI-komponentene skal implementeres fra bunne av (uten bruk av tredjeparts komponenter).

### AJAX

Bildene (i svg) og teksten (i json) skal lastes dynamisk med AJAX (Asynchronous JavaScript And XML). Du står fritt i valg av tredjeparts javascript-bibliotek for dette.
Filene skal lastes kun hvis de benyttes. Dvs. at filer brukt i en kombinasjon først lastes når denne kombinasjonen vises (eksempelvis når en bruker velger denne tabben). Når filen først er lest, så skal innholdet lagres på klienten slik at de ikke blir å lastes flere ganger hvis en bruker blar frem og tilbake i en utstilling.
Lyd håndterer du med audio-taggen fra HTML5 og da trenger du ikke implementere noe spesifikt for å laste data
(noen lurer sikker på hvorfor vi ikke bare bruker <img> for svg bildene, men målet med oppgaven er å gi erfaring i ajax-call og hente inn både xml- og json-data).

### RESPONSIVE WEB DESIGN

Løsningen skal implementeres med responsiv design som tilpasser seg skjermens størrelse og orientering, og plattform.
Skal skifte layout mellom breddeformat (f.eks. bilde og tekst ved siden av hverandre) og høydeformat (bilde med teksten under f.eks.). Bredde vs. høyde kan også demonstreres med andre elementer enn tekst og bilde.
Følgende elementer skal være med i løsningen (eventuelt begrunnet i dokumentasjonen hvis det ikke er tatt med)
Viewport
Media-queries
Bilder som skalerer
Flytende/fleksibel layout
Dette skal implementeres fra bunnen av uten bruk av eksterne CSS-rammeverk ea.

### SAMARBEID, BRUK AV GIT, KODING, LEVERANSE

Koden i prosjektet skal være ryddig strukturert, ha fornuftig kommentering og ha navngiving av komponenter, variabler og funksjoner i tråd med anbefalinger (best practise).
Gruppa skal bruke git i utviklingen (lenke til repository i github classroom kommer når gruppene er bestemt). Utviklingen skal dekomponeres i task som hver beskrives kort med en issue. Commits markeres med hvilken issue de bidrar til/løser. 
Ved innleveringsfristen vil github classroom automtisk lagre en snapshot av prosjektet som blir den formelle innleveringen. 
På evalueringsdagen 24/9 skal siste versjon av systemet være tilgjengelig på den virtuelle maskinen som gruppa har fått tildelt. Prosjektet gjøres tilgjenglig som xxxx.idi.ntnu.no/prosjekt1. Lag en production build som legges under Apache web serveren som lytter på port 80. 

### Node.js og NPM

Installer Node.js (inkluderer npm node package manager) på egen maskin
Bruk pakken create-react-app for å komme i gang (bruk kommandoen "npx create-react-app mittprosjektnavn"
