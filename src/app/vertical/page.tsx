import { LeaderboardTable } from '@/components/LeaderboardTable';
import { DASHBOARD_REVALIDATE_SECONDS, fetchDashboardData } from '@/lib/dashboardData';

export const revalidate = DASHBOARD_REVALIDATE_SECONDS;

export default async function VerticalPage() {
  const data = await fetchDashboardData();
  const rows = [...data.rows].sort(
    (a, b) => (b.verticalJumpMostRecent ?? -Infinity) - (a.verticalJumpMostRecent ?? -Infinity),
  );

  return (
    <LeaderboardTable
      title="Vertical Jump Leaderboard"
      subtitle="Sorted by most recent vertical jump"
      fetchedAt={data.fetchedAt}
      rows={rows}
      columns={[
        { key: 'firstName', label: 'First Name', type: 'text' },
        { key: 'verticalJumpMostRecent', label: 'Vertical Jump', type: 'number' },
        { key: 'compositeScore', label: 'Composite Score', type: 'number' },
        { key: 'attendancePct', label: 'Attendance', type: 'percent' },
      ]}
    />
  );
}
