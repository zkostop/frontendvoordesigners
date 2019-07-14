Zoë Kostopoulos 
500703647
Klas 204 

# Frontend voor designers


## [Opdracht 1](frontend_opdracht1/): 
Na het maken van de eerste opdracht (favoriete films opslaan) was het nog niet helemaal duidelijk waar de favorieten heen gingen. Tijdens de les kreeg ik de tip om een interactie bij het kopje "mijn favorieten' te maken. Ik heb hiervoor een variable aangemaakt in de [code](frontend_opdracht1/js/like.js) (regel: 13) en bij elke eerste klik op een hartje, deed ik de variable een ++ (regel: 21, 32, 43, 54). Vervolgens liet ik middels een innerHTML het nieuwe aantal likes weergegeven worden (regel: 25, 36, 47, 58). Bij het liken wordt het hartje rood en als je nog een keer klikt wordt hij weer leeg. Dit heb ik gedaan door een CSS-class 'liked' toe te voegen (regel: 18, 29, 40, 51) en daarbij controleren of die class al aanwezig was of niet (regel: 19, 30, 41, 52). 

## Principes: 

#### 04: Keep users in control 
Ik heb deze principe toegepast door de gebruiker zelf de keuze te geven om iets op te slaan of niet. De gebruiker kan ook de film weghalen uit de lijst van favorieten door simpel weer op het hartje te drukken. Het hartje is simpel en duidelijk genoeg voor de gebruikers. 

#### 11: Strong visual hierarchies work best
Ik heb dit toegepast door blokken onder elkaar te zetten met de verschillende films erin. De gebruikers kunnen zo makkelijk door de lijst heen scrollen en duidelijk zien wat het aanbod is. De header zorgt voor een samenhangend gevoel en zorgt ervoor dat alles bij elkaar past. De kleuren zorgen er ook voor dat het samenhangt.


## [Opdracht 2](frontend_opdracht2/) :
Het maken van deze opdracht was vrij simpel en snel gemaakt. Ik heb gekozen voor een simpele interactie die bestuurbaar is door middel van het indrukken van de pijltjes op het toetsenbord. Wanneer de gebruiker op het pijltje naar boven drukt, gaat de website weer terug naar het begin. Wanneer de gebruiker op het pijltje naar beneden drukt, gaat de website naar het eindpunt. Hier heb ik een tutorial gevolgd. Na 1 keer testen werkte de code goed en was het niet nodig om hier verder aan te werken. 

## Principes: 

#### 4: Keep the users in control
De gebruiker is hier zeker in 'control'. De gebruiker kan namelijk zelf de website besturen op een gemakkelijke manier. 

#### 8: Provide a natural next step 
Veel mensen vinden het makkelijk om via de pijltjes bepaalde interacties op te wekken op een computer. Het besturen zal de gebruikers dan ook zeker niet verbazen en zullen ze er hard over na moeten denken voordat zij dit uitproberen.


## [Opdracht 3](frontend_opdracht3/) :
Voor het inladen van de JSON voor opdracht 3 heb ik zorgvuldig de tutorial gevolgd, dit ging in 1 keer goed. Om de JSON versie te laten werken met het liken en opslaan van de films heb ik een [class](frontend_opdracht3/js/like.js) (regel 14 t/m 19) toegevoegd aan elke individuele film met zijn eigen ID/getal. Omdat ik wist dat het 6 films waren heb ik 6 maal dezelfde functie voor elke film geschreven. 
Wat opviel tijdens het maken was dat de teller in de nav-bar niet meer werkte. Zelfs toen ik alle code onderelkaar op volgorde ging zetten werkte dit niet. Dit had in mijn geval waarschijnlijk te maken met het feit dat de variabelen en de functies voor alle films eerder werden ingeladen dan de JSON zelf. Dit gaf een foutmelding "film x undefined", o.i.d. Ik heb dit opgelost door de [code](frontend_opdracht3/js/like.js)(regel 5, 87) uit like.js in een time-out te stoppen, zodat het programma genoeg tijd had om de films in te laden. Het was voor mij de enige werkende oplossing. 

## Principes:

#### 9: Appearance follows behavior
Gebruikers willen niet graag voor verassingen staan en moeten duidelijkheid hebben van de interacties die zij voor hen krijgen. Het aanklikken van een hartje zou dus zeker gepast zijn. De gebruikers verwachten namelijk dat het hartje ingekleurd zal worden en bij nog een keer aanklikken weer leeg wordt. 

#### 11: Strong visual hierarchies work best
Door de ingeladen JSON op een overzichtelijke manier in de website neer te zetten wordt het fijner voor de gebruiker om het overzicht te zien. De blokken onderelkaar zijn simpel, lijken op elkaar en de gebruiker weet wat hij zal verwachten. Het inladen ziet er overzichtelijk uit en er hoeft niet veel moeite gedaan te worden om het aan te passen. 

#### keuze valt voor deze opdracht:
De website is overzichtelijk, voldoet aan de eisen van de principes en is het fijnste om naar te kijken. De manier van vormgeving spreekt mij het meeste aan omdat het opelkaar lijkt, overzichtelijk is en lijkt op andere sites waar je een film zou bekijken.

