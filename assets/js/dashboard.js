/* Lawson Sport Performance — training dashboard
   Set each program's Week 1 start date once; the dashboard finds
   today's week automatically. Start dates persist in localStorage. */

function dbEsc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function renderDashboard() {
  const PROGRAMS = {
    football: { label: 'Football 4-Day', phases: FOOTBALL_PHASES },
    allsport: { label: 'All-Sport 2-Day', phases: ALLSPORT_PHASES },
  };
  // flatten phases into week 1..15 lookup
  Object.values(PROGRAMS).forEach(p => {
    p.weeks = {};
    p.phases.forEach(ph => ph.weeks.forEach(w => { p.weeks[w.week] = w; }));
    p.totalWeeks = Math.max(...Object.keys(p.weeks).map(Number));
  });

  const state = {
    program: localStorage.getItem('lsp-dash-program') || 'football',
    viewWeek: null,   // set per program below
    day: null,
  };

  const $ = id => document.getElementById(id);
  const programsMount = $('db-programs');
  const startInput = $('db-start-input');
  const startNote = $('db-start-note');
  const weekLabel = $('db-week-label');
  const daysMount = $('db-days');
  const sessionMount = $('db-session');

  const startKey = () => `lsp-dash-start-${state.program}`;

  function startDate() {
    const v = localStorage.getItem(startKey());
    return v ? new Date(v + 'T00:00:00') : null;
  }

  function currentWeek() {
    const start = startDate();
    const total = PROGRAMS[state.program].totalWeeks;
    if (!start) return 1;
    const diff = Math.floor((Date.now() - start.getTime()) / (7 * 24 * 3600 * 1000)) + 1;
    return Math.min(Math.max(diff, 1), total);
  }

  function defaultDay(numDays) {
    const wd = new Date().getDay();            // Sun 0 … Sat 6
    if (wd < 1 || wd > numDays) return 1;      // weekend / past last day → Day 1
    return wd;
  }

  function warmupLabel(w) {
    const parts = w.warmup.split('·').map(s => s.trim());
    return parts.length > 1 ? `${parts[0]} (${parts.slice(1).join(' · ')})` : w.warmup;
  }

  function draw() {
    const prog = PROGRAMS[state.program];
    if (state.viewWeek === null) state.viewWeek = currentWeek();
    const week = prog.weeks[state.viewWeek];
    const numDays = week.days.length;
    if (state.day === null || state.day > numDays) state.day = defaultDay(numDays);
    const day = week.days[state.day - 1];

    programsMount.innerHTML = Object.entries(PROGRAMS).map(([key, p]) =>
      `<button data-program="${key}"${key === state.program ? ' class="on"' : ''}>${dbEsc(p.label)}</button>`
    ).join('');
    programsMount.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
      state.program = btn.dataset.program;
      localStorage.setItem('lsp-dash-program', state.program);
      state.viewWeek = null;
      state.day = null;
      draw();
    }));

    const saved = localStorage.getItem(startKey());
    startInput.value = saved || '';
    startNote.textContent = saved
      ? `Saved — Week 1 of ${prog.label} starts ${saved}.`
      : 'No start date saved yet for this program.';

    weekLabel.innerHTML = `Viewing Week ${state.viewWeek}` +
      (week.deload ? '<span class="deload">Deload / KPI</span>' : '');

    daysMount.innerHTML = week.days.map((d, i) =>
      `<button data-day="${i + 1}"${i + 1 === state.day ? ' class="on"' : ''}>Day ${i + 1}</button>`
    ).join('');
    daysMount.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
      state.day = Number(btn.dataset.day);
      draw();
    }));

    sessionMount.innerHTML = `
      <div class="db-session-head">
        <h3>${dbEsc(day.title)}</h3>
        <span class="wu">Warm-Up: ${dbEsc(warmupLabel(week))}</span>
      </div>
      ${day.blocks.map(([letter, ex, rx]) => `
        <div class="db-block">
          <span class="letter">${dbEsc(letter)}</span>
          <div><div class="ex">${dbEsc(ex)}</div><div class="rx">${dbEsc(rx)}</div></div>
        </div>
      `).join('')}
    `;
  }

  $('db-save').addEventListener('click', () => {
    if (startInput.value) localStorage.setItem(startKey(), startInput.value);
    else localStorage.removeItem(startKey());
    state.viewWeek = null;
    draw();
  });
  $('db-prev').addEventListener('click', () => {
    state.viewWeek = Math.max(1, state.viewWeek - 1);
    draw();
  });
  $('db-next').addEventListener('click', () => {
    state.viewWeek = Math.min(PROGRAMS[state.program].totalWeeks, state.viewWeek + 1);
    draw();
  });
  $('db-today').addEventListener('click', () => {
    state.viewWeek = currentWeek();
    draw();
  });

  $('db-date').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  }).toUpperCase();

  draw();
}
