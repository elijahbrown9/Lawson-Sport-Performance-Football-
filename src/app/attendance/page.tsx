import { LeaderboardTable } from '@/components/LeaderboardTable';
import { DASHBOARD_REVALIDATE_SECONDS, fetchDashboardData } from '@/lib/dashboardData';

export const revalidate = DASHBOARD_REVALIDATE_SECONDS;

export default async function AttendancePage() {
  const data = await fetchDashboardData();
  const rows = [...data.rows].sort((a, b) => (b.attendancePct ?? -Infinity) - (a.attendancePct ?? -Infinity));

  return (
    <LeaderboardTable
      title="Attendance Leaderboard"
      subtitle="Sorted by attendance percentage"
      fetchedAt={data.fetchedAt}
      rows={rows}
      columns={[
        { key: 'firstName', label: 'First Name', type: 'text' },
        { key: 'attendancePct', label: 'Attendance', type: 'percent' },
        { key: 'compositeScore', label: 'Composite Score', type: 'number' },
        { key: 'flags', label: 'Flags', type: 'text' },
      ]}
    />
  );
}
