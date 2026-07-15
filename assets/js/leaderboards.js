/* Lawson Sport Performance — leaderboards rendering
   Competition ranking (ties share a rank) computed on the full gender
   list; overall rank is held when filtering by sport or search. */

function lbEsc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function lbMark(mark) {
  return `${mark}"`;
}

function renderLeaderboards() {
  const board = document.getElementById('lb-board');
  const recordMount = document.getElementById('lb-record');
  const countMount = document.getElementById('lb-count');
  const genderMount = document.getElementById('lb-toggle');
  const filterMount = document.getElementById('lb-filters');
  const searchInput = document.getElementById('lb-search-input');
  if (!board) return;

  const state = { gender: 'boys', sport: 'ALL', query: '' };

  function ranked(list) {
    // competition ranking: ties share the rank of the first equal mark
    return list.map((a, i) => {
      let rank = i + 1;
      while (rank > 1 && list[rank - 2].mark === a.mark) rank--;
      return { ...a, rank };
    });
  }

  function draw() {
    const g = LEADERBOARDS[state.gender];

    recordMount.innerHTML =
      `<span>Program Record</span> <b>${lbMark(g.record.mark)}</b> <span>${lbEsc(g.record.name)} · ${lbEsc(g.record.sport)}</span>`;

    genderMount.innerHTML = Object.keys(LEADERBOARDS).map(key =>
      `<button data-gender="${key}"${key === state.gender ? ' class="on"' : ''}>${lbEsc(LEADERBOARDS[key].label)}</button>`
    ).join('');
    genderMount.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
      state.gender = btn.dataset.gender;
      state.sport = 'ALL';
      state.query = '';
      searchInput.value = '';
      draw();
    }));

    filterMount.innerHTML = ['ALL', ...g.sports].map(s =>
      `<button data-sport="${lbEsc(s)}"${s === state.sport ? ' class="on"' : ''}>${lbEsc(s)}</button>`
    ).join('');
    filterMount.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
      state.sport = btn.dataset.sport;
      draw();
    }));

    const all = ranked(g.athletes);
    const shown = all.filter(a =>
      (state.sport === 'ALL' || a.sports.includes(state.sport)) &&
      (!state.query || a.name.toLowerCase().includes(state.query))
    );

    const max = g.record.mark;
    board.innerHTML = shown.map(a => `
      <div class="lb-row${a.rank <= 3 ? ' top3' : ''}">
        <span class="lb-rank">${a.rank}</span>
        <span class="lb-name"><b>${lbEsc(a.name)}</b>${a.sports.map(s => `<span class="lb-tag">${lbEsc(s)}</span>`).join('')}</span>
        <span class="lb-bar"><span style="width:${Math.max(3, Math.round(a.mark / max * 100))}%"></span></span>
        <span class="lb-mark">${lbMark(a.mark)}</span>
      </div>
    `).join('');

    countMount.textContent =
      `${shown.length} of ${all.length} athletes shown · overall rank held when filtering`;
  }

  searchInput.addEventListener('input', () => {
    state.query = searchInput.value.trim().toLowerCase();
    draw();
  });

  draw();
}
