export const DASHBOARD_REVALIDATE_SECONDS = 60;

export type DashboardRow = {
  firstName: string;
  attendancePct: number | null;
  frontSquatEst1RM: number | null;
  benchLast: number | null;
  trapBarDLLast: number | null;
  highPullLast: number | null;
  rdlLast: number | null;
  verticalJumpMostRecent: number | null;
  compositeScore: number | null;
  flags: string;
};

export type DashboardDataResult = {
  rows: DashboardRow[];
  fetchedAt: string;
  sourceUrl: string;
};

const NUMERIC_COLUMNS = [
  'AttendancePct',
  'FrontSquatEst1RM',
  'BenchLast',
  'TrapBarDLLast',
  'HighPullLast',
  'RDLLast',
  'VerticalJumpMostRecent',
  'CompositeScore',
] as const;

function parseCsvLine(line: string): string[] {
  const cells: string[] = [];
  let current = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"') {
      if (insideQuotes && next === '"') {
        current += '"';
        i += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
      continue;
    }

    if (char === ',' && !insideQuotes) {
      cells.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  cells.push(current.trim());
  return cells;
}

function parseCsv(csvText: string): Record<string, string>[] {
  const lines = csvText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    return [];
  }

  const headers = parseCsvLine(lines[0]);

  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    return headers.reduce<Record<string, string>>((acc, header, idx) => {
      acc[header] = values[idx] ?? '';
      return acc;
    }, {});
  });
}

function parseNumber(value: string | undefined): number | null {
  if (!value) return null;
  const normalized = value.replace(/[%,$]/g, '').trim();
  if (!normalized) return null;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizeAttendancePct(value: number | null): number | null {
  if (value === null) return null;
  if (value >= 0 && value <= 1) return value * 100;
  return value;
}

function mapRow(row: Record<string, string>): DashboardRow {
  const numeric = Object.fromEntries(
    NUMERIC_COLUMNS.map((column) => [column, parseNumber(row[column])]),
  ) as Record<(typeof NUMERIC_COLUMNS)[number], number | null>;

  return {
    firstName: (row.FirstName ?? '').trim() || 'Unknown',
    attendancePct: normalizeAttendancePct(numeric.AttendancePct),
    frontSquatEst1RM: numeric.FrontSquatEst1RM,
    benchLast: numeric.BenchLast,
    trapBarDLLast: numeric.TrapBarDLLast,
    highPullLast: numeric.HighPullLast,
    rdlLast: numeric.RDLLast,
    verticalJumpMostRecent: numeric.VerticalJumpMostRecent,
    compositeScore: numeric.CompositeScore,
    flags: (row.Flags ?? '').trim(),
  };
}

export async function fetchDashboardData(): Promise<DashboardDataResult> {
  const sourceUrl = process.env.NEXT_PUBLIC_DASHBOARD_CSV_URL;

  if (!sourceUrl) {
    return {
      rows: [],
      fetchedAt: new Date().toISOString(),
      sourceUrl: '',
    };
  }

  try {
    const response = await fetch(sourceUrl, {
      next: { revalidate: DASHBOARD_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return {
        rows: [],
        fetchedAt: new Date().toISOString(),
        sourceUrl,
      };
    }

    const csvText = await response.text();
    const parsedRows = parseCsv(csvText).map(mapRow);

    return {
      rows: parsedRows,
      fetchedAt: new Date().toISOString(),
      sourceUrl,
    };
  } catch {
    return {
      rows: [],
      fetchedAt: new Date().toISOString(),
      sourceUrl,
    };
  }
}

export function formatPercent(value: number | null): string {
  if (value === null) return '—';
  return `${value.toFixed(1)}%`;
}

export function formatNumber(value: number | null): string {
  if (value === null) return '—';
  return value.toLocaleString();
}
