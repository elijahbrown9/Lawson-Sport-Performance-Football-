/* Lawson Sport Performance — The Standard (player profiles)
   Renders every athlete in one ranked list with sorting, a fully-tested
   filter, and name search. Categories not yet tested are shown as a
   conservative EST value with a hatched bar. */

function stdEsc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

const STD_TIER_CLASS = {
  ELITE: 'tier-elite',
  ADVANCED: 'tier-advanced',
  SOLID: 'tier-solid',
  DEVELOPING: 'tier-developing',
};

function stdCatRow(name, cat, isDevelop) {
  const cls = (cat.est ? ' est' : '') + (isDevelop ? ' develop' : '');
  return `
    <div class="cat-row">
      <span class="cat-name${cls}">${isDevelop ? '▼ ' : ''}${stdEsc(name)}</span>
      <span class="cat-bar"><span class="cat-fill${cls}" style="width:${Math.max(cat.v, 1)}%"></span></span>
      <span class="cat-val${cls}">${cat.est ? 'EST ' + cat.v : cat.v}</span>
    </div>`;
}

function stdCard(a) {
  return `
    <article class="athlete">
      <div class="athlete-top">
        <h3 class="athlete-name"><span class="rank-num">${a.rank}.</span> ${stdEsc(a.name)}</h3>
        <div class="athlete-badges">
          <span class="measured-badge">${a.measured}/6 measured</span>
          <span class="tier-badge ${STD_TIER_CLASS[a.tier]}">${stdEsc(a.tier)}</span>
        </div>
      </div>
      <div class="overall-line">
        <span class="overall-num">${a.overall}</span>
        <span class="overall-den">/100</span>
        <span class="overall-label">Overall<br>Score</span>
      </div>
      <div class="cat-rows">
        ${a.cats.map((c, i) => stdCatRow(CAT_NAMES[i], c, i === a.develop)).join('')}
      </div>
      <div class="athlete-foot">
        <div class="balance-line">
          <span>Balance ${a.balance}/100</span>
          <span class="dev">Develop: ${stdEsc(CAT_NAMES[a.develop])}</span>
        </div>
        <div class="metrics-line">${stdEsc(a.metrics)}</div>
      </div>
    </article>`;
}

function renderStandard() {
  const grid = document.getElementById('athlete-grid');
  const countEl = document.getElementById('count-line');
  if (!grid || !countEl) return;

  const fullyTested = ATHLETES.filter(a => a.measured === 6).length;
  const state = { sort: 'overall', onlyTested: false, q: '' };

  function draw() {
    const list = ATHLETES.filter(a =>
      (!state.onlyTested || a.measured === 6) &&
      a.name.toLowerCase().includes(state.q));
    list.sort((a, b) => {
      if (state.sort === 'balance') return b.balance - a.balance || a.rank - b.rank;
      if (state.sort === 'name') return a.name.localeCompare(b.name);
      if (state.sort === 'tested') return b.measured - a.measured || a.rank - b.rank;
      return a.rank - b.rank; // overall
    });
    grid.innerHTML = list.map(stdCard).join('');
    countEl.textContent =
      `${list.length} of ${ATHLETES.length} athletes shown · ${fullyTested} fully tested (6/6)`;
  }

  document.querySelectorAll('.controls button[data-sort]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.sort = btn.dataset.sort;
      document.querySelectorAll('.controls button[data-sort]')
        .forEach(b => b.classList.toggle('on', b === btn));
      draw();
    });
  });

  const toggle = document.getElementById('toggle-tested');
  toggle.addEventListener('click', () => {
    state.onlyTested = !state.onlyTested;
    toggle.classList.toggle('on', state.onlyTested);
    draw();
  });

  const search = document.getElementById('athlete-search');
  search.addEventListener('input', () => {
    state.q = search.value.trim().toLowerCase();
    draw();
  });

  draw();
}
