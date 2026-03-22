import { LeaderboardTable } from '@/components/LeaderboardTable';
import { DASHBOARD_REVALIDATE_SECONDS, fetchDashboardData } from '@/lib/dashboardData';

export const revalidate = DASHBOARD_REVALIDATE_SECONDS;

export default async function StrengthPage() {
  const data = await fetchDashboardData();
  const rows = [...data.rows].sort((a, b) => (b.compositeScore ?? -Infinity) - (a.compositeScore ?? -Infinity));

  return (
    <LeaderboardTable
      title="Strength Metrics"
      subtitle="Recent strength numbers, sorted by composite score"
      fetchedAt={data.fetchedAt}
      rows={rows}
      columns={[
        { key: 'firstName', label: 'First Name', type: 'text' },
        { key: 'frontSquatEst1RM', label: 'Front Squat 1RM', type: 'number' },
        { key: 'benchLast', label: 'Bench Last', type: 'number' },
        { key: 'trapBarDLLast', label: 'Trap Bar DL Last', type: 'number' },
        { key: 'highPullLast', label: 'High Pull Last', type: 'number' },
        { key: 'rdlLast', label: 'RDL Last', type: 'number' },
      ]}
    />
  );
}
