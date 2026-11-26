const stages = [
  {
    name: 'Bij oma Ans', place: 'De woonkamer', icon: 'search', teaser: 'Bekijk de plaats delict.',
    story: 'Om 09.16 uur zet Marianne haar helm op de vensterbank. Er kraakt iets onder haar schoen. Een gele snavel. Onder de kast ligt de rest van Donald, de kartonnen eend die elke kerst weer in hetzelfde cadeaupapier opduikt. Oma bukt zich met moeite om te kijken. Boelie wurmt zich tussen haar pantoffels door en gaat pal voor de kast zitten. Aan de halsband van haar dikke oranje kater bungelt een kaartje.',
    clues: [
      ['Het kaartje aan Boelies halsband', 'Marc steekt een vinger onder het kaartje. Boelie duwt zijn kin omhoog voor een kriebel. Met zijn andere hand trekt Marc het rode strikje los.', 'kaart'],
      ['De vondsten onder de kast', 'Marc veegt met een liniaal onder de kast. Eerst komt er een zwarte linkerhandschoen tevoorschijn, dan een driehoekje blauw papier. Een leeg kwarkbakje rolt tot tegen oma’s pantoffel. Ze drukt haar duim in de deuk in het deksel. ‘Dat heb ik gisteravond bij het plastic gegooid.’ In de gang staat het deksel van de afvalbak nog open.'],
      ['Verklaring van Ambriel', '‘Die handschoen is van Wessel. Hij lag gisteravond al op het tafeltje in de gang. Ik heb de rechter nog naar hem gegooid. Mis, trouwens.’'],
      ['Het eerste alibi', 'Casper ritst zijn blauwe routemap dicht. ‘Van negen tot kwart over negen stond ik buiten met de route.’ Marianne heeft vanuit het keukenraam alleen Noa onafgebroken gezien, vanaf 09.08 uur, met een fietspomp in haar hand.']
    ],
    question: 'Welke conclusie mag je nu al trekken?', answers: ['Wessel moet vanochtend bij de kast zijn geweest.', 'Iemand kon de spullen neerleggen zonder dat Marc of Wessel erbij was.', 'De handtekening op het kaartje bewijst dat Marc het schreef.'], correct: 1,
    hint: 'Ga bij elk voorwerp na wie er gisteren bij kon.', feedback: 'De familieapp, de open afvalbak en de gang waren voor iedereen bereikbaar.'
  },
  {
    name: 'Op de dijk', place: 'Het peloton', icon: 'bike', teaser: 'Leg de alibi’s naast elkaar.',
    story: 'Bij kilometer twaalf houdt Marc zijn hand op. Guus rijdt nog honderd meter door, want zijn gemiddelde. Veerle schenkt uit de thermoskan. ‘Ook koffie voor de koude kant?’ vraagt ze. Oma heeft uit voorzorg twee kannen meegegeven. Casper, ambtenaar in hart en nieren, heeft zijn eerste kop al op voordat Marc zijn notitieboekje open heeft.',
    clues: [
      ['Knabbel & Babbel • groepschat', 'Wessel, gisteren 21.04 uur: ‘Morgen gaat Kwarkie kapot.’ Guus, 21.06 uur: ‘Bij kilometer veertig slaan we toe.’ Hun fietscomputers tonen van 09.06 tot 09.18 uur dezelfde warming-up, drie kilometer van oma vandaan. Blijkbaar is uit het wiel rijden ook een familieactiviteit.'],
      ['Veerles groepsfoto • 09.10 uur', 'De zelfontspanner legde zeven helmen vast. Marc, Noa, Veerle, Stijn, Timo, Max en Sam staan bij het tuinhek. Wessel en Guus rijden hun rondje. Casper ontbreekt. Achter het raam staat Donald nog heel op de kast.'],
      ['Een omstreden schaakpartij', 'Na de foto gaan Sam en Max terug naar het bord in de eetkamer. Rond 09.12 uur horen ze in de gang iemand zeggen dat er ‘nog iets afgehandeld’ moet worden. Geen van beiden ziet wie. Max wil graag vastgelegd hebben dat zijn nederlaag eveneens omstreden is.'],
      ['Het scherm van Stijn', '‘TARGET ELIMINATED’, 09.14 uur. Stijn zucht en opent zijn wedstrijdgeschiedenis. Edgar is verslagen in Brawl Stars. Timo zat naast hem op de tuinbank en heeft de hele wedstrijd meegekeken.'],
      ['Een gemiste koffiepauze', 'Imme belde Casper om 09.11 uur om te vragen of hij koffie wilde. ‘Straks. Ik moet eerst weer naar binnen om iets af te handelen.’ Om 09.15 uur appte hij terug: ‘Geregeld. Schenk maar in.’']
    ],
    question: 'Welke twee verklaringen kunnen niet allebei kloppen?', answers: ['De groepsfoto en de schaakpartij.', 'Het chatgesprek en de gezamenlijke warming-up.', 'Caspers alibi en zijn telefoontje met Imme.'], correct: 2,
    hint: 'Een foto is één moment. Zoek iemand die iets beweert over een heel kwartier.', feedback: 'Casper zei dat hij tot 09.15 uur buiten bleef. Om 09.11 uur vertelde hij Imme dat hij terug naar binnen moest.'
  },
  {
    name: 'Terug aan tafel', place: 'De laatste kilometers', icon: 'folder', teaser: 'Reconstrueer de uitvoering.',
    story: 'Een windvlaag doet wat Marc de hele ochtend al probeert. Hij krijgt Caspers map open. Wessel vangt de routekaart. Marc krijgt een blauw vel tegen zijn voorwiel. Op de terugweg blijft er één vraag door zijn hoofd spoken. Iets aanvragen is één ding. Wie heeft het ook echt uitgevoerd?',
    clues: [
      ['Timo’s printeroverzicht', '08.41 — recept voor mosselen. 08.56 — de route. 09.02 — een eenhoorn. 09.03 — formulier DD-050. De laatste drie opdrachten kwamen van één apparaat. Het logboek vermeldt geen eigenaar.'],
      ['Het blauwe vel uit de routemap', 'Formulier DD-050. Object: kerstsurprise. Reden: ‘Structurele herhaling, voor het zoveelste jaar op rij.’ Maatregel: definitief uit de kerstviering nemen. De rechteronderhoek ontbreekt, dwars door een bruine koffiekring. ‘Een goedgekeurd concept’, zegt Casper.'],
      ['Wat Noa werkelijk schreef', 'In de familieapp vroeg Noa om een ander kerstspel. In haar volgende bericht staat: ‘Zet Donald gezellig bij oma op de kast.’ Casper antwoordde alleen op het eerste bericht: ‘Eindelijk staat dit op de agenda.’'],
      ['Oma’s envelop', 'Oma schudt een tweede snipper uit een envelop. Marc draait zijn driehoekje een kwartslag en schuift de punt tegen de scheur. Oma legt haar snipper in het laatste gat. De bruine boog op het vel loopt over beide stukjes door.', 'snippers']
    ],
    question: 'Wat verbindt de aanvraag met de uitvoering bij de kast?', answers: ['De bijpassende scheurrand, koffiekring en registratie op de achterkant.', 'Het woord ‘route’ in de printergeschiedenis.', 'De kleur van de map en het feit dat Casper koffie drinkt.'], correct: 0,
    hint: 'Een kleur komt vaker voor. Welk spoor loopt letterlijk van het ene bewijsstuk in het andere?', feedback: 'De snippers komen van het formulier in Caspers map. De registratie op de ontbrekende hoek beschrijft wat er bij de kast gebeurde.'
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
  return `<section class="hero"><div><span class="tag">ZEEUWS FAMILIEMYSTERIE</span><h1>De moord op<br><i>Donald Duck.</i></h1><p class="intro">Een jarige fietser. Een kartonnen slachtoffer. Negen verdachten met tegenwind. Marc, krijg jij je naam gezuiverd vóór de mosselen op tafel staan?</p><div class="actions"><a class="btn" href="#${destination()}">${icon('search')} ${['Open het dossier','Hervat je onderzoek','Hervat je onderzoek','Dien je beschuldiging in','Bekijk je onderscheiding'][progress]}</a><button class="quiet" data-help>Spelregels</button></div></div><figure class="photo"><img src="evidence.svg" alt="Een getekende Donald in matrozenpak onder het vergrootglas aan de Zeeuwse kust"><figcaption class="caption">ARCHIEF • ZEELAND <span class="stamp">BEWIJSSTUK A</span></figcaption></figure></section><section class="route"><div class="sectionbar"><h2>De onderzoeksroute</h2><span class="micro">3 ETAPPES</span></div><div class="cards">${stages.map((s,i)=>`<${i<=progress?'button':'div'} class="stage" ${i<=progress?'data-go="etappe-'+(i+1)+'"':''}><span class="icon">${icon(s.icon)}</span><small>ETAPPE 0${i+1}${progress>i?' ✓':''}</small><h3>${s.name}</h3><p>${s.teaser}</p></${i<=progress?'button':'div'}>`).join('')}</div></section>`;
}
function destination(){return progress===4?'slot':progress===3?'rapport':'etappe-'+(progress+1)}
function wrap(body){return `<div class="play"><div class="tools"><a href="#start" class="quiet">Dossieroverzicht</a><span class="micro">ZAAK DD–050 · ${Math.min(progress,3)}/3 ETAPPES</span></div>${body}</div>`}
function birthdayCard() {
  return `<figure class="card-front"><img src="boelie.jpg" width="1536" height="1024" loading="lazy" alt="Boelie op het vloerkleed bij oma. Aan een rood strikje hangt een kaartje met een eenhoorn onder een regenboogwolk vol confetti."></figure>
    <details class="card-reverse"><summary>Draai het kaartje om</summary>
      <blockquote class="birthday-note">Definitief buiten gebruik gesteld.<br><br>Groet,<br>Kwarkie.</blockquote>
      <p>Veerle leest over Marcs schouder mee. Bij de laatste regel kijkt ze op. ‘Kwarkie?’ Oma schuift haar bril op haar neus. ‘Die eenhoorn heb ik ook nog ergens.’ Ze pakt haar telefoon en scrolt terug naar haar verjaardag in de familieapp.</p>
    </details>`;
}
function tornForm() {
  return `<figure class="form-fragment" aria-label="Detail van het herstelde formulier met een koffiekring over de twee scheurranden">
    <strong>DD-050</strong><span>Kerstsurprise</span>
    <svg aria-hidden="true" viewBox="0 0 240 120"><ellipse cx="156" cy="70" rx="50" ry="36" fill="none" stroke="#966332" stroke-opacity=".53" stroke-width="7"/><path d="M106 120l12-14 3-11 16-7 7-13 9-3 7-12 13-2 7-14 12-4 8-10 16-5 8-11 16-5M155 72l8 7 1 9 14 7 1 8 18 17" fill="none" stroke="#415866" stroke-width="1.6"/></svg>
  </figure><details><summary>Bekijk de achterkant van de snippers</summary><p>In kleine letters staat er: ‘09.14 uitgevoerd. Restkarton na vertrek afvoeren. Kwarkie als afzender vermeld.’</p></details>`;
}
const exhibits = { kaart: birthdayCard, snippers: tornForm };
function evidence(s) {
  return s.clues.map(([name, text, item]) => `<details><summary>${name}</summary><p>${text}</p>${item ? exhibits[item]() : ''}</details>`).join('');
}
function stage(i){
  const s=stages[i];
  return wrap(`<p class="micro" style="margin-top:24px">ETAPPE 0${i+1} · ${s.place.toUpperCase()}</p><h1>${s.name}</h1><p>${s.story}</p><section class="sheet"><h2>Getuigen &amp; bewijsstukken</h2><p>Open de verklaringen en vergelijk de details.</p>${evidence(s)}</section><section class="sheet"><h2>${s.question}</h2>${progress>i?`<p>✓ ${s.feedback}</p><a class="btn" href="#${i===2?'rapport':'etappe-'+(i+2)}">${i===2?'Naar je eindrapport':'Volgende etappe'}</a>`:s.answers.map((a,j)=>`<button class="choice" data-answer="${j}">${a}</button>`).join('')+'<p class="notice" role="status"></p><details><summary>Geef me een hint</summary><p>'+s.hint+'</p></details>'}</section>`);
}
const fields=[
  ['Wie heeft Donald toegetakeld?',['Noa','Wessel','Guus','Casper','Max','Sam','Veerle','Stijn','Timo'],3],
  ['Waarom moest Donald verdwijnen?',['Om Marc tijdens de tocht af te troeven','Om een einde te maken aan de terugkerende kerstsurprise','Om de surprise zelf te mogen houden'],1],
  ['Hoe werd Marc erin geluisd?',['Met een aangepast tijdstip op de groepsfoto','Met zijn eigen handschrift op het formulier','Met het kwarkbakje uit het afval en een geprinte verjaardagseenhoorn'],2]
];
function report(){return wrap(`<h1>Jouw eindrapport</h1><p>Oma tilt het deksel van de mosselpan. ‘Nou, Marc? Wie heeft het gedaan?’</p><form class="sheet" id="report">${fields.map(([q,opts],i)=>`<label class="field">${q}<select required name="q${i}"><option value="">Maak je keuze</option>${opts.map((o,j)=>`<option value="${j}">${o}</option>`).join('')}</select></label>`).join('')}<button class="btn">Dien je beschuldiging in</button><p role="status" class="notice"></p></form><section class="sheet"><h2>Je onderzoeksdossier</h2><p>Lees een bewijsstuk terug.</p>${stages.map(s=>evidence(s)).join('')}</section>`)}
function ending(){return wrap(`<h1>Zaak gesloten.</h1><p>Om 09.14 uur stelde Casper de eend eigenhandig ‘definitief buiten gebruik’. Het kwarkbakje en de geprinte eenhoorn moesten iedereen naar Marc laten kijken. De handschoen was voor het geval dat iemand verder keek.</p><section class="sheet"><h2>De uitspraak</h2><p>‘Je hebt een eend vermoord vanwege inefficiëntie?’ vraagt Marc. Casper knikt. ‘Kan ik nog bezwaar maken?’ Jan schuift hem de eerste mosselpan en een afwasborstel toe.</p><p>Dan komt oma met een doos van zolder. ‘Ik dacht al dat die eerste een keer kapot zou gaan.’ Uit het vloeipapier steekt een kakelverse gele snavel. Casper laat zijn borstel vallen.</p><p>Marc neemt een oester. ‘Tot volgende kerst.’</p></section><section class="sheet end"><span class="tag">ORDE VAN DE GOUDEN MOSSEL</span><h2>Marc de Ducktective</h2><p>Vijftig jaar, één opgeloste zaak en een waterdicht excuus om volgend jaar weer die eend mee te nemen. Gefeliciteerd, Kwarkie!</p></section><button class="quiet" data-reset>Opnieuw spelen</button>`)}
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
app.addEventListener('submit',e=>{if(e.target.id!=='report')return;e.preventDefault();const form=e.target,data=new FormData(form);if(fields.every((field,i)=>data.get('q'+i)===String(field[2]))){save(4);location.hash='slot'}else{form.querySelector('.notice').textContent='Je reconstructie klopt nog niet helemaal. Vergelijk de snippers, het motief op DD-050 en de vondsten onder de kast.'}});
window.addEventListener('hashchange',()=>{render();window.scrollTo(0,0);const h=app.querySelector('h1');h.tabIndex=-1;h.focus({preventScroll:true})});render();
