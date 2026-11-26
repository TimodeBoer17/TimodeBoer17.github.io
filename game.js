const stages = [
  {
    name: 'Bij oma', place: 'De woonkamer', icon: 'search', teaser: 'Zoek uit wanneer Donald van de kast is gehaald.',
    story: [
      'Oma wil voor Marcs vijftigste één foto waarop iedereen aan tafel zit. Vorig jaar stond er alleen een lege stoel op de plek van de fotograaf. Timo zet zijn telefoon op de schoorsteenmantel. Noa schuift een stoel bij en wil het schaakbord van tafel tillen. ‘Wacht even’, zegt Sam. ‘Voor ik straks weer moet uitleggen waar mijn paard stond.’ Stijn maakt met zijn telefoon een foto van het bord. Dan helpt hij Noa de tafel vrij te maken.',
      'Aan het andere eind van de tafel vouwt Casper de route uit die Marlon voor de fietstocht heeft getekend. Marlon draait de kaart een halve slag. ‘De zee ligt sinds gisteren nog steeds aan die kant.’ Bij de dijk staat een kruisje: daar wachten Wessel en Guus met de koffie. Marlon houdt de kaart voor zijn borst zodat Veerle de hele route in één keer kan fotograferen. Daarna gaat ze met Marc naar buiten. Hij tilt de fietsen uit de schuur en zij houdt het tuinhek voor hem open.',
      'Binnen schuift oma een opgevouwen bierviltje onder de wiebelende taartstandaard. Door het keukenraam ziet ze Marc tussen de fietsen staan. ‘Veerle, wil je straks ook een portret van Marc maken? Ik pak Donald erbij. Weet je nog dat hij met kerst de hele avond met die eend op schoot heeft gezeten?’',
      'Oma loopt naar de kast waar de kartonnen kersteend altijd staat. Op de plank ligt alleen een stukje geel papier. ‘Heeft iemand Donald verzet?’ Marianne komt met de verjaardagstaart uit de keuken. Onder haar pantoffel kraakt iets. Ze zet de bakvorm op de vensterbank en raapt een gele snavel op. Oma gaat op haar knieën zitten. Helemaal achter onder de kast ligt Donald, zijn kop los naast zijn lijf. Als Marc op oma’s roep binnenkomt, ziet hij op de keukenklok dat het 09.16 uur is.'
    ],
    clues: [
      ['Veerles foto terugkijken', '‘Wacht eens’, zegt Veerle. Ze opent de foto van de fietsroute en zoomt in op de plank achter Marlons schouder. Daar staat Donald, met zijn kop en snavel nog op hun plek. Ze veegt omhoog. De foto is om 09.10 uur gemaakt.'],
      ['Het kaartje aan Boelies halsband', 'Terwijl Marianne onder de kast kijkt, strijkt oma’s dikke oranje kater langs haar been. Aan zijn halsband tikt iets tegen de vloer. Marc kriebelt Boelie onder zijn kin en trekt het rode strikje los.', 'kaart'],
      ['Wat er onder de kast ligt', 'Marianne legt de snavel en Donalds kop op tafel. Met een houten lepel haalt ze ook een zwarte linkerhandschoen en een snipper blauw papier onder de kast vandaan. Over de snipper loopt een bruin boogje. Ambriel, die haar vriend Wessel vanmorgen met één blote hand heeft zien vertrekken, bukt naast Marianne. Ze herkent het stiksel op de duim. ‘Die is van Wessel. Ik heb hem gisteren op het tafeltje bij de voordeur gelegd.’']
    ],
    question: 'Wat kan Marc nu met zekerheid vastleggen?',
    answers: ['Wessel heeft zijn handschoen vanmorgen bij de kast laten vallen.', 'Tussen de foto en de vondst is Donald uit elkaar gehaald.', 'Degene die het kaartje schreef, heeft ook de foto gemaakt.'], correct: 1,
    hint: 'De foto en de vondst hebben allebei een tijdstip. Van de handschoen weet je alleen waar die gisteren lag.',
    feedback: 'Marc schrijft 09.10–09.16 op de envelop waarin zijn verjaardagskaart zat. Hij belt Guus en vraagt of Wessel bij hem is. ‘Wessel kan je zelf vertellen waar hij toen was’, zegt Guus door de telefoon. Op de achtergrond klappert een thermosdeksel. ‘Als jullie nog koffie willen, zou ik eens op de fiets stappen.’ Marc steekt de handschoen in zijn jaszak. De snipper blijft bij Donald op tafel.',
    next: 'Fiets naar de koffiestop'
  },
  {
    name: 'Koffie op de dijk', place: 'Het bankje bij het gemaal', icon: 'bike', teaser: 'Leg Wessel de handschoen voor.', photo: 'koffiestop',
    story: [
      'Veerle bergt haar telefoon op. Marianne en oma blijven bij de taart. Buiten houdt Imme de fietsen overeind terwijl Casper de map in zijn tas steekt. Noa neemt de kop tegen de wind in. Een halfuur later ziet Marc het bankje dat Casper op de kaart had aangekruist. Guus houdt twee bekertjes vast terwijl Wessel koffie inschenkt. Marc legt de handschoen op het bankje. Wessel past hem. ‘Waar heb jij die nou gevonden?’',
      'Marc vertelt wat er onder de kast lag en noemt de twee tijden. Guus zet zijn bekertjes neer. ‘Dan moet je even naar mijn telefoon kijken.’'
    ],
    clues: [
      ['Het filmpje op Guus’ telefoon', 'Om 09.08 uur begon over het fietspad bij het gemaal een kudde schapen te trekken. Guus heeft het hele oponthoud gefilmd. Marc schuift door de opname: vooraan, halverwege en als het laatste lam om 09.18 uur langsloopt, staat Wessel tegen hetzelfde hek. Het is één doorlopende opname. Oma woont een halfuur fietsen van hier.', 'opname'],
      ['Wie heeft de koffie ingepakt?', 'Wessel trekt de handschoen uit. ‘Ik had vanmorgen bij vertrek alleen de rechter. Vraag maar aan Imme. Die kwam de tweede thermoskan brengen.’ Imme schenkt Casper bij. ‘Ook de koude kant heeft recht op warme koffie’, zegt ze. ‘Alleen je eerste kop staat nog bij oma op de kast.’'],
      ['Wat Imme bij oma zag', 'Casper, de ambtenaar van de familie, houdt zijn tweede bekertje halverwege zijn mond stil. ‘Op de kast? Ik stond tot het vertrek buiten met de route.’ Imme schudt haar hoofd. ‘Ik zocht je juist buiten. Toen ik binnenkwam, stond je bij de kast met die blauwe map onder je arm. Je vroeg of ik je koffie op de kast wilde zetten.’ Marc vraagt hoe laat dat was. Imme opent het bericht dat ze op de drempel naar Guus stuurde: ‘We vertrekken zo.’ 09.13 uur.']
    ],
    question: 'Welke verklaring wil Marc bij oma controleren?',
    answers: ['Dat het tijdstip op Veerles foto verkeerd staat.', 'Dat Wessel zijn handschoen op de heenweg kan hebben verloren.', 'Dat Casper de hele tijd buiten met de route stond.'], correct: 2,
    hint: 'Guus kan Wessel op de dijk plaatsen. Wie heeft iemand in de woonkamer gezien?',
    feedback: 'Marc geeft Wessel de handschoen. ‘Die heb ik dus voor niks een halfuur in mijn zak gehad.’ Wessel trekt hem aan. ‘Ik ben anders blij dat je hem hebt meegenomen.’ Marc denkt terug aan het bruine boogje op de snipper. ‘Casper, heb je die map nog bij je?’ Casper tikt op zijn fietstas. Marc vraagt hem die straks mee naar binnen te nemen. Bij oma ligt het stukje papier waarmee hij iets kan vergelijken.',
    next: 'Rijd met Casper terug naar oma'
  },
  {
    name: 'Terug bij oma', place: 'De keukentafel', icon: 'folder', teaser: 'Leg de snipper naast de inhoud van de map.', photo: 'keukentafel',
    story: [
      'Voor ze weer opstappen, telt Noa de liefhebbers voor een laatste lus langs zee. Iedereen steekt een hand op, tot Marianne belt dat de taart klaarstaat. Nog nooit was de stemming zo snel omgeslagen. Bij oma schuift Sam met zijn hiel twee stoelen opzij om de fietsen door de gang te laten. Op de taartstandaard zakt een aardbei langzaam naar links. Marianne heeft een omgekeerd schoteltje over de snipper gezet, uit de buurt van Boelie. Casper legt zijn map op tafel. Marc schuift de taart een stukje opzij en maakt plaats voor de routekaart.'
    ],
    clues: [
      ['De routekaart uitvouwen', 'Onder de routekaart ligt een blauw vel met een getypte kop: ‘Voorstel voor het kerstspel’. Casper heeft het voor de familie geschreven. Elk jaar moet iemand Donald weer mee naar huis nemen en een jaar lang bewaren. Er staat één zin onderstreept: ‘Tijd voor een nieuwe surprise! 🙃’ Marc legt Boelies kaartje naast het vel. Op allebei staat dat gezichtje op zijn kop. Rechtsonder mist een hoek.'],
      ['De snipper aanleggen', 'Marc tilt het schoteltje op. Hij draait de snipper tot de rafels in de scheurrand vallen. Het bruine boogje sluit aan op de afdruk van een koffiekop. Het vel uit Caspers map heeft dus bij de kast gelegen. ‘Ik heb dat voorstel geschreven’, zegt Casper. ‘Daar kun je toch moeilijk een eend mee slopen?’', 'snippers'],
      ['Donald van dichtbij bekijken', 'Marc pakt de losse kop. ‘Zonde. Waarmee zou die vastgezeten hebben?’ Casper antwoordt meteen. ‘Met een splitpen. Als je dat linker pootje terugbuigt, past hij weer onder de matrozenpet.’ Marianne kijkt op van haar taartmes. Zij had de pet nog niet afgenomen. Marc tilt hem op. Er zit een splitpen onder. Het linker pootje is rechtgebogen.']
    ],
    question: 'Welk detail verbindt Casper aan het losmaken van de kop?',
    answers: ['Hij kon vóór Marc onder de pet keek precies aanwijzen welk pootje was verbogen.', 'Zijn voorstel om met de kerstsurprise te stoppen stond op blauw papier.', 'Imme heeft zijn kop koffie op de kast gezet.'], correct: 0,
    hint: 'Het papier verklaart wat Casper wilde. Wat wist hij over de toestand waarin Donald werd gevonden?',
    feedback: 'Marc legt de splitpen naast het kaartje en schuift Casper een stoel toe. De taart kan nog wel een minuut wachten.',
    next: 'Vertel aan tafel wat er is gebeurd'
  }
];

const paths = {search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',bike:'<circle cx="5" cy="16" r="4"/><circle cx="19" cy="16" r="4"/><path d="m5 16 5-9 5 9H5m5-9h6l3 9M8 5h4m3-1h3"/>',folder:'<path d="M2 7V5h7l3 3h10v12H2z"/>'};
const icon = key => '<svg aria-hidden="true" viewBox="0 0 24 24">'+paths[key]+'</svg>';
const key = 'kwarkie-dd050-v1';
let progress = 0;
try { const n = Number(localStorage.getItem(key)); if(Number.isInteger(n) && n >= 0 && n <= 4) progress=n; } catch {}
function save(n){progress=n;try{localStorage.setItem(key,String(n));}catch{}}
const app = document.querySelector('#app');
function home(){
  return `<section class="hero"><div><span class="tag">ZEEUWS FAMILIEMYSTERIE</span><h1>De moord op<br><i>Donald Duck.</i></h1><p class="intro">Voor Marcs vijftigste wil oma één foto met de hele familie. De fietsen staan klaar, de taart zit in de oven en iemand heeft iets met de oude kerstsurprise uitgehaald.</p><div class="actions"><a class="btn" href="#${destination()}">${icon('search')} ${['Open het dossier','Hervat je onderzoek','Hervat je onderzoek','Dien je beschuldiging in','Lees de afloop terug'][progress]}</a><button class="quiet" data-help>Spelregels</button></div></div><figure class="photo"><img src="evidence.svg" alt="Een getekende Donald in matrozenpak onder het vergrootglas aan de Zeeuwse kust"><figcaption class="caption">ARCHIEF • ZEELAND <span class="stamp">BEWIJSSTUK A</span></figcaption></figure></section><section class="route"><div class="sectionbar"><h2>De onderzoeksroute</h2><span class="micro">3 ETAPPES</span></div><div class="cards">${stages.map((s,i)=>`<${i<=progress?'button':'div'} class="stage" ${i<=progress?'data-go="etappe-'+(i+1)+'"':''}><span class="icon">${icon(s.icon)}</span><small>ETAPPE 0${i+1}${progress>i?' ✓':''}</small><h3>${s.name}</h3><p>${s.teaser}</p></${i<=progress?'button':'div'}>`).join('')}</div></section>`;
}
function destination(){return progress===4?'slot':progress===3?'rapport':'etappe-'+(progress+1)}
function wrap(body){return `<div class="play"><div class="tools"><a href="#start" class="quiet">Dossieroverzicht</a><span class="micro">ZAAK DD–050 · ${Math.min(progress,3)}/3 ETAPPES</span></div>${body}</div>`}
const photos = {
  koffiestop: ['Twee fietsen en een bankje met koffie en een zwarte handschoen op de Zeeuwse dijk.', 'Het bankje bij het gemaal'],
  keukentafel: ['Naast de aardbeientaart liggen Caspers gesloten blauwe map en een omgekeerd schoteltje.', 'Weer bij oma aan tafel'],
  'bij-het-gemaal': ['Wessel leunt tegen het hek terwijl de schapen voor het gemaal het fietspad oversteken.', 'Een stilstaand beeld uit Guus’ opname'],
  'aardbei-in-de-koffie': ['Een aardbei drijft in Caspers kop koffie. Achter het kopje wordt de taart uitgedeeld.', 'Caspers tweede portie fruit']
};
function scenePhoto(name) {
  const [description, caption] = photos[name];
  return `<figure class="scene-photo"><img src="beelden/${name}.jpg" width="508" height="508" loading="lazy" alt="${description}"><figcaption>${caption}</figcaption></figure>`;
}
const exhibits = {
  opname: scenePhoto('bij-het-gemaal'),
  kaart: `<figure class="card-front"><img src="boelie.jpg" width="508" height="508" loading="lazy" alt="Oma’s oranje kater met een eenhoornkaartje aan een rode strik."></figure>
    <details><summary>Draai het kaartje om</summary><blockquote class="birthday-note">Tijd voor een nieuwe surprise! 🙃</blockquote><p>Marc legt het kaartje naast de losse snavel.</p></details>`,
  snippers: `<figure class="form-fragment" aria-label="Het blauwe voorstel met de koffiekring over de scheurrand"><strong>Kerstspel</strong><span>Voorstel</span><svg aria-hidden="true" viewBox="0 0 240 120"><ellipse cx="160" cy="70" rx="45" ry="34" fill="none" stroke="#966332" opacity=".55" stroke-width="7"/><path d="M106 120l16-14 3-10 15-7 9-14 10-3 7-12 14-4 8-12 14-5 10-12 20-6 8-8" fill="none" stroke="#415866" stroke-width="1.6"/></svg></figure>`
};
function evidence(s) {
  return s.clues.map(([name, text, exhibit]) => `<details><summary>${name}</summary><p>${text}</p>${exhibits[exhibit] || ''}</details>`).join('');
}
function stage(i){
  const s=stages[i];
  return wrap(`<p class="micro" style="margin-top:24px">ETAPPE 0${i+1} · ${s.place.toUpperCase()}</p><h1>${s.name}</h1><div class="scene">${s.story.map((paragraph, index) => `<p>${paragraph}</p>${index === 0 && s.photo ? scenePhoto(s.photo) : ''}`).join('')}</div><section class="sheet"><h2>Getuigen &amp; bewijsstukken</h2><p>Open de verklaringen en vergelijk de details.</p>${evidence(s)}</section><section class="sheet"><h2>${s.question}</h2>${progress>i?`<p>✓ ${s.feedback}</p><a class="btn" href="#${i===2?'rapport':'etappe-'+(i+2)}">${s.next}</a>`:s.answers.map((a,j)=>`<button class="choice" data-answer="${j}">${a}</button>`).join('')+'<p class="notice" role="status"></p><details><summary>Geef me een hint</summary><p>'+s.hint+'</p></details>'}</section>`);
}
const fields=[
  ['Wie heeft Donald toegetakeld?',['Noa','Wessel','Guus','Casper','Max','Sam','Veerle','Stijn','Timo'],3],
  ['Waarom moest Donald verdwijnen?',['Om Marc tijdens de tocht af te troeven','Om een einde te maken aan de terugkerende kerstsurprise','Om de surprise zelf te mogen houden'],1],
  ['Waaraan herkent Marc de tekst op Boelies kaartje?',['De zin staat onder Veerles foto','De zin staat op de fietsroute bij de koffiestop','In Caspers voorstel staat dezelfde zin met dezelfde omgekeerde smiley'],2]
];
function report(){return wrap(`<h1>Jouw eindrapport</h1><p>Marianne legt het taartmes naast Marcs bord. Iedereen zit. Zelfs Boelie heeft een stoel. ‘Eerst maar eens horen waarom mijn eend in twee stukken op tafel ligt’, zegt oma.</p><form class="sheet" id="report">${fields.map(([q,opts],i)=>`<label class="field">${q}<select required name="q${i}"><option value="">Maak je keuze</option>${opts.map((o,j)=>`<option value="${j}">${o}</option>`).join('')}</select></label>`).join('')}<button class="btn">Dien je beschuldiging in</button><p role="status" class="notice"></p></form><section class="sheet"><h2>Je onderzoeksdossier</h2><p>Lees een bewijsstuk terug.</p>${stages.map(s=>evidence(s)).join('')}</section>`)}
function ending(){return wrap(`<h1>Zaak gesloten.</h1><p>Casper wrijft met zijn duim over het rechte pootje van de splitpen. ‘De vorige keer heeft dat beest elf maanden bij mij in de meterkast gestaan. Elke keer als ik de meter moest opnemen, keek ik in die snavel. Met kerst mag iemand best eens iets nieuws bedenken.’</p><section class="sheet"><h2>De familiefoto</h2><p>‘En dat kaartje?’ vraagt Marc. Casper knikt. ‘Dat heb ik gisteravond geprint.’ Bij oma strikte hij het aan Boelies halsband. Met Wessels handschoen uit de gang pakte hij Donald beet om de kop los te maken. Toen hij Imme in de gang hoorde, schoof hij Donald en de handschoen onder de kast. De hoek van zijn voorstel bleef onder de kastpoot steken.</p><p>Marc geeft hem de eend en de splitpen. ‘Kijk dan eens wat je op de mijne allemaal mag repareren.’</p><p>Stijn drukt de zelfontspanner in. Max en Sam knijpen zich samen op één stoel, Marianne probeert de taart recht te houden en Casper zit met Donald op schoot. Bij de klik landt de aardbei precies in zijn koffie. Oma bekijkt de foto. ‘Afblijven, Timo. Deze wil ik hebben.’</p>${scenePhoto('aardbei-in-de-koffie')}</section><section class="sheet end"><h2>Gefeliciteerd, Marc.</h2><p>Op de achterkant van de afdruk schrijft oma: ‘Vijftig jaar. Iedereen erop.’</p></section><button class="quiet" data-reset>Opnieuw spelen</button>`)}
function current(){return location.hash.slice(1)}
function render(){
  const route=current(), match=/^etappe-([1-3])$/.exec(route);
  if(match && Number(match[1])-1<=progress) app.innerHTML=stage(Number(match[1])-1);
  else if(route==='rapport'&&progress>=3) app.innerHTML=report();
  else if(route==='slot'&&progress===4) app.innerHTML=ending();
  else app.innerHTML=home();
}
function modal(title,body,reset=false){const d=document.createElement('dialog');d.setAttribute('aria-label',title);d.innerHTML=`<h2>${title}</h2><p>${body}</p><form method="dialog"><button class="btn">${reset?'Annuleren':'Begrepen'}</button> ${reset?'<button class="quiet" value="reset">Wis voortgang</button>':''}</form>`;document.body.append(d);d.addEventListener('close',()=>{if(d.returnValue==='reset'){save(0);location.hash='start';render()}d.remove()});d.showModal()}
app.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.hasAttribute('data-help'))modal('Zo speel je','Jij bent Marc. Lees per etappe de verklaringen en tik de bewijsstukken open. Trek een conclusie om verder te fietsen. Loop je vast, open dan de hint. Aan tafel vul je zelfstandig het eindrapport in. Je voortgang wordt op dit apparaat bewaard.');
  if(b.hasAttribute('data-reset'))modal('Een nieuw onderzoek?','Hiermee wis je je voortgang op dit apparaat.',true);
  if(b.dataset.go)location.hash=b.dataset.go;
  if(b.dataset.answer!==undefined){const i=Number(current().slice(-1))-1,s=stages[i];if(Number(b.dataset.answer)===s.correct){save(Math.max(progress,i+1));render();app.querySelector('.sheet:last-child a').focus()}else{app.querySelector('.notice').textContent='Dat volgt nog niet uit de aanwijzingen. '+s.hint}}
});
app.addEventListener('submit',e=>{if(e.target.id!=='report')return;e.preventDefault();const form=e.target,data=new FormData(form);if(fields.every((field,i)=>data.get('q'+i)===String(field[2]))){save(4);location.hash='slot'}else{form.querySelector('.notice').textContent='Je reconstructie klopt nog niet helemaal. Lees Caspers voorstel, bekijk het kaartje en let op wat hij over de splitpen weet.'}});
window.addEventListener('hashchange',()=>{render();window.scrollTo(0,0);const h=app.querySelector('h1');h.tabIndex=-1;h.focus({preventScroll:true})});render();
