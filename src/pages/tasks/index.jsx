"use client";
import { useState } from "react";
import DashboardShell from "../../components/DashboardShells";

const initialTasks = [
  { id: 1, title: "Review SurgeProbe load test results", priority: "High", done: false },
  { id: 2, title: "Fix label mismatch bug in dashboard", priority: "Medium", done: false },
  { id: 3, title: "Deploy staging build for InteractHub", priority: "High", done: true },
  { id: 4, title: "Write onboarding docs for new hires", priority: "Low", done: false },
  { id: 5, title: "Set up BullMQ retry policy", priority: "Medium", done: true },
];

const priorityStyles = {
  High: "bg-red-50 text-red-700",
  Medium: "bg-amber-50 text-amber-700",
  Low: "bg-slate-100 text-slate-600",
};

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);

  function toggleTask(id) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <DashboardShell active="Tasks" title="Tasks" subtitle={`${remaining} tasks remaining`}>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <ul className="divide-y divide-slate-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-3 py-3">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
              />
              <span
                className={`flex-1 text-sm ${
                  task.done ? "text-slate-400 line-through" : "text-slate-800"
                }`}
              >
                {task.title}
              </span>
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${priorityStyles[task.priority]}`}>
                {task.priority}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </DashboardShell>
  );
}