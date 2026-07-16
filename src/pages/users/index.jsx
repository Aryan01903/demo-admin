"use client";
import DashboardShell from "../../components/DashboardShells";
import { MoreHorizontal } from "lucide-react";

const users = [
  { name: "Aryan Shrivastav", email: "aryan@rptn.com", role: "Admin", status: "Active" },
  { name: "Priya Verma", email: "priya@rptn.com", role: "Editor", status: "Active" },
  { name: "Rohit Gupta", email: "rohit@rptn.com", role: "Member", status: "Invited" },
  { name: "Simran Kaur", email: "simran@rptn.com", role: "Member", status: "Active" },
  { name: "Aman Yadav", email: "aman@rptn.com", role: "Viewer", status: "Suspended" },
];

const statusStyles = {
  Active: "bg-green-50 text-green-700",
  Invited: "bg-amber-50 text-amber-700",
  Suspended: "bg-red-50 text-red-700",
};

export default function UsersPage() {
  return (
    <DashboardShell active="Users" title="Users" subtitle="Manage people who have access to your workspace">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-900">All users ({users.length})</h2>
          <button className="rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-slate-800">
            Invite user
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                <th className="pb-3 pr-4 font-medium">Name</th>
                <th className="pb-3 pr-4 font-medium">Email</th>
                <th className="pb-3 pr-4 font-medium">Role</th>
                <th className="pb-3 pr-4 font-medium">Status</th>
                <th className="pb-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                        {user.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="font-medium text-slate-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-slate-600">{user.email}</td>
                  <td className="py-3 pr-4 text-slate-600">{user.role}</td>
                  <td className="py-3 pr-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[user.status]}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <button className="text-slate-400 hover:text-slate-600" aria-label="More options">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
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