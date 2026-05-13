import DashboardCard from "@/components/admin/dashboard/DashboardCard";

export default function AdminDashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#1a1a1a] tracking-tight">Dashboard</h1>
        <p className="text-sm text-[#888] mt-1">Welcome back — here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
        <DashboardCard title="Total Customers" value="284" change="+12 this month" />
        <DashboardCard title="Appointments Today" value="18" change="3 pending" />
        <DashboardCard title="Revenue (Month)" value="₹42,500" change="+8% vs last month" />
        <DashboardCard title="Active Services" value="12" change="2 added recently" />
      </div>

      {/* Recent appointments placeholder */}
      <div className="bg-white rounded-xl border border-[#ebebeb] p-6">
        <h2 className="text-sm font-semibold text-[#1a1a1a] mb-4">Upcoming Appointments</h2>
        <div className="space-y-3">
          {[
            { name: "Priya Sharma", service: "Hair Colour", time: "10:00 AM", status: "Confirmed" },
            { name: "Anjali Mehta", service: "Facial", time: "11:30 AM", status: "Confirmed" },
            { name: "Rohit Verma", service: "Haircut", time: "1:00 PM", status: "Pending" },
            { name: "Sneha Kulkarni", service: "Manicure", time: "3:00 PM", status: "Confirmed" },
          ].map((appt) => (
            <div
              key={appt.name}
              className="flex items-center justify-between py-2.5 border-b border-[#f0f0f0] last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c9a96e]/15 flex items-center justify-center text-[11px] font-semibold text-[#c9a96e]">
                  {appt.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1a1a1a]">{appt.name}</p>
                  <p className="text-xs text-[#888]">{appt.service}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-[#888]">{appt.time}</span>
                <span
                  className={[
                    "text-[11px] font-medium px-2 py-0.5 rounded-full",
                    appt.status === "Confirmed"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600",
                  ].join(" ")}
                >
                  {appt.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
