import { DashboardRow, formatNumber, formatPercent } from '@/lib/dashboardData';

type Column = {
  key: keyof DashboardRow;
  label: string;
  type?: 'number' | 'percent' | 'text';
};

type LeaderboardTableProps = {
  rows: DashboardRow[];
  columns: Column[];
  title: string;
  subtitle: string;
  fetchedAt: string;
};

function renderCell(row: DashboardRow, column: Column) {
  const value = row[column.key];

  if (column.type === 'percent') {
    return formatPercent(typeof value === 'number' ? value : null);
  }

  if (column.type === 'number') {
    return formatNumber(typeof value === 'number' ? value : null);
  }

  return typeof value === 'string' && value ? value : '—';
}

export function LeaderboardTable({ rows, columns, title, subtitle, fetchedAt }: LeaderboardTableProps) {
  return (
    <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-xl shadow-slate-950/30 sm:p-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-lawsonYellow">{title}</h1>
        <p className="text-sm text-slate-300">{subtitle}</p>
        <p className="text-xs text-slate-400">Last updated: {new Date(fetchedAt).toLocaleString()}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-sm">
          <thead>
            <tr className="bg-slate-800/70 text-left text-xs uppercase tracking-wider text-slate-200">
              <th className="sticky left-0 bg-slate-800 px-4 py-3">#</th>
              {columns.map((column) => (
                <th key={String(column.key)} className="px-4 py-3">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const highlight = index < 3;
              return (
                <tr
                  key={`${row.firstName}-${index}`}
                  className={highlight ? 'bg-lawsonYellow/10' : 'bg-slate-900/20'}
                >
                  <td className="sticky left-0 border-b border-slate-800 bg-inherit px-4 py-3 font-semibold text-lawsonYellow">
                    {index + 1}
                  </td>
                  {columns.map((column) => (
                    <td key={String(column.key)} className="border-b border-slate-800 px-4 py-3 text-slate-100">
                      {renderCell(row, column)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
