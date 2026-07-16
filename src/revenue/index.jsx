"use client";
import DashboardShell from "../components/DashboardShells";
import { DollarSign, TrendingUp, CreditCard } from "lucide-react";

const revenueStats = [
  { label: "This month", value: "$54,239", change: "+8.1%", icon: DollarSign },
  { label: "Avg. order value", value: "$182", change: "+2.4%", icon: CreditCard },
  { label: "Growth rate", value: "12.4%", change: "+1.1%", icon: TrendingUp },
];

const monthly = [
  { month: "Feb", value: 32 },
  { month: "Mar", value: 41 },
  { month: "Apr", value: 38 },
  { month: "May", value: 55 },
  { month: "Jun", value: 47 },
  { month: "Jul", value: 62 },
];

const maxValue = Math.max(...monthly.map((m) => m.value));

export default function RevenuePage() {
  return (
    <DashboardShell active="Revenue" title="Revenue" subtitle="Track income and payment trends over time">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {revenueStats.map(({ label, value, change, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">{label}</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                <Icon className="h-4 w-4 text-slate-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900">{value}</div>
            <div className="mt-1 text-xs font-medium text-green-600">{change} vs last month</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="mb-6 text-base font-semibold text-slate-900">Monthly revenue</h2>
        <div className="flex h-48 items-end gap-4 sm:gap-6">
          {monthly.map((m) => (
            <div key={m.month} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-40 w-full items-end">
                <div
                  className="w-full rounded-t-md bg-slate-900"
                  style={{ height: `${(m.value / maxValue) * 100}%` }}
                />
              </div>
              <span className="text-xs text-slate-500">{m.month}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}