"use client";
import DashboardShell from "../../components/DashboardShells";
import { Users, FolderKanban, CheckSquare, DollarSign } from "lucide-react";

const stats = [
  { label: "Total Users", value: "8,540", change: "+12.4%", icon: Users },
  { label: "Revenue", value: "$54,239", change: "+8.1%", icon: DollarSign },
  { label: "Projects", value: "142", change: "+3.2%", icon: FolderKanban },
  { label: "Tasks", value: "1,024", change: "-2.6%", icon: CheckSquare },
];

const activity = [
  { user: "Aryan Shrivastav", action: "Created a new project", target: "SurgeProbe", time: "2m ago", status: "Completed" },
  { user: "Priya Verma", action: "Updated task", target: "API integration", time: "18m ago", status: "In progress" },
  { user: "Rohit Gupta", action: "Invited a user", target: "team@rptn.com", time: "1h ago", status: "Completed" },
];

const statusStyles = {
  Completed: "bg-green-50 text-green-700",
  "In progress": "bg-amber-50 text-amber-700",
  Failed: "bg-red-50 text-red-700",
};

export default function DashboardPage() {
  return (
    <DashboardShell active="Dashboard" title="Dashboard" subtitle="Overview of your workspace activity">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, change, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">{label}</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                <Icon className="h-4 w-4 text-slate-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900">{value}</div>
            <div className={`mt-1 text-xs font-medium ${change.startsWith("-") ? "text-red-600" : "text-green-600"}`}>
              {change} vs last month
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="mb-4 text-base font-semibold text-slate-900">Recent activity</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                <th className="pb-3 pr-4 font-medium">User</th>
                <th className="pb-3 pr-4 font-medium">Action</th>
                <th className="pb-3 pr-4 font-medium">Target</th>
                <th className="pb-3 pr-4 font-medium">Time</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {activity.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="py-3 pr-4 font-medium text-slate-900">{row.user}</td>
                  <td className="py-3 pr-4 text-slate-600">{row.action}</td>
                  <td className="py-3 pr-4 text-slate-600">{row.target}</td>
                  <td className="py-3 pr-4 text-slate-400">{row.time}</td>
                  <td className="py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}