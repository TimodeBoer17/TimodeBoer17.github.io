const stages = [
  {
    name: 'Bij oma', place: 'De woonkamer', icon: 'search', teaser: 'Zoek uit wanneer Donald uit elkaar is gehaald.',
    story: [
      'Voor Marcs vijftigste wil oma eindelijk een foto waar iedereen op staat. Timo zet zijn telefoon klaar. Noa wil het schaakbord van tafel tillen. “Wacht,” zegt Sam. “Vorig jaar was ik een paard kwijt én beweerde ik dat ik gewonnen had.” Stijn maakt een foto van het bord. Dan kunnen ze hun potje straks afmaken.',
      'Marlon heeft de fietsroute op blauwe vellen geprint. Hij houdt er een omhoog als Veerle een foto maakt. Daarna helpt Veerle Marc met de fietsen. Oma wil Donald erbij halen voor de foto. Bij het kerstspel krijgt ieder jaar iemand die kartonnen eend mee naar huis. Marc heeft hem een keer de hele avond op schoot gehad.',
      'Op de kast ligt alleen een stukje geel papier. Marianne komt binnen met de taart en voelt iets kraken onder haar pantoffel. Een gele snavel. Oma kijkt onder de kast. Daar ligt Donald. Zijn kop ligt los naast zijn lijf. Marc kijkt op de klok. Het is 09.16 uur.'
    ],
    clues: [
      ['Veerles foto terugkijken', 'Veerle heeft om 09.10 uur een foto gemaakt. Achter Marlons schouder staat Donald nog rechtop op de kast. Zijn kop en snavel zitten er nog aan.'],
      ['Het kaartje aan Boelies halsband', 'Boelie, oma’s oranje kater, schuurt langs Marcs been. Aan zijn halsband hangt een kaartje met een eenhoorn. Marc maakt het rode lint los en bewaart het kaartje. Aan een hoek mist een stukje.', 'kaart'],
      ['Wat er onder de kast ligt', 'Marianne haalt een zwarte linkerhandschoen en een hoekje blauw papier onder de kast vandaan. Op het papier staat een bruine streep. Ambriel herkent de handschoen aan het stiksel bij de duim. Die is van Wessel. Het gele stukje van de kast gaat in een apart zakje.']
    ],
    question: 'Wat weet Marc zeker?',
    answers: ['Wessel heeft de handschoen tussen 09.10 en 09.16 uur laten vallen.', 'Donald is tussen 09.10 en 09.16 uur uit elkaar gehaald.', 'Het gele stukje op de kast komt van Donalds snavel.'], correct: 1,
    hint: 'Hoe laat stond Donald nog heel op de kast? Hoe laat vond oma hem?',
    feedback: 'Marc schrijft de twee tijden op. Wessel is al op weg met Guus. Marc belt om te vragen waar ze zijn. “Bij het gemaal,” zegt Guus. “Neem die handschoen maar mee. Ik heb iets wat jullie moeten zien.”',
    next: 'Fiets naar de koffiestop'
  },
  {
    name: 'Koffie op de dijk', place: 'Het bankje bij het gemaal', icon: 'bike', teaser: 'Controleer of Wessel bij oma kon zijn.', photo: 'koffiestop',
    story: [
      'Noa rijdt voorop tegen de wind in. Bij het gemaal houdt Guus twee bekertjes vast terwijl Wessel koffie inschenkt. Marc legt de handschoen op het bankje. “Waar heb jij die nou gevonden?” vraagt Wessel.',
      'Imme schenkt Casper bij. “Ook de koude kant heeft recht op warme koffie.” Casper blaast in zijn bekertje. “Als ambtenaar ben ik altijd vóór een koffiepauze.”'
    ],
    clues: [
      ['Guus laat zijn filmpje zien', 'Om 09.08 uur begon Guus te filmen. Een kudde schapen stond midden op het fietspad. Wessel staat het hele filmpje bij hetzelfde hek. Pas om 09.18 uur loopt het laatste lam voorbij.', 'opname'],
      ['Hoe ver is het rijden?', 'Noa kijkt op haar fietscomputer. Vanaf oma hebben ze een halfuur gefietst.'],
      ['Ambriel weet hoe de handschoen daar kwam', 'Ambriel had de linkerhandschoen vóór vertrek op de kast gelegd. Ze zag hoe Boelie ertegen tikte. De handschoen viel achter de kast. Toen ze naar buiten ging, lag hij er nog.'],
      ['Imme zag de blauwe kaarten', 'Op de kast lag een stapel blauwe routekaarten. Imme zette haar mok erop. "Casper en Sam pakten er een. Max trok het bovenste vel onder mijn mok vandaan. Toen werd zijn kaart nat." Marlon fietst alvast naar de Zeelandbrug. Hij heeft de kaarten geprint en heeft er vast nog een over.']
    ],
    question: 'Welke twee aanwijzingen laten zien dat Wessel bij het gemaal was toen Donald uit elkaar werd gehaald?',
    answers: ['De rit naar het gemaal duurde een halfuur.', 'Wessel heeft bij de koffiestop koffie ingeschonken.', 'Guus filmde Wessel van 09.08 tot 09.18 uur bij het hek.', 'Ambriel heeft de handschoen op de kast gelegd.'], correct: [0, 2],
    hint: 'Zoek één aanwijzing over de tijd op het filmpje en één over de afstand tot oma.',
    feedback: '“De handschoen was bij oma, jij was bij de schapen.” Marc geeft Wessel zijn handschoen terug. Daarna haalt hij het blauwe stukje uit zijn jaszak. Zou die bruine streep ook van een koffiemok zijn? Bij de Zeelandbrug kan hij het naast een routekaart leggen.',
    next: 'Fiets naar de Zeelandbrug'
  },
  {
    name: 'Bij de Zeelandbrug', place: 'Het bankje aan het water', icon: 'bridge', teaser: 'Zoek uit waar het blauwe stukje papier vandaan komt.',
    story: [
      'Bij de Zeelandbrug waait het hard. Noa houdt het blauwe stukje met haar duim op het bankje. Marlon legt er een routekaart naast. De kleur is hetzelfde. Maar van wie is het stukje?'
    ],
    clues: [
      ['Marlon pakt zijn stapel kaarten', 'Alle routekaarten zijn op hetzelfde blauwe papier geprint. Op de kaarten staat waar ze straks weer afspreken: Speelpark De Molen.'],
      ['Max vouwt zijn kaart open', 'Aan zijn kaart mist een hoek. Noa schuift het blauwe stukje tegen de kaart aan. De scheur past precies. Max weet nog dat de natte hoek aan de kast bleef plakken. Toen hij verder trok, scheurde het stukje los en viel het achter de kast.', 'snippers'],
      ['De bruine streep op het stukje', 'Op de kaart van Max staat ook een bruine streep. Als Noa het stukje goed legt, vormen de twee strepen samen een kring. Net zo groot als de onderkant van Immes mok.'],
      ['Noa zag Max nog een keer bij de kast', 'Even later zag Noa Max daar met geel papier. Marc laat hem het gele stukje uit het zakje zien. “Dat herken ik,” zegt Max. “Stijn heeft er een foto van.” Stijn fietst al met Sam naar het speelpark.']
    ],
    question: 'Welke twee dingen passen precies als je het blauwe stukje naast de kaart van Max legt?',
    answers: ['Op het losse stukje staat dezelfde route.', 'De scheur van het stukje past aan de kaart.', 'De bruine strepen vormen samen een kring.', 'Het stukje en de kaart lagen allebei onder de kast.'], correct: [1, 2],
    hint: 'De kleur is bij alle kaarten hetzelfde. Kijk naar de rand en naar de vlek.',
    feedback: 'Marc geeft Max zijn hoekje terug. Daarmee weet hij waar het blauwe papier vandaan komt. Waarom Max bij de kast stond, weet hij nog niet. Marc neemt het gele papier mee naar het speelpark.',
    next: 'Fiets naar Speelpark De Molen'
  },
  {
    name: 'Speelpark De Molen', place: 'De picknicktafel bij de ingang', icon: 'windmill', teaser: 'Vergelijk wat je vond met twee foto’s.',
    story: [
      'Stijn zit bij de ingang op de picknicktafel. Hij laat Max raden of er meer spaken in zijn voorwiel of in zijn achterwiel zitten. Sam komt er met drie bekers water bij. “Als jullie lang genoeg tellen, komt de taart vanzelf hierheen.”',
      'Marc legt het gele stukje neer. Stijn zoekt zijn foto van het molentje. Intussen stuurt Marianne ook een foto. Ze heeft Donald op een schoon bord gezet. Onder zijn voet zat nog een stukje wit karton.'
    ],
    clues: [
      ['De foto van het gele molentje', 'Max heeft voor Marcs fiets een geel papieren molentje gemaakt. Eén punt stak te ver uit. Daarom knipte hij die korter. Stijn maakte daar een foto van. Het stukje uit het zakje past precies aan die punt. Max had het na het knippen op de kast gelegd.', 'knutselbon'],
      ['De foto van Donalds voet', 'Op het witte stukje onder Donalds voet staat een halve paarse ster. Op Boelies kaartje staat ook een halve ster. Marc houdt het kaartje naast de foto. Het ontbrekende hoekje is precies even groot en de twee sterrenhelften passen aan elkaar.'],
      ['Het bericht in Boelies kaartje', 'Marc vouwt het kaartje verder open. Er staat: “Donald mag met pensioen. Met kerst verzinnen we iets nieuws.” Er staat geen naam bij.']
    ],
    question: 'Welke twee dingen kun je na het bekijken van de foto’s zeggen?',
    answers: ['Het gele stukje komt van het molentje van Max.', 'Het witte stukje komt van Boelies kaartje.', 'Max stond bij de kast toen Donald van de plank verdween.', 'Marianne schreef het bericht in het kaartje.'], correct: [0, 1],
    hint: 'Zoek voor elk stukje uit waar het aan vastzat.',
    feedback: 'Het gele stukje heeft zijn plek terug. En het kaartje aan Boelies halsband moet bij Donald zijn geweest. Sam gaat rechtop zitten. “Veerle maakte ook een filmpje toen we de familiefoto oefenden. Misschien staat de kast erop.” Ze is bij de tennisclub. Marc stuurt Timo, die bij oma is, ook een bericht om zijn foto’s te bekijken.',
    next: 'Ga naar de tennisclub'
  },
  {
    name: 'Aan de tennisbaan', place: 'Het terras van de tennisclub', icon: 'tennis', teaser: 'Zoek de twee foto’s die de meeste duidelijkheid geven.',
    story: [
      'Op het terras stopt Marc een wegrollende tennisbal met zijn voet. Terwijl ze wachten op de foto’s van Timo, laat Veerle een schermafbeelding uit de familiechat zien. Daarop staat een bericht van Sam, vlak voordat oma Donald vond.',
      'Timo stuurt twee testfoto’s voor de familiefoto. Je ziet de kast op allebei. De deur en de vloer onder de kast staan buiten beeld.'
    ],
    clues: [
      ['De foto met de lege plek', 'Timo ziet aan zijn foto dat hij de telefoon iets hoger moet zetten voor de groepsfoto.', 'foto-twee'],
      ['Veerles foto bij het vertrek', 'Deze foto kennen jullie al. Om 09.10 uur hield Marlon zijn blauwe routekaart omhoog. Achter hem staat Donald nog op de kast.'],
      ['De foto met Donald op de kast', 'Timo had de timer aangezet. Hij ging zelf naar de keuken om plaats te maken voor de foto. Op het beeld zitten Donalds kop en snavel er nog aan.', 'foto-een'],
      ['Mariannes foto van Donald op het bord', 'Om 09.17 uur maakte Marianne de foto waarop je het witte hoekje onder Donalds voet ziet. Donald ligt dan al op het bord.'],
      ['Sams bericht aan Stijn', '“Die mag voor kerst echt weg 😂”, stuurde Sam om 09.15 uur. Op het scherm zie je alleen zijn reactie. Marc wil Stijn vragen waar Sam het over had.']
    ],
    question: 'Met welke twee foto’s kun je het best bepalen wanneer Donald van de kast verdween?',
    answers: ['Veerles foto van 09.10 uur.', 'Timo’s foto van 09.13 uur.', 'Timo’s foto van 09.15 uur.', 'Mariannes foto van 09.17 uur.'], correct: [1, 2],
    hint: 'Zoek de laatste foto waarop Donald er nog staat en de eerste waarop hij weg is.',
    feedback: 'Om 09.13 uur stond Donald nog op de kast. Om 09.15 uur was de plek leeg. Op Veerles filmpje van de familiefoto staat de kast niet. Ze weet wel dat Stijn in diezelfde minuten in de keuken filmde. Hij is inmiddels bij oma’s schuur. Noa moet daar even haar fietsketting rechtleggen.',
    next: 'Fiets naar oma’s schuur'
  },
  {
    name: 'In oma’s schuur', place: 'Tussen de fietsen', icon: 'shed', teaser: 'Zoek uit wie in die twee minuten bij Donald konden komen.',
    story: [
      'Sam houdt Noa’s fiets vast terwijl Ambriel aan de pedalen draait. “De tweede keer vandaag,” zegt Noa. Stijn legt zijn telefoon op de werkbank. Op zijn filmpje van vanmorgen is achter de fiets ook de deur naar de woonkamer te zien.'
    ],
    clues: [
      ['Wat op Stijns filmpje staat', 'Om 09.12 uur filmt Stijn eerst de lege woonkamer. Hij loopt dan naar de keuken om Sam en de fiets te filmen. De open keukendeur staat de hele tijd in beeld. De kast zie je vanaf daar niet.', 'keukendeur'],
      ['Welke deuren oma had dichtgedaan', 'De woonkamer heeft ook een deur naar de gang. Oma had die op slot gedaan toen Boelie vanaf zijn mand in de gang steeds de woonkamer in glipte. De gangdeur bleef tot het vinden van Donald op slot. Via de keuken kon je er wel in.'],
      ['Noa en Ambriel over Sam', 'Op het filmpje zie je Sam naast Noa en Ambriel de fiets vasthouden, vanaf het begin tot oma Donald vindt. Stijn laat ook zien waar Sam op reageerde. Op die foto staat Sams kapotte kersttrui. Noa hield zijn telefoon vast toen hij het bericht stuurde.'],
      ['Waarom Imme en Casper naar binnen liepen', 'Imme zegt dat ze haar telefoon van de bank haalde. Casper zegt dat zijn koffie op de vensterbank stond. Op het filmpje dragen ze die spullen allebei mee terug naar de keuken.']
    ],
    question: 'Wie konden er tussen 09.13 en 09.15 uur bij de kast komen?',
    answers: ['Sam', 'Casper', 'Imme', 'Oma'], correct: [1, 2],
    hint: 'Gebruik de tijden van Timo’s foto’s. Welke deur was open, en wie zie je dan naar binnen gaan?',
    feedback: 'Casper en Imme liepen de woonkamer in toen Donald van de kast verdween. Hun koffie en telefoon verklaren waarom ze daar waren. Marc wil weten wat ze over de losse kop weten. Binnen staat Donald klaar op Mariannes bord.',
    next: 'Ga naar de keukentafel'
  },
  {
    name: 'Terug bij oma', place: 'De keukentafel', icon: 'folder', teaser: 'Vergelijk wat iedereen zei met wat er onder de pet zit.', photo: 'keukentafel',
    story: [
      'Marianne zet het bord met Donald tussen Marc en oma in. De pet zit nog op de losse kop. Marc vraagt aan tafel wie weet hoe hij Donald weer in elkaar kan zetten. Pas als ze zijn uitgepraat, tilt oma de pet op.'
    ],
    clues: [
      ['Wat oma en Imme zeggen', 'Oma vertelt dat de kop met een klein metalen pennetje vastzit. Dat gebruikt ze ieder jaar als ze Donald inpakt. Imme herkent het rode lint van Boelies kaartje. Die ochtend knipte ze voor oma een stuk lint voor de cadeaus. Het losse eindje liet ze naast de schaar liggen.'],
      ['Wat Casper zegt als Marc de pet vastpakt', 'Marc zet zijn duim tegen de rand van de pet. “Voorzichtig met trekken,” zegt Casper. “Dan trek je die twee knopen alleen maar strakker.”'],
      ['Wat oma onder de pet vindt', 'Onder de pet zit rood lint. Het zit met twee knopen om het metalen pennetje. Het lint ligt helemaal onder de pet. Marianne heeft Donald met pet en al op het bord gelegd. De schuine knip past precies tegen die van het lint aan Boelies kaartje.']
    ],
    question: 'Welke twee aanwijzingen wijzen samen naar de dader?',
    answers: ['Wie tijdens die twee minuten bij de kast kon komen.', 'Wie het rode lint ’s ochtends had geknipt.', 'Wie vóór het optillen al wist hoe het lint onder de pet zat.', 'Wie wist dat Donalds kop met een pennetje vastzat.'], correct: [0, 2],
    hint: 'Het pennetje zat er al jaren. Let op wie op het juiste moment bij Donald kon komen én vóór het optillen iets wist over het nieuwe lint.',
    feedback: 'Het filmpje laat zien wie de kans had. De pet laat zien wie iets wist over Donald dat je van buiten niet kon zien. Leg die twee sporen vast in je oplossing, dan kan Marianne de taart aansnijden.',
    next: 'Vul je oplossing in'
  }
];

const fields = [
  ['Wie heeft Donald uit elkaar gehaald?', ['Noa', 'Wessel', 'Guus', 'Casper', 'Max', 'Sam', 'Veerle', 'Stijn', 'Timo', 'Marlon', 'Imme', 'Ambriel'], 3],
  ['Waarom haalde die persoon Donald uit elkaar?', ['Om de fietsroute te veranderen', 'Om bij het kerstspel eens iets nieuws te krijgen', 'Om Donald voor zichzelf te houden'], 1],
  ['Welk bewijs wijst het sterkst naar die persoon?', [
    'Een blauwe kaart en de plek van het hoekje',
    'De tijd bij de kast en de verborgen knopen',
    'De tijd bij de kast en het knippen van het lint',
    'Het kerstplan en de plek van het pennetje'
  ], 1]
];

const endingStory = {
  intro: 'Casper kijkt naar de twee stukken lint. “Betrapt. Donald heeft de vorige keer elf maanden in mijn meterkast gestaan. Elke keer als ik de meterstand opnam, keek ik in die snavel. Ik wilde hem met pensioen sturen.”',
  paragraphs: [
    'Casper wilde Donald een rood lintje omdoen. Hij pakte het afgeknipte stukje bij de schaar en haalde Donalds kop los om het lint vast te knopen. Toen hij Imme hoorde, schoof hij de eend onder de kast. Hij had zijn kaartje met een stukje plakband tegen Donalds voet gezet. Toen hij het wegtrok, bleef er een hoekje plakken. Hij nam de rest mee en strikte die in de gang aan Boelies halsband.',
    'Marc loopt de andere sporen langs. Boelie tikte Wessels handschoen van de kast. Max verloor de blauwe hoek toen hij zijn natte routekaart pakte. Het gele papier hoorde bij zijn molentje. Sam had het over zijn kersttrui. En Imme haalde haar telefoon, zoals het filmpje liet zien.',
    'Marc schuift Donald en het pennetje naar Casper. “Even maken voor de foto.” Max en Sam delen een stoel en Marianne houdt de taartstandaard recht. Casper krijgt Donald weer op schoot. Precies als Timo’s timer afgaat, ploft er een aardbei in Caspers koffie.'
  ],
  epilogue: 'Oma bekijkt de foto. “Afblijven, Timo. Deze wil ik hebben.” Op de achterkant schrijft ze “Vijftig jaar. Iedereen erop.”'
};
