Zoë Kostopoulos 
500703647
Klas 204 

# Frontend voor designers


## [Opdracht 1](frontend_opdracht1/): 
Na het maken van de eerste opdracht (favoriete films opslaan) was het nog niet helemaal duidelijk waar de favorieten heen gingen. Tijdens de les kreeg ik de tip om een interactie bij het kopje "mijn favorieten' te maken. Ik heb hiervoor een variable aangemaakt in de [code](frontend_opdracht1/js/like.js) (regel: 13) en bij elke eerste klik op een hartje, deed ik de variable een ++ (regel: 21, 32, 43, 54). Vervolgens liet ik middels een innerHTML het nieuwe aantal likes weergegeven worden (regel: 25, 36, 47, 58). Bij het liken wordt het hartje rood en als je nog een keer klikt wordt hij weer leeg. Dit heb ik gedaan door een CSS-class 'liked' toe te voegen (regel: 18, 29, 40, 51) en daarbij controleren of die class al aanwezig was of niet (regel: 19, 30, 41, 52). 


## [Opdracht 2](frontend_opdracht2/) :



## [Opdracht 3](frontend_opdracht3/) :
Voor het inladen van de JSON voor opdracht 3 heb ik zorgvuldig de tutorial gevolgd, dit ging in 1 keer goed. Om de JSON versie te laten werken met het liken en opslaan van de films heb ik een class toegevoegd aan elke individuele film met zijn eigen ID/getal. Omdat ik wist dat het 6 films waren heb ik 6 maal dezelfde functie voor elke film geschreven. 
Wat opviel tijdens het maken was dat de teller in de nav-bar niet meer werkte. Zelfs toen ik alle code onderelkaar op volgorde ging zetten werkte dit niet. Dit had in mijn geval waarschijnlijk te maken met het feit dat de variabelen en de functies voor alle films eerder werden ingeladen dan de JSON zelf. Dit gaf een foutmelding "film x undefined", o.i.d. Ik heb dit opgelost door de code uit like.js in een time-out te stoppen, zodat het programma genoeg tijd had om de films in te laden. Het was voor mij de enige werkende oplossing. 
