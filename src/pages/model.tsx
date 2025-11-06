import { FaBriefcase, FaPlus, FaSearch } from "react-icons/fa";

export default function Models() {
  return (
    <main className="flex-1 p-6 md:p-8 bg-gray-100 min-h-screen overflow-y-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <p className="pl-1">
            <b>DPID</b>
          </p>
          <div className="w-full md:w-72 mt-1">
            <input
              type="text"
              placeholder="DPID"
              className="w-full border border-gray-300 rounded-lg pl-5 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 bg-white focus:ring-green-400 focus:border-green-300"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
