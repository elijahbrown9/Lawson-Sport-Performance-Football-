import Link from 'next/link';
import { DASHBOARD_REVALIDATE_SECONDS, fetchDashboardData } from '@/lib/dashboardData';

export const revalidate = DASHBOARD_REVALIDATE_SECONDS;

export default async function TodayPage() {
  const data = await fetchDashboardData();

  return (
    <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <h1 className="text-2xl font-semibold text-lawsonYellow">Today&apos;s Focus</h1>
      <p className="text-slate-200">
        Practice intensity, movement quality, and competitive effort. Update this section daily with coaching
        priorities and reminders.
      </p>
      <p className="text-sm text-slate-400">Last updated: {new Date(data.fetchedAt).toLocaleString()}</p>
      <div>
        {data.sourceUrl ? (
          <Link
            href={data.sourceUrl}
            className="inline-block rounded-full border border-lawsonYellow px-4 py-2 text-lawsonYellow hover:bg-lawsonYellow hover:text-lawsonNavy"
          >
            Open Google Sheet
          </Link>
        ) : (
          <p className="text-sm text-slate-300">Add NEXT_PUBLIC_DASHBOARD_CSV_URL to link this page to your sheet.</p>
        )}
      </div>
    </section>
  );
}
