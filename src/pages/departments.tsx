import { FaBriefcase, FaEdit, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import Header from "../components/header";

export default function Departments() {
  const jobs = [
    {
      id: 1,
      company: "TechWave Ltd",
      image: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
      description:
        "Innovative tech solutions provider delivering smart, scalable software for modern businesses.",
      status: "Public",
      created: "07/06/2025",
      updated: "07/06/2026",
    },
    {
      id: 2,
      company: "SoftCore Inc",
      image: "https://cdn-icons-png.flaticon.com/512/1048/1048913.png",
      description: "...",
      status: "Private",
      created: "18/04/2024",
      updated: "18/04/2025",
    },
    {
      id: 3,
      company: "SoftCore Inc",
      image: "https://cdn-icons-png.flaticon.com/512/742/742751.png",
      description:
        "Leading technology firm building reliable software products for various industry requirements.",
      status: "Public",
      created: "09/01/2023",
      updated: "09/01/2025",
    },
    {
      id: 4,
      company: "Designify Studio",
      image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      description:
        "Creative design agency delivering unique branding, UI/UX, and modern digital experiences.",
      status: "Private",
      created: "15/03/2024",
      updated: "15/03/2025",
    },
  ];

  return (
    <main className="flex-1 p-6 md:p-8 bg-gray-100 min-h-screen overflow-y-auto">
      <Header
        title={"Departments"}
        inputtitle={"Search Departments..."}
        jobmodel={"Add Departments"}
      />

      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs uppercase tracking-wide">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Id</th>
                <th className="px-6 py-4 text-left font-semibold">
                  Departments
                </th>
                <th className="px-6 py-4 text-left font-semibold">Image</th>
                <th className="px-6 py-4 text-left font-semibold">
                  Description
                </th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-center font-semibold">Created</th>
                <th className="px-6 py-4 text-center font-semibold">Updated</th>
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
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {job.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={job.image ? job.image : "/default-company.png"}
                      alt="Company Logo"
                      className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {job.description}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                        job.status === "Public"
                          ? "bg-green-50 border border-gray-200 text-green-600"
                          : "bg-red-50 border border-gray-200 text-red-600"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          job.status === "Public"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></span>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-800">
                    {job.created}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-800">
                    {job.updated}
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
