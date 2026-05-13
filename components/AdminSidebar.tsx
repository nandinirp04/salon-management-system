"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    badge: "12",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </svg>
    ),
  },
  {
    label: "Customers",
    href: "/admin/customers",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Appointments",
    href: "/admin/appointments",
    badge: "5",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    label: "Services",
    href: "/admin/services",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 4c3 0 5 2 5 5 0 5-7 11-7 11S5 14 5 9c0-3 2-5 5-5 1.74 0 3.41.81 4 2.09C14.59 4.81 16.26 4 18 4z" />
      </svg>
    ),
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.9 0 1.65.61 1.91 1.44" />
      </svg>
    ),
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`relative flex flex-col min-h-screen border-r border-white/5 bg-[#0a0a0a] text-white transition-all duration-300 ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,110,0.14),transparent_35%)] pointer-events-none" />

      {/* Header */}
      <div className="relative flex items-center justify-between px-5 py-6 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#c9a96e] to-[#8f6a2f] shadow-[0_0_25px_rgba(201,169,110,0.35)]">
            <span className="text-black font-black text-lg">L</span>
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-[15px] font-semibold tracking-wide">
                Lumière
              </h1>
              <p className="text-[11px] text-white/35 tracking-[0.25em] uppercase">
                Salon System
              </p>
            </div>
          )}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="px-4 pt-5">
          <div className="flex items-center gap-3 px-4 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.04] focus-within:border-[#c9a96e]/40 transition">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/30"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.3-4.3" />
            </svg>

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white placeholder:text-white/25 w-full"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {!collapsed && (
          <p className="px-3 pb-2 text-[10px] uppercase tracking-[0.3em] text-white/25">
            Navigation
          </p>
        )}

        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-[#c9a96e]/20 to-[#c9a96e]/5 text-[#f4d29b] shadow-[0_0_20px_rgba(201,169,110,0.12)] border border-[#c9a96e]/10"
                  : "text-white/55 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-[#c9a96e]" />
              )}

              <span
                className={`transition-all ${
                  isActive
                    ? "text-[#c9a96e]"
                    : "text-white/35 group-hover:text-white/70"
                }`}
              >
                {item.icon}
              </span>

              {!collapsed && (
                <>
                  <span className="text-sm font-medium">{item.label}</span>

                  {item.badge && (
                    <span className="ml-auto px-2 py-0.5 text-[10px] rounded-full bg-[#c9a96e]/15 text-[#f4d29b] border border-[#c9a96e]/15">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Card */}
      {!collapsed && (
        <div className="px-4 pb-4">
          <div className="relative overflow-hidden rounded-3xl border border-[#c9a96e]/10 bg-gradient-to-br from-[#151515] to-[#0d0d0d] p-5">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#c9a96e]/10 blur-3xl" />

            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Premium
            </p>

            <h3 className="mt-2 text-lg font-semibold leading-snug">
              Upgrade your
              <br />
              salon empire ✨
            </h3>

            <button className="mt-5 w-full rounded-2xl bg-[#c9a96e] py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
              Upgrade Plan
            </button>
          </div>
        </div>
      )}

      {/* User */}
      <div className="border-t border-white/[0.06] p-4">
        <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c9a96e] to-[#8f6a2f] font-bold text-black shadow-lg">
            AD
          </div>

          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white/90">
                Admin
              </p>
              <p className="truncate text-xs text-white/35">
                admin@lumiere.com
              </p>
            </div>
          )}

          {!collapsed && (
            <button className="rounded-xl p-2 text-white/35 hover:bg-white/[0.05] hover:text-white transition">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}