import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: string;
  trendUp?: boolean;
  subtitle?: string;
  progress?: number;
  glowColor?: string;
}

export default function DashboardCard({
  title,
  value,
  icon,
  trend,
  trendUp,
  subtitle = "Updated just now",
  progress,
  glowColor = "from-[#c9a96e]/25 to-transparent",
}: DashboardCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a96e]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${glowColor} opacity-60`}
      />

      {/* Decorative Blur */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#c9a96e]/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

      {/* Content */}
      <div className="relative z-10">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/30">
              {title}
            </p>

            <div className="mt-4 flex items-end gap-2">
              <h2 className="text-4xl font-black tracking-tight text-white">
                {value}
              </h2>

              {trend && (
                <div
                  className={`mb-1 flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur-xl ${
                    trendUp
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/10"
                      : "bg-rose-500/10 text-rose-400 border border-rose-500/10"
                  }`}
                >
                  <span className="text-xs">
                    {trendUp ? "↗" : "↘"}
                  </span>

                  {trend}
                </div>
              )}
            </div>
          </div>

          {/* Icon */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#c9a96e] shadow-[0_0_25px_rgba(201,169,110,0.15)] transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c9a96e]/15 to-transparent" />
            <div className="relative z-10">{icon}</div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="mt-3 flex items-center gap-2 text-sm text-white/35">
          <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
          {subtitle}
        </div>

        {/* Progress */}
        {typeof progress === "number" && (
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-wider text-white/30">
              <span>Performance</span>
              <span>{progress}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#c9a96e] to-[#f5d18c] shadow-[0_0_18px_rgba(201,169,110,0.5)] transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Bottom Stats */}
        <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
              Status
            </p>
            <p className="mt-1 text-sm font-medium text-white/75">
              Live Analytics
            </p>
          </div>

          <button className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/60 transition hover:border-[#c9a96e]/20 hover:bg-[#c9a96e]/10 hover:text-[#f5d18c]">
            View Report
          </button>
        </div>
      </div>
    </div>
  );
}