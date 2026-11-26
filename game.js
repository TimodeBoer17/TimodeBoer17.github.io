const stages = [
  {
    name: 'Bij oma Ans', place: 'De woonkamer', icon: 'search', teaser: 'Bekijk de plaats delict.',
    story: 'Om 09.16 uur gilt Marianne. Onder de kast ligt de Donald Duck-surprise die al jaren met kerst van eigenaar wisselt. Zijn kartonnen kop is los. Naast de snavel ligt een briefje, ondertekend met ‘Kwarkie’. Negen fietshelmen draaien tegelijk richting Marc. Oma zet de mosselen terug in de koelkast. Dit kan wel even duren.',
    clues: [
      ['Het verjaardagsbriefje', 'Op de voorkant danst de eenhoorn die Marc bij verjaardagen in de familieapp zet. Achterop staat in blokletters ‘Definitief buiten gebruik gesteld. Groet, Kwarkie.’ Marc stuurt normaal een gifje. Op papier danst er weinig.'],
      ['De vondsten onder de kast', 'Een zwart linkerhandschoentje, een driehoekje blauw papier en een leeg kwarkbakje. Oma herkent de deuk in het deksel. Gisteravond heeft ze dit bakje zelf bij het plastic gegooid. De bak staat open in de gang.'],
      ['Verklaring van Ambriel', '‘Die handschoen is van Wessel. Hij lag gisteravond al op het tafeltje in de gang. Ik heb de rechter nog naar hem gegooid. Mis, trouwens.’'],
      ['Het eerste alibi', 'Casper ritst zijn blauwe routemap dicht. ‘Van negen tot kwart over negen stond ik buiten met de route.’ Marianne heeft vanuit het keukenraam alleen Noa onafgebroken gezien, vanaf 09.08 uur, met een fietspomp in haar hand.']
    ],
    question: 'Welke conclusie mag je nu al trekken?', answers: ['Wessel moet vanochtend bij de kast zijn geweest.', 'Iemand kon de spullen neerleggen zonder dat Marc of Wessel erbij was.', 'De afzender van het gifje heeft het briefje geprint.'], correct: 1,
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
      ['Oma’s envelop', 'Onder de kast vond oma nóg een snipper. Samen met Marcs driehoekje past hij precies in de scheur van DD-050. Zelfs de koffiekring loopt door. Op de achterkant staat: ‘09.14 uitgevoerd. Restkarton na vertrek afvoeren. Kwarkie als afzender vermeld.’']
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
function evidence(s){return s.clues.map(([name,text])=>`<details><summary>${name}</summary><p>${text}</p></details>`).join('')}
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
