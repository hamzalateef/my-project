import DeparmentFormModal from "@/components/dep-modal";
import NotFormModal from "@/components/not-modal";
import { Button } from "@/components/ui/button";

export default function Notifications() {
  const notifications = [
    {
      id: "#001",
      title: "Creative Mornings",
      from: "20 July, 2023",
      to: "20 August, 2023",
      status: "Open",
    },
    {
      id: "#002",
      title: "New York Times Cities for Tomorrow",
      from: "20 July, 2023",
      to: "20 August, 2023",
      status: "Close",
    },
    {
      id: "#003",
      title: "Outcome",
      from: "20 July, 2023",
      to: "20 August, 2023",
      status: "Open",
    },
    {
      id: "#004",
      title: "World Design Summit",
      from: "20 July, 2023",
      to: "20 August, 2023",
      status: "Open",
    },
    {
      id: "#005",
      title: "Maison & Objet",
      from: "20 July, 2023",
      to: "20 August, 2023",
      status: "Close",
    },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-black">Push Notification</h1>
        <NotFormModal />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        {/* TABLE HEADER */}
        <div className="grid grid-cols-6 gap-4 bg-gray-50 px-6 py-4 border-b border-gray-200">
          <p className="text-gray-500 font-semibold">ID</p>
          <p className="col-span-2 text-gray-500 font-semibold">Title Name</p>
          <p className="text-gray-500 font-semibold">Active from</p>
          <p className="text-gray-500 font-semibold">Active to</p>
          <p className="text-gray-500 font-semibold text-right">Status</p>
        </div>

        {/* TABLE BODY */}
        {notifications.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-6 gap-4 items-center px-6 py-5 border-b border-gray-100 hover:bg-gray-50 transition-all"
          >
            {/* ID */}
            <div>
              <span className="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-xs font-bold">
                {item.id}
              </span>
            </div>

            {/* TITLE */}
            <div className="col-span-2">
              <p className="font-medium text-gray-800">{item.title}</p>
            </div>

            {/* FROM */}
            <div>
              <p className="text-gray-500 text-sm">{item.from}</p>
            </div>

            {/* TO */}
            <div>
              <p className="text-gray-500 text-sm">{item.to}</p>
            </div>

            {/* STATUS */}
            <div className="flex items-center justify-end gap-4">
              <span
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  item.status === "Open"
                    ? "bg-green-50 text-green-600"
                    : "bg-orange-50 text-orange-500"
                }`}
              >
                {item.status}
              </span>

              <button className="text-gray-400 text-xl">⋮</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
