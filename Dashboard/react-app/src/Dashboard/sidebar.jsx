// src/components/Sidebar.jsx
import { BarChart, Users, Briefcase, User, Settings } from "lucide-react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-[#161b2d] p-5 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform md:translate-x-0 md:static md:inset-0 z-50`}
    >
      <h1 className="text-2xl font-bold mb-8">Vertxlabs, Inc</h1>
      <nav className="space-y-6">
        <NavItem Icon={BarChart} label="Analytics" />
        <NavItem Icon={Users} label="Connect" />
        <NavItem Icon={Briefcase} label="Dealroom" />
        <NavItem Icon={User} label="Profile" />
        <NavItem Icon={Settings} label="Settings" />
      </nav>
    </div>
  );
}

function NavItem({ Icon, label }) {
  return (
    <div className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer">
      <Icon size={20} />
      <span>{label}</span>
    </div>
  );
}
