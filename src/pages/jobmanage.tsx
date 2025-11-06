import { FaSearch, FaPlus, FaEdit, FaTrash, FaBriefcase } from "react-icons/fa";
import Header from "../components/header";

export default function JobManage() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechWave Ltd",
      location: "Lahore, Pakistan",
      status: "Open",
      date: "07/06/2025",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "SoftCore Inc",
      location: "Karachi, Pakistan",
      status: "Closed",
      date: "18/04/2024",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "SoftCore Inc",
      location: "Karachi, Pakistan",
      status: "Not Announced",
      date: "09/01/2023",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Designify Studio",
      location: "Remote",
      status: "Coming Soon",
      date: "15/03/2024",
    },
  ];

  return (
    <main className="flex-1 p-6 md:p-8 bg-gray-100 min-h-screen overflow-y-auto">
      <Header
        title={"Job Management"}
        inputtitle={"Search job title..."}
        jobmodel={"Add New Job"}
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
        {[
          { label: "Total Jobs", value: 128, change: "+5", color: "green" },
          { label: "Open Jobs", value: 83, change: "+2", color: "green" },
          { label: "Closed Jobs", value: 45, change: "-3", color: "red" },
          { label: "Opening Soon", value: 18, change: "+5", color: "green" },
          { label: "Not Announced", value: 3, change: "+1", color: "yellow" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200 flex items-center justify-between"
          >
            <div>
              <div className="text-sm text-gray-500">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
            </div>
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg font-semibold ${
                stat.color === "green"
                  ? "bg-green-100 text-green-700"
                  : stat.color === "red"
                  ? "bg-red-100 text-red-600"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {stat.change}
            </div>
          </div>
        ))}
      </section>

      {/* Jobs Table */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700">
            {/* Table Header */}
            <thead className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs uppercase tracking-wide">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Id</th>
                <th className="px-6 py-4 text-left font-semibold">Title</th>
                <th className="px-6 py-4 text-left font-semibold">Company</th>
                <th className="px-6 py-4 text-left font-semibold">Location</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-center font-semibold">Date</th>
                <th className="px-6 py-4 text-right font-semibold">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">
              {jobs.map((job, i) => (
                <tr
                  key={job.id}
                  className={`transition-all duration-200 hover:bg-green-50 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {job.id}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {job.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{job.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {job.location}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                        job.status === "Open"
                          ? "bg-green-50 border border-gray-200 text-green-600"
                          : job.status === "Closed"
                          ? "bg-red-50 border border-gray-200 text-red-600"
                          : job.status === "Coming Soon"
                          ? "bg-blue-50 border border-gray-200 text-blue-600"
                          : job.status === "Not Announced"
                          ? "bg-yellow-50 border border-gray-200 text-yellow-600"
                          : "bg-gray-50 border border-gray-200 text-gray-600"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          job.status === "Open"
                            ? "bg-green-500"
                            : job.status === "Closed"
                            ? "bg-red-500"
                            : job.status === "Coming Soon"
                            ? "bg-blue-500"
                            : job.status === "Not Announced"
                            ? "bg-yellow-500"
                            : "bg-gray-400"
                        }`}
                      ></span>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-800">
                    {job.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        title="Edit Job"
                        className="p-2 rounded-md hover:bg-green-100 text-green-500 hover:text-green-600 transition-all"
                      >
                        <FaEdit size={14} />
                      </button>
                      <button
                        title="Delete Job"
                        className="p-2 rounded-md hover:bg-red-100 text-red-500 hover:text-red-500 transition-all"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Section */}
    </main>
  );
}
