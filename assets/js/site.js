/* Lawson Sport Performance — shared rendering
   renderPhases(): program week accordions
   renderProfiles(): athlete rating cards */

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

/* ---------- program pages ---------- */

function renderPhases(phases, mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;

  mount.innerHTML = phases.map(phase => `
    <div class="phase">
      <div class="phase-head">
        <h3>${esc(phase.title)}</h3>
        <span class="range">${esc(phase.range)}</span>
      </div>
      <p class="phase-desc">${esc(phase.desc)}</p>
      ${phase.weeks.map(week => `
        <details class="week">
          <summary>
            <span class="wk">Week ${week.week}</span>
            ${week.deload ? '<span class="badge-deload">Deload / KPI</span>' : ''}
            <span class="wu">${esc(week.warmup)}</span>
            <span class="caret">▼</span>
          </summary>
          <div class="week-body">
            ${week.days.map(day => `
              <div>
                <div class="day-title">${esc(day.title).replace('·', '<span>·</span>')}</div>
                <div class="table-scroll">
                  <table>
                    <thead>
                      <tr><th style="width:56px">Block</th><th>Exercise</th><th>Prescription / Notes</th></tr>
                    </thead>
                    <tbody>
                      ${day.blocks.map(([letter, ex, rx]) => `
                        <tr>
                          <td><span class="block-letter">${esc(letter)}</span></td>
                          <td class="mono">${esc(ex)}</td>
                          <td>${esc(rx)}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            `).join('')}
          </div>
        </details>
      `).join('')}
    </div>
  `).join('');
}

/* ---------- player profiles ---------- */

const TIER_CLASS = {
  ELITE: 'tier-elite',
  ADVANCED: 'tier-advanced',
  SOLID: 'tier-solid',
  DEVELOPING: 'tier-developing',
};

function catRow(name, value, isDevelop) {
  const cls = isDevelop ? ' develop' : '';
  if (value === null || value === undefined) {
    return `
      <div class="cat-row">
        <span class="cat-name">${esc(name)}</span>
        <span class="cat-bar"><span class="cat-fill untested"></span></span>
        <span class="cat-val untested">–</span>
      </div>`;
  }
  return `
    <div class="cat-row">
      <span class="cat-name${cls}">${isDevelop ? '▼ ' : ''}${esc(name)}</span>
      <span class="cat-bar"><span class="cat-fill${cls}" style="width:${Math.max(value, 1)}%"></span></span>
      <span class="cat-val${cls}">${value}</span>
    </div>`;
}

function testedCard(a) {
  return `
    <article class="athlete">
      <div class="athlete-top">
        <h3 class="athlete-name">${esc(a.name)}</h3>
        <span class="tier-badge ${TIER_CLASS[a.tier]}">${esc(a.tier)}</span>
      </div>
      <div class="overall-line">
        <span class="overall-num">${a.overall}</span>
        <span class="overall-den">/100</span>
        <span class="overall-label">Overall<br>Score</span>
      </div>
      <div class="cat-rows">
        ${a.cats.map((v, i) => catRow(CAT_NAMES[i], v, i === a.develop)).join('')}
      </div>
      <div class="athlete-foot">
        <div class="balance-line">
          <span>Balance ${a.balance}/100</span>
          <span class="dev">Develop: ${esc(CAT_NAMES[a.develop])}</span>
        </div>
        <div class="metrics-line">${esc(a.metrics)}</div>
      </div>
    </article>`;
}

function pendingCard(a) {
  return `
    <article class="athlete">
      <div class="athlete-top">
        <h3 class="athlete-name">${esc(a.name)}</h3>
        <span class="tier-badge tier-pending">More testing needed</span>
      </div>
      <div class="cat-rows">
        ${a.cats.map((v, i) => catRow(CAT_NAMES[i], v, false)).join('')}
      </div>
      <div class="athlete-foot">
        <div class="metrics-line">${esc(a.metrics)}</div>
      </div>
    </article>`;
}

function renderProfiles() {
  const testedMount = document.getElementById('tested-grid');
  const pendingMount = document.getElementById('pending-grid');
  if (!testedMount || !pendingMount) return;

  const sortState = { key: 'overall' };

  function draw() {
    const sorted = [...TESTED_ATHLETES].sort((a, b) => {
      if (sortState.key === 'overall') return b.overall - a.overall;
      if (sortState.key === 'balance') return b.balance - a.balance;
      return a.name.localeCompare(b.name);
    });
    testedMount.innerHTML = sorted.map(testedCard).join('');
  }

  draw();
  pendingMount.innerHTML = PENDING_ATHLETES.map(pendingCard).join('');

  document.querySelectorAll('.controls button[data-sort]').forEach(btn => {
    btn.addEventListener('click', () => {
      sortState.key = btn.dataset.sort;
      document.querySelectorAll('.controls button[data-sort]').forEach(b => b.classList.toggle('on', b === btn));
      draw();
    });
  });
}
