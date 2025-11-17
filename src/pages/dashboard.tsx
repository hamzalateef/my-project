import JobFormModal from "@/components/job-modal";
import { ChartLineLabel } from "@/components/line-chart";
import { Button } from "@/components/ui/button";
import { ChartAreaLegend } from "@/components/vacancy-chart";
import {
  Users,
  UserPlus,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  Link,
} from "lucide-react";
import {
  FaTachometerAlt,
  FaBell,
  FaUsers,
  FaBriefcase,
  FaBuilding,
  FaFileAlt,
  FaChartBar,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Dashboard() {
  const stats = [
  { title: "Total Users", value: 1284, subtitle: "Unread", icon: () => <Users className="text-green-500" /> },
  { title: "New Users", value: 452, subtitle: "Since last week", icon: () => <UserPlus className="text-green-500" /> },
  { title: "Total Jobs", value: 93, subtitle: "This month", icon: () => <Briefcase className="text-green-500" /> },
  { title: "Active Jobs", value: 57, subtitle: "Open positions", icon: () => <BriefcaseBusiness className="text-green-500" /> },
  { title: "Companies", value: 26, subtitle: "Registered companies", icon: () => <Building2 className="text-green-500" /> },
];

  const activities = [
    "User Ali signed up",
    'Job "Frontend Dev" approved',
    "Report generated: Oct 28",
    "Sana updated profile",
  ];

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <section className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-lg shadow-sm bg-white flex items-center justify-between"
          >
            <div>
              <div className="text-sm text-gray-500">{s.title}</div>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.subtitle}</div>
            </div>
              <div className="mr-2">
                <s.icon />
              </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <ChartLineLabel />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <ChartAreaLegend />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow w-96 mt-5">
        <div>
          <h4 className="font-semibold mb-2">Quick Actions</h4>
          <div className="flex flex-col gap-2.5 mb-2">
            <Button className="bg-green-500 hover:bg-green-600 hover:text-white">
              Create Job
              <JobFormModal />
            </Button>
            <Button className="px-4 py-2 rounded-md bg-gray-50 border border-green-400 text-green-500 hover:text-white hover:bg-green-600">
              Invite User
            </Button>
            <Button className="px-4 py-2 rounded-md text-gray-500 hover:text-white bg-gray-50 border border-gray-400 hover:bg-black">
              Export CSV
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
