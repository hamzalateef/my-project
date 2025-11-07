import { Button } from "@/components/ui/button";
import { ChartAreaLegend } from "@/components/vacancy-chart";
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
    { title: "New Users", value: 1284, subtitle: "Since last week" },
    { title: "Active Jobs", value: 75, subtitle: "Open positions" },
    { title: "Total Jobs", value: 452, subtitle: "This month" },
    { title: "Compnies", value: 93, subtitle: "Unread" },
  ];

  const activities = [
    "User Ali signed up",
    'Job "Frontend Dev" approved',
    "Report generated: Oct 28",
    "Sana updated profile",
  ];

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
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
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100 text-green-700 font-semibold">
              +{Math.floor(Math.random() * 12) + 1}%
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl font-bold">
                O
              </div>
              <div>
                <div className="font-semibold">Oda Dink</div>
                <div className="text-sm text-gray-500">Programmer</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <div className="text-sm font-semibold">66%</div>
                <div className="text-gray-400">PHP</div>
              </div>
              <div>
                <div className="text-sm font-semibold">37%</div>
                <div className="text-gray-400">YAK</div>
              </div>
              <div>
                <div className="text-sm font-semibold">2%</div>
                <div className="text-gray-400">Other</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-semibold mb-2">Recent Activities</div>
            <ul className="text-sm text-gray-600 space-y-2">
              {activities.map((a, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
              <ChartAreaLegend />
          </div>

          <div className="bg-white p-4 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Recommended Jobs</h4>
              <div className="border p-3 rounded-md mb-2">
                <div className="font-semibold">Senior Frontend Dev</div>
                <div className="text-sm text-gray-500">
                  £40,000 - £60,000 • London
                </div>
              </div>
              <div className="border p-3 rounded-md">
                <div className="font-semibold">UI/UX Designer</div>
                <div className="text-sm text-gray-500">
                  £32,000 - £48,000 • Remote
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Quick Actions</h4>
              <div className="flex flex-col gap-2">
                <Button className="bg-green-500 hover:bg-green-700">
                  Create Job
                </Button>
                <button className="px-4 py-2 rounded-md border border-green-200 text-green-700">
                  Invite User
                </button>
                <button className="px-4 py-2 rounded-md bg-gray-100">
                  Export CSV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
