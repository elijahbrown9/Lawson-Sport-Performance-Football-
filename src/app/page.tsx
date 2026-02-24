import { LeaderboardTable } from '@/components/LeaderboardTable';
import { DASHBOARD_REVALIDATE_SECONDS, fetchDashboardData } from '@/lib/dashboardData';

export const revalidate = DASHBOARD_REVALIDATE_SECONDS;

export default async function DashboardPage() {
  const data = await fetchDashboardData();
  const rows = [...data.rows].sort((a, b) => (b.compositeScore ?? -Infinity) - (a.compositeScore ?? -Infinity));

  return (
    <LeaderboardTable
      title="Team Dashboard"
      subtitle="Leaderboard sorted by composite score"
      fetchedAt={data.fetchedAt}
      rows={rows}
      columns={[
        { key: 'firstName', label: 'First Name', type: 'text' },
        { key: 'compositeScore', label: 'Composite Score', type: 'number' },
        { key: 'attendancePct', label: 'Attendance', type: 'percent' },
        { key: 'verticalJumpMostRecent', label: 'Vertical Jump', type: 'number' },
        { key: 'flags', label: 'Flags', type: 'text' },
      ]}
    />
  );
}
