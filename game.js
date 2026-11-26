const paths = {
  search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
  bike: '<circle cx="5" cy="16" r="4"/><circle cx="19" cy="16" r="4"/><path d="m5 16 5-9 5 9H5m5-9h6l3 9M8 5h4m3-1h3"/>',
  bridge: '<path d="M2 17h20M4 17v-6m16 6v-6M2 11h20M5 11a7 7 0 0 1 14 0m-7-7v7"/>',
  windmill: '<path d="M8 21l1-9m7 9-1-9M6 21h12M12 10l-6-6 3-2 3 8m0 0 6 6-3 2-3-8m0 0 6-6 2 3-8 3m0 0-6 6-2-3 8-3"/>',
  tennis: '<circle cx="12" cy="12" r="9"/><path d="M6 5c5 4 5 10 0 14M18 5c-5 4-5 10 0 14"/>',
  shed: '<path d="m2 10 10-7 10 7M4 9v12h16V9M9 21V11h6v10m-3-6v2"/>',
  folder: '<path d="M2 7V5h7l3 3h10v12H2z"/>'
};

function icon(key) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${paths[key]}</svg>`;
}

const stageCount = stages.length;
const solved = stageCount + 1;
const key = 'kwarkie-dd050-v3';
let progress = 0;
try {
  const stored = Number(localStorage.getItem(key));
  if (Number.isInteger(stored) && stored >= 0 && stored <= solved) progress = stored;
} catch {}

function save(value) {
  progress = value;
  try {
    localStorage.setItem(key, String(value));
  } catch {}
}

const app = document.querySelector('#app');

function stageRoute(index) {
  return 'etappe-' + (index + 1);
}

function destination() {
  if (progress === solved) return 'slot';
  if (progress === stageCount) return 'rapport';
  return stageRoute(progress);
}

function home() {
  let action = 'Hervat je onderzoek';
  if (progress === 0) action = 'Open het dossier';
  if (progress === stageCount) action = 'Vul je oplossing in';
  if (progress === solved) action = 'Lees de afloop terug';

  return `<section class="hero">
    <div>
      <span class="tag">ZEEUWS FAMILIEMYSTERIE</span>
      <h1>De moord op<br><i>Donald Duck.</i></h1>
      <p class="intro">Voor Marcs vijftigste wil oma één foto met de hele familie. De fietsen staan klaar, de taart zit in de oven en iemand heeft iets met de oude kerstsurprise uitgehaald.</p>
      <div class="actions"><a class="btn" href="#${destination()}">${icon('search')} ${action}</a><button class="quiet" data-help>Spelregels</button></div>
    </div>
    <figure class="photo">
      <img src="evidence.svg" alt="Een getekende Donald in matrozenpak onder het vergrootglas aan de Zeeuwse kust">
      <figcaption class="caption">ARCHIEF · ZEELAND <span class="stamp">BEWIJSSTUK A</span></figcaption>
    </figure>
  </section>
  <section class="route">
    <div class="sectionbar"><h2>De onderzoeksroute</h2><span class="micro">${stageCount} ETAPPES</span></div>
    <div class="cards">${stages.map((stage, index) => {
      const unlocked = index <= progress;
      const tag = unlocked ? 'button' : 'div';
      const status = progress > index ? 'done' : unlocked ? 'current' : 'locked';
      return `<${tag} class="stage stage--${status}"${unlocked ? ` data-go="${stageRoute(index)}"` : ''}>
        <span class="icon">${icon(stage.icon)}</span><small>ETAPPE ${index + 1}${progress > index ? ' ✓' : !unlocked ? ' · GESLOTEN' : ''}</small>
        <h3>${stage.name}</h3><p>${stage.teaser}</p>
      </${tag}>`;
    }).join('')}</div>
  </section>`;
}

function wrap(body) {
  return `<div class="play"><div class="tools">
    <a href="#start" class="quiet">Dossieroverzicht</a>
    <div><span class="micro" data-progress>ZAAK DD-050 · ${progressLabel()}</span>
    <progress class="stage-progress" aria-label="Afgeronde etappes" max="${stageCount}" value="${Math.min(progress, stageCount)}"></progress></div>
  </div>${body}</div>`;
}

function progressLabel() {
  return `${Math.min(progress, stageCount)}/${stageCount} ETAPPES`;
}

const photos = {
  koffiestop: ['Twee fietsen en een bankje met koffie en een zwarte handschoen op de Zeeuwse dijk.', 'Het bankje bij het gemaal'],
  keukentafel: ['Op de keukentafel liggen een blauwe map en een omgekeerd schoteltje naast de aardbeientaart.', 'Weer bij oma aan tafel'],
  'bij-het-gemaal': ['Wessel leunt tegen het hek terwijl de schapen voor het gemaal het fietspad oversteken.', 'Een beeld uit Guus’ filmpje'],
  'aardbei-in-de-koffie': ['Een aardbei drijft in Caspers kop koffie. Achter het kopje wordt de taart uitgedeeld.', 'Caspers tweede portie fruit']
};

function scenePhoto(name) {
  const [description, caption] = photos[name];
  return `<figure class="scene-photo"><img src="beelden/${name}.jpg" width="508" height="508" loading="lazy" alt="${description}"><figcaption>${caption}</figcaption></figure>`;
}

function receipt(title, entries) {
  return `<figure class="evidence-receipt"><figcaption>${title}</figcaption>
    <dl>${entries.map(([time, event]) => `<div><dt>${time}</dt><dd>${event}</dd></div>`).join('')}</dl>
  </figure>`;
}

function photoDetail(caption, content) {
  return `<figure class="evidence-photo-detail"><div class="evidence-photo-content">${content}</div><figcaption>${caption}</figcaption></figure>`;
}

function cupboardPhoto(time, hasDonald) {
  const description = hasDonald ? 'Donald staat op de kast' : 'De kast is leeg';
  const figure = hasDonald
    ? '<path d="M97 83q-19 17 12 23h30q18-14-6-31l-19-15z" fill="#e7e1ce"/><path d="M104 84q18 11 36 0l-5 16h-28z" fill="#46666d"/><ellipse cx="117" cy="63" rx="18" ry="21" fill="#fff6d7"/><path d="M105 48q-3-20 18-17 12 2 13 16z" fill="#46666d"/><path d="M109 66q-15-4-25 3 10 13 29 10" fill="#d59538"/><circle cx="109" cy="62" r="2.5" fill="#1c3539"/>'
    : '';
  return photoDetail(`Foto van Timo · ${time} uur`, `
    <svg class="cupboard-photo" viewBox="0 0 240 150" role="img" aria-label="${description}">
      <path fill="#dcd4bd" d="M0 0h240v150H0z"/>
      <path fill="#846247" d="M18 106h204v44H18z"/>
      <path fill="#654a37" d="M12 106h216v9H12zM119 115h2v35h-2z"/>
      ${figure}
    </svg>`);
}

const exhibits = {
  opname: scenePhoto('bij-het-gemaal'),
  kaart: `<figure class="card-front"><img src="boelie.jpg" width="508" height="508" loading="lazy" alt="Oma’s oranje kater met een eenhoornkaartje aan een rode strik."></figure>
    <details><summary>Draai het kaartje om</summary><blockquote class="birthday-note">Voor de jarige speurneus!</blockquote></details>`,
  snippers: `<figure class="form-fragment" aria-label="De fietsroute met het afgescheurde hoekje en de koffievlek">
    <strong>Fietsroute</strong><span>Naar de Zeelandbrug</span>
    <svg aria-hidden="true" viewBox="0 0 240 120">
      <defs>
        <clipPath id="routekaart"><path d="M0 0h224v30l-14 8-5 11-15 5-6 12-17 6-6 10-14 7-6 12-16 4-7 15H0z"/></clipPath>
        <clipPath id="hoekje"><path d="M224 30v90H118l7-15 16-4 6-12 14-7 6-10 17-6 6-12 15-5 5-11z"/></clipPath>
      </defs>
      <g clip-path="url(#routekaart)"><path d="M0 0h224v120H0z" fill="#c1d9df"/><ellipse cx="173" cy="72" rx="37" ry="28" fill="none" stroke="#885724" opacity=".7" stroke-width="5"/></g>
      <g clip-path="url(#hoekje)" transform="translate(8 5)"><path d="M0 0h224v120H0z" fill="#c1d9df"/><ellipse cx="173" cy="72" rx="37" ry="28" fill="none" stroke="#885724" opacity=".7" stroke-width="5"/></g>
    </svg>
  </figure>`,
  knutselbon: photoDetail('Ingezoomd op Stijns foto', '<strong>Geel molentje</strong><p>Eén punt is afgeknipt.</p>'),
  'foto-een': cupboardPhoto('09.13', true),
  'foto-twee': cupboardPhoto('09.15', false),
  'keukendeur': receipt('Wat Stijn op het filmpje ziet', [
    ['09.12', 'De woonkamer is leeg.'],
    ['09.14', 'Casper gaat naar binnen. Even later gaat Imme ook naar binnen. Ze komen allebei vóór 09.15 uur weer terug.'],
    ['09.16', 'Oma komt binnen.']
  ])
};

function paragraphs(content) {
  return [content].flat().map(text => `<p>${text}</p>`).join('');
}

function evidence(stage) {
  return stage.clues.map(([name, text, exhibit]) =>
    `<details><summary>${name}</summary>${paragraphs(text)}${exhibits[exhibit] || ''}</details>`
  ).join('');
}

function answerChoices(stage) {
  if (Array.isArray(stage.correct)) {
    return `<form class="choices" data-answer-group>
      <p>Kies ${stage.correct.length} antwoorden.</p>
      ${stage.answers.map((answer, index) => `<label class="choice"><input type="checkbox" name="answer" value="${index}"> ${answer}</label>`).join('')}
      <button class="btn">Controleer je antwoorden</button>
    </form>`;
  }

  return `<div class="choices">${stage.answers.map((answer, index) =>
    `<button class="choice" data-answer="${index}">${answer}</button>`
  ).join('')}</div>`;
}

function stageResult(index) {
  const stage = stages[index];
  const advance = index + 1 === stageCount ? 'rapport' : stageRoute(index + 1);
  return progress > index
    ? `<div class="stage-feedback"><p>${stage.feedback}</p></div><a class="btn" data-advance href="#${advance}">${stage.next}</a>`
    : `${answerChoices(stage)}<p class="notice" role="status"></p><details><summary>Geef me een hint</summary><p>${stage.hint}</p></details>`;
}

function stagePage(index) {
  const stage = stages[index];
  return wrap(`<p class="micro stage-meta">ETAPPE ${index + 1} · ${stage.place.toUpperCase()}</p>
    <h1>${stage.name}</h1>
    <div class="scene">${stage.story.map((text, i) => paragraphs(text) + (i === 0 && stage.photo ? scenePhoto(stage.photo) : '')).join('')}</div>
    <section class="sheet"><h2>Aanwijzingen</h2>${evidence(stage)}</section>
    <section class="sheet"><h2>${stage.question}</h2><div data-result>${stageResult(index)}</div></section>`);
}

function report() {
  return wrap(`<h1>Jouw oplossing</h1>
    <p>Marianne legt het taartmes naast Marcs bord. Iedereen zit. Zelfs Boelie heeft een stoel. ‘Eerst maar eens horen waarom mijn eend in twee stukken op tafel ligt’, zegt oma.</p>
    <form class="sheet" id="report">
      ${fields.map(([question, options], index) => `<label class="field">${question}
        <select required name="q${index}"><option value="">Maak je keuze</option>${options.map((option, i) => `<option value="${i}">${option}</option>`).join('')}</select>
      </label>`).join('')}
      <button class="btn">Dien je oplossing in</button><p role="status" class="notice"></p>
    </form>
    <section class="sheet"><h2>Lees aanwijzingen terug</h2>
      ${stages.map(stage => `<details class="dossier-stage"><summary>${stage.name}</summary>${evidence(stage)}</details>`).join('')}
    </section>`);
}

function ending() {
  return wrap(`<h1>Zaak gesloten.</h1>${paragraphs(endingStory.intro)}
    <section class="sheet"><h2>De familiefoto</h2>${paragraphs(endingStory.paragraphs)}${scenePhoto('aardbei-in-de-koffie')}</section>
    <section class="sheet end"><h2>Gefeliciteerd, Marc.</h2>${paragraphs(endingStory.epilogue)}</section>
    <button class="quiet" data-reset>Opnieuw spelen</button>`);
}

function current() {
  return location.hash.slice(1);
}

function stageIndex(route) {
  const match = /^etappe-([1-9][0-9]*)$/.exec(route);
  return match ? Number(match[1]) - 1 : -1;
}

function render() {
  const route = current();
  const index = stageIndex(route);
  if (index >= 0 && index < stageCount && index <= progress) {
    app.innerHTML = stagePage(index);
  } else if (route === 'rapport' && progress >= stageCount) {
    app.innerHTML = report();
  } else if (route === 'slot' && progress === solved) {
    app.innerHTML = ending();
  } else {
    app.innerHTML = home();
  }
}

function modal(title, body, reset = false) {
  const dialog = document.createElement('dialog');
  dialog.setAttribute('aria-label', title);
  dialog.innerHTML = `<h2>${title}</h2><p>${body}</p><form method="dialog">
    <button class="btn" value="cancel">${reset ? 'Annuleren' : 'Begrepen'}</button>
    ${reset ? '<button class="quiet" value="reset">Wis voortgang</button>' : ''}
  </form>`;
  document.body.append(dialog);
  dialog.addEventListener('close', () => {
    if (dialog.returnValue === 'reset') {
      save(0);
      location.hash = 'start';
      render();
    }
    dialog.remove();
  });
  dialog.showModal();
}

function checkAnswer(answers) {
  const index = stageIndex(current());
  const stage = stages[index];
  const target = [stage.correct].flat();
  const notice = app.querySelector('.notice');
  if (answers.length !== target.length) {
    notice.textContent = `Kies ${target.length} antwoorden en probeer het opnieuw.`;
  } else if (!target.every(answer => answers.includes(answer))) {
    notice.textContent = 'Kijk nog eens welke aanwijzingen bij elkaar passen.';
  } else {
    save(index + 1);
    app.querySelector('[data-progress]').textContent = 'ZAAK DD-050 · ' + progressLabel();
    app.querySelector('.stage-progress').value = progress;
    app.querySelector('[data-result]').innerHTML = stageResult(index);
    app.querySelector('[data-advance]').focus();
  }
}

app.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;

  if (button.hasAttribute('data-help')) modal('Zo speel je', `Jij bent Marc. Open per etappe de aanwijzingen en leg ze naast elkaar. Beantwoord de vraag om verder te gaan. Loop je vast, open dan de hint. Na ${stageCount} etappes vul je je oplossing in. Dit apparaat onthoudt waar je bent gebleven.`);
  if (button.hasAttribute('data-reset')) modal('Een nieuw onderzoek?', 'Hiermee wis je je voortgang op dit apparaat.', true);
  if (button.dataset.go) location.hash = button.dataset.go;
  if (button.dataset.answer !== undefined) checkAnswer([Number(button.dataset.answer)]);
});

app.addEventListener('submit', event => {
  const form = event.target;
  event.preventDefault();
  const data = new FormData(form);
  if (form.hasAttribute('data-answer-group')) {
    checkAnswer(data.getAll('answer').map(Number));
  } else if (form.id === 'report') {
    if (fields.every(([, , answer], i) => data.get('q' + i) === String(answer))) {
      save(solved);
      location.hash = 'slot';
    } else {
      form.querySelector('.notice').textContent = 'Er klopt nog iets niet. Kijk welke aanwijzingen bij jouw oplossing passen.';
    }
  }
});

window.addEventListener('hashchange', () => {
  render();
  window.scrollTo(0, 0);
  const heading = app.querySelector('h1');
  heading.tabIndex = -1;
  heading.focus({preventScroll: true});
});
render();
