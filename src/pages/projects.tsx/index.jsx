"use client";
import DashboardShell from "../../components/DashboardShells";
import { FolderKanban, Users } from "lucide-react";

const projects = [
  { name: "SurgeProbe", description: "API load testing platform", progress: 82, members: 4, status: "On track" },
  { name: "InteractHub", description: "WebRTC collaboration SaaS", progress: 55, members: 3, status: "On track" },
  { name: "ShelfMate", description: "AI book recommendations", progress: 30, members: 2, status: "At risk" },
  { name: "Admin Panel Revamp", description: "Internal dashboard redesign", progress: 95, members: 5, status: "Almost done" },
];

const statusStyles = {
  "On track": "bg-green-50 text-green-700",
  "At risk": "bg-red-50 text-red-700",
  "Almost done": "bg-amber-50 text-amber-700",
};

export default function ProjectsPage() {
  return (
    <DashboardShell active="Projects" title="Projects" subtitle="Track progress across all active projects">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-start justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                <FolderKanban className="h-4 w-4 text-slate-600" />
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[project.status]}`}>
                {project.status}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-slate-900">{project.name}</h3>
            <p className="mt-0.5 text-xs text-slate-500">{project.description}</p>

            <div className="mt-4">
              <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-slate-900"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
              <Users className="h-3.5 w-3.5" />
              {project.members} members
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}