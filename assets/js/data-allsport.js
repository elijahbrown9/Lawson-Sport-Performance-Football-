/* Lawson Sport Performance — All-Sport Off-Season 2-Day Program
   Full 15-week session data, transcribed from the program document.
   Rendered into phase/week accordions by site.js. */

const ALLSPORT_PHASES = [
  {
    title: 'Phase 1 · Foundation',
    range: 'Weeks 1–2',
    desc: 'Teach positions and build base volume. RPE 6–6.5 on main lifts, mostly 6-rep sets. Power stays crisp and low-volume.',
    weeks: [
      {
        week: 1, warmup: 'WU1 · Teach + Groove', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Chest Pass', '3-5x3 · full rest'],
            ['B', 'Bench Press', '4x6 @ RPE 6-6.5'],
            ['C', 'Chest Supported Row', '4x6 @ RPE 7'],
            ['D', 'Posterior / Hamstrings', 'RDL or GHR — 3x6 @ RPE 7'],
            ['E', 'Secondary Press', 'DB Incline or Landmine — 3x8 @ RPE 7'],
            ['F', 'Circuit', '20s/20s x3: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Low Box Jump', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '4x6 @ RPE 6-6.5 · rack by level'],
            ['C', 'Trap Bar Deadlift', '4x6 @ RPE 6-6.5'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '20s/20s x3: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
      {
        week: 2, warmup: 'WU2 · Build Speed', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Overhead Slam', '3-5x3 · full rest'],
            ['B', 'Bench Press', '4x6 @ RPE 6.5 · add small load'],
            ['C', 'Chest Supported Row', '4x6 @ RPE 7'],
            ['D', 'Posterior / Hamstrings', 'RDL or GHR — 3x6 @ RPE 7'],
            ['E', 'Secondary Press', 'DB Incline or Landmine — 3x8 @ RPE 7'],
            ['F', 'Circuit', '20s/20s x3 · heavier: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Broad Jump', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '4x6 @ RPE 6.5 · add small load · rack by level'],
            ['C', 'Trap Bar Deadlift', '4x6 @ RPE 6.5'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '20s/20s x3 · heavier: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
    ],
  },
  {
    title: 'Phase 2 · Build',
    range: 'Weeks 3–6',
    desc: 'Wave up: 5x5 @ 7 → 5x4 @ 7.5 → 5x3 @ 7.5–8. Add load only when reps and bar speed stay clean.',
    weeks: [
      {
        week: 3, warmup: 'WU3 · Fast + Elastic', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Rotational Throw', '3-5x3 · full rest'],
            ['B', 'Bench Press', '5x5 @ RPE 7'],
            ['C', 'Chest Supported Row', '4x6 @ RPE 7'],
            ['D', 'Posterior / Hamstrings', 'RDL or GHR — 3x6 · add load when clean'],
            ['E', 'Secondary Press', 'DB Incline or Landmine — 3x8 @ RPE 7'],
            ['F', 'Circuit', '30s/30s x2: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Hurdle Hop (mini)', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '5x5 @ RPE 7 · rack by level'],
            ['C', 'Trap Bar Deadlift', '4x5 @ RPE 7'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '30s/30s x2: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
      {
        week: 4, warmup: 'WU2 · Build Speed', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · Split-Stance MB Slam', '3-5x3 · full rest'],
            ['B', 'Bench Press', '5x4 @ RPE 7.5'],
            ['C', 'Chest Supported Row', '4x5 @ RPE 7.5'],
            ['D', 'Posterior / Hamstrings', 'RDL or GHR — 3x6 · heavier'],
            ['E', 'Secondary Press', 'DB Incline or Landmine — 3x6-8 · heavier'],
            ['F', 'Circuit', '30s/30s x2: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Lateral Bound', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '5x4 @ RPE 7.5 · rack by level'],
            ['C', 'Trap Bar Deadlift', '4x4 @ RPE 7.5'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '30s/30s x2: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
      {
        week: 5, warmup: 'WU2 · Build Speed', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Chest Pass', '3-5x3 · full rest'],
            ['B', 'Bench Press', '5x4 @ RPE 7.5 · heavier'],
            ['C', 'Chest Supported Row', '4x5 @ RPE 7.5'],
            ['D', 'Posterior / Hamstrings', 'RDL or GHR — 3x6 · heavier'],
            ['E', 'Secondary Press', 'DB Incline or Landmine — 3x6-8'],
            ['F', 'Circuit', '20s/20s x3 · heavier: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Low Box Jump', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '5x4 @ RPE 7.5 · heavier · rack by level'],
            ['C', 'Trap Bar Deadlift', '5x4 @ RPE 7.5'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '20s/20s x3 · heavier: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
      {
        week: 6, warmup: 'WU3 · Fast + Elastic', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Overhead Slam', '3-5x3 · full rest'],
            ['B', 'Bench Press', '5x3 @ RPE 7.5-8'],
            ['C', 'Chest Supported Row', '4x5 @ RPE 7.5'],
            ['D', 'Posterior / Hamstrings', 'RDL or GHR — 3x6'],
            ['E', 'Secondary Press', 'DB Incline or Landmine — 3x6-8'],
            ['F', 'Circuit', '30s/30s x2: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Broad Jump', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '5x3 @ RPE 7.5-8 · rack by level'],
            ['C', 'Trap Bar Deadlift', '4x3 @ RPE 7.5-8'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '30s/30s x2: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
    ],
  },
  {
    title: 'Mid-Cycle Reset',
    range: 'Week 7 · True Deload + KPI Check',
    desc: 'Everything comes down — bars, circuits, volume — and the jump/speed KPIs get tested fresh. Loading blocks never exceed four consecutive weeks.',
    weeks: [
      {
        week: 7, warmup: 'WU4 · Deload / KPI Prep', deload: true,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Rotational Throw', '3-5x3 · full rest'],
            ['A2', 'KPI Check', 'Vertical 3 attempts · Fly 10 x2 timed · record everything'],
            ['B', 'Bench Press', '3x3 @ RPE 6 · deload'],
            ['C', 'Chest Supported Row', '3x5 · light'],
            ['D', 'Posterior / Hamstrings', 'light choice — 2x6'],
            ['E', 'Secondary Press', '2x6 · light'],
            ['F', 'Circuit', '20s/20s x2 · deload: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Hurdle Hop (mini)', '3-5x2-3 · full rest'],
            ['A2', 'KPI Check', 'Broad 3 attempts · Bench + Front Squat clean heavy set (Wks 11/15)'],
            ['B', 'Front Squat', '3x3 @ RPE 6 · deload · rack by level'],
            ['C', 'Trap Bar Deadlift', '3x3 @ RPE 6 · deload'],
            ['D', 'Pull-Up Ladder', '3 light sets · by level'],
            ['E', 'Single Leg / Posterior', '2x5/side · light'],
            ['F', 'Mobility / Tissue Circuit', '20s/20s x2 · deload: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
    ],
  },
  {
    title: 'Phase 3 · Max Strength',
    range: 'Weeks 8–11',
    desc: 'Express strength without grinders: RPE 7.5 → 8 → 8.5, then a full deload and KPI battery in Week 11.',
    weeks: [
      {
        week: 8, warmup: 'WU2 · Build Speed', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · Split-Stance MB Slam', '3-5x3 · full rest'],
            ['B', 'Bench Press', '5x3 @ RPE 7.5'],
            ['C', 'Chest Supported Row', '4x5 @ RPE 8'],
            ['D', 'Posterior / Hamstrings', 'GHR — 3x6 · add load if possible'],
            ['E', 'Secondary Press', 'DB Incline Cluster — 6 → 4 → 2 x3'],
            ['F', 'Circuit', '20s/20s x3 · heavier: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Lateral Bound', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '5x3 @ RPE 7.5 · rack by level'],
            ['C', 'Trap Bar Deadlift', '4x4 @ RPE 7'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '20s/20s x3 · heavier: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
      {
        week: 9, warmup: 'WU3 · Fast + Elastic', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Chest Pass', '3-5x3 · full rest'],
            ['B', 'Bench Press', '5x3 @ RPE 8'],
            ['C', 'Chest Supported Row', '4x5 @ RPE 8'],
            ['D', 'Posterior / Hamstrings', 'GHR — 3x6 · loaded'],
            ['E', 'Secondary Press', 'DB Incline Cluster — 6 → 4 → 2 x3'],
            ['F', 'Circuit', '30s/30s x2: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Low Box Jump', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '5x3 @ RPE 8 · rack by level'],
            ['C', 'Trap Bar Deadlift', '4x3 @ RPE 7.5-8'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '30s/30s x2: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
      {
        week: 10, warmup: 'WU3 · Fast + Elastic', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Overhead Slam', '3-5x3 · full rest'],
            ['B', 'Bench Press', '5x2 @ RPE 8-8.5'],
            ['C', 'Chest Supported Row', '4x5 @ RPE 8'],
            ['D', 'Posterior / Hamstrings', 'GHR — 4x5 · hard'],
            ['E', 'Secondary Press', 'DB Incline Cluster — 6 → 4 → 3 x3'],
            ['F', 'Circuit', '20s/20s x3: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Broad Jump', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '5x2 @ RPE 8-8.5 · rack by level'],
            ['C', 'Trap Bar Deadlift', '5x2 @ RPE 8-8.5'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '20s/20s x3: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
      {
        week: 11, warmup: 'WU4 · Deload / KPI Prep', deload: true,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Rotational Throw', '3-5x3 · full rest'],
            ['A2', 'KPI Check', 'Vertical 3 attempts · Fly 10 x2 timed · record everything'],
            ['B', 'Bench Press', '3x3 @ RPE 6 · deload'],
            ['C', 'Chest Supported Row', '3x5 · light'],
            ['D', 'Posterior / Hamstrings', 'light choice — 2x6'],
            ['E', 'Secondary Press', '2x6 · light'],
            ['F', 'Circuit', '20s/20s x2 · deload: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Hurdle Hop (mini)', '3-5x2-3 · full rest'],
            ['A2', 'KPI Check', 'Broad 3 attempts · Bench + Front Squat clean heavy set (Wks 11/15)'],
            ['B', 'Front Squat', '3x3 @ RPE 6 · deload · rack by level'],
            ['C', 'Trap Bar Deadlift', '3x3 @ RPE 6 · deload'],
            ['D', 'Pull-Up Ladder', '3 light sets · by level'],
            ['E', 'Single Leg / Posterior', '2x5/side · light'],
            ['F', 'Mobility / Tissue Circuit', '20s/20s x2 · deload: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
    ],
  },
  {
    title: 'Phase 4 · Speed Strength',
    range: 'Weeks 12–15',
    desc: 'Convert strength into fast outputs — every main-lift rep moves with intent. Week 15 resets and closes with the final KPI battery.',
    weeks: [
      {
        week: 12, warmup: 'WU1 · Teach + Groove', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · Split-Stance MB Slam', '3-5x3 · full rest'],
            ['B', 'Bench Press', '6x3 @ RPE 6.5-7 · fast reps'],
            ['C', 'Chest Supported Row', '4x6 · crisp'],
            ['D', 'Posterior / Hamstrings', 'RDL — 3x6 · fast reps'],
            ['E', 'Secondary Press', 'Landmine Press — 3x8'],
            ['F', 'Circuit', '30s/30s x2: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Lateral Bound', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '6x3 @ RPE 6.5-7 · fast reps · rack by level'],
            ['C', 'Trap Bar Deadlift', '6x2 @ RPE 6.5-7 · bar speed'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '30s/30s x2: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
      {
        week: 13, warmup: 'WU2 · Build Speed', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Chest Pass', '3-5x3 · full rest'],
            ['B', 'Bench Press', '6x3 @ RPE 6.5-7 · slightly heavier, still fast'],
            ['C', 'Chest Supported Row', '4x6 · crisp'],
            ['D', 'Posterior / Hamstrings', 'RDL — 3x6 · fast reps'],
            ['E', 'Secondary Press', 'Landmine Press — 3x8'],
            ['F', 'Circuit', '20s/20s x3: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Low Box Jump', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '6x3 @ RPE 6.5-7 · slightly heavier · rack by level'],
            ['C', 'Trap Bar Deadlift', '6x2 @ RPE 6.5-7'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '20s/20s x3: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
      {
        week: 14, warmup: 'WU3 · Fast + Elastic', deload: false,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Overhead Slam', '3-5x3 · full rest'],
            ['B', 'Bench Press', '5x3 @ RPE 7.5 · crisp'],
            ['C', 'Chest Supported Row', '4x6 · crisp'],
            ['D', 'Posterior / Hamstrings', 'RDL — 3x6 · fast reps'],
            ['E', 'Secondary Press', 'Landmine Press — 3x8'],
            ['F', 'Circuit', '20s/20s x3 · heavier: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Broad Jump', '3-5x2-3 · full rest'],
            ['B', 'Front Squat', '5x3 @ RPE 7.5 · crisp · rack by level'],
            ['C', 'Trap Bar Deadlift', '4x3 @ RPE 7.5'],
            ['D', 'Pull-Up Ladder', '4x5 · by level (see Ladder)'],
            ['E', 'Single Leg / Posterior', 'RFESS or Reverse Lunge — 3x6/side @ RPE 7'],
            ['F', 'Mobility / Tissue Circuit', '20s/20s x3 · heavier: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
      {
        week: 15, warmup: 'WU4 · Deload / KPI Prep', deload: true,
        days: [
          { title: 'Day 1 · Full Body (Bench Priority)', blocks: [
            ['A', 'Med Ball Power · MB Rotational Throw', '3-5x3 · full rest'],
            ['A2', 'KPI Check', 'Vertical 3 attempts · Fly 10 x2 timed · record everything'],
            ['B', 'Bench Press', '3x3 @ RPE 6 · reset'],
            ['C', 'Chest Supported Row', '3x5 · light'],
            ['D', 'Posterior / Hamstrings', 'light choice — 2x6'],
            ['E', 'Secondary Press', '2x6 · light'],
            ['F', 'Circuit', '20s/20s x2 · deload: Weighted DB Crunch, Copenhagen Hold, Side Plank, Carry'],
          ]},
          { title: 'Day 2 · Full Body (Squat + Trap Priority)', blocks: [
            ['A', 'Jump Power · Hurdle Hop (mini)', '3-5x2-3 · full rest'],
            ['A2', 'KPI Check', 'Broad 3 attempts · Bench + Front Squat clean heavy set (Wks 11/15)'],
            ['B', 'Front Squat', '3x3 @ RPE 6 · reset · rack by level'],
            ['C', 'Trap Bar Deadlift', '3x3 @ RPE 6 · reset'],
            ['D', 'Pull-Up Ladder', '3 light sets · by level'],
            ['E', 'Single Leg / Posterior', '2x5/side · light'],
            ['F', 'Mobility / Tissue Circuit', '20s/20s x2 · deload: Mini-Hurdle Flow, Copenhagen, Side Plank, Carry'],
          ]},
        ],
      },
    ],
  },
];
