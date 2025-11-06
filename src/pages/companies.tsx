import { FaBriefcase, FaEdit, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import Header from "../components/header";

export default function Companies() {
  const jobs = [
    {
      id: 1,
      company: "TechWave Ltd",
      location: "Lahore, Pakistan",
      status: "Open",
      date: "07/06/2025",
    },
    {
      id: 2,
      company: "SoftCore Inc",
      location: "Karachi, Pakistan",
      status: "Closed",
      date: "18/04/2024",
    },
    {
      id: 3,
      company: "SoftCore Inc",
      location: "Karachi, Pakistan",
      status: "Not Announced",
      date: "09/01/2023",
    },
    {
      id: 4,
      company: "Designify Studio",
      location: "Remote",
      status: "Coming Soon",
      date: "15/03/2024",
    },
  ];
  return (
    <main className="flex-1 p-6 md:p-8 bg-gray-100 min-h-screen overflow-y-auto">
      <Header title={"Company"} inputtitle={"Search Company..."} jobmodel={"Add Company"}/>

      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs uppercase tracking-wide">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Id</th>
                <th className="px-6 py-4 text-left font-semibold">Company</th>
                <th className="px-6 py-4 text-left font-semibold">Location</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-center font-semibold">Date</th>
                <th className="px-6 py-4 text-right font-semibold">Actions</th>
              </tr>
            </thead>

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
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{job.company}</td>
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
    </main>
  );
}
