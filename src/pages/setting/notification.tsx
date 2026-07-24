import DeparmentFormModal from "@/components/dep-modal";
import NotFormModal from "@/components/not-modal";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function Notification() {
  const notifications = [
    {
      id: "#001",
      title: "Creative Mornings",
      from: "20 July, 2023",
      to: "20 August, 2023",
      des: "Find the latest government, private, NGO, and company jobs in one place. Browse opportunities by category, save your favorite jobs, and stay updated with real-time notifications.",
    },
    {
      id: "#002",
      title: "New York Times Cities for Tomorrow",
      from: "20 July, 2023",
      to: "20 August, 2023",
      des: "Find the latest government, private, NGO, and company jobs in one place. Browse opportunities by category, save your favorite jobs, and stay updated with real-time notifications.",
    },
    {
      id: "#003",
      title: "Outcome",
      from: "20 July, 2023",
      to: "20 August, 2023",
      des: "Find the latest government, private, NGO, and company jobs in one place. Browse opportunities by category, save your favorite jobs, and stay updated with real-time notifications.",
    },
    {
      id: "#004",
      title: "World Design Summit",
      from: "20 July, 2023",
      to: "20 August, 2023",
      des: "Find the latest government, private, NGO, and company jobs in one place. Browse opportunities by category, save your favorite jobs, and stay updated with real-time notifications.",
    },
    {
      id: "#005",
      title: "Maison & Objet",
      from: "20 July, 2023",
      to: "20 August, 2023",
      des: "Find the latest government, private, NGO, and company jobs in one place. Browse opportunities by category, save your favorite jobs, and stay updated with real-time notifications.",
    },
  ];

  return (
    <div className="p-4">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden p-4">
        <div className="flex justify-between items-center gap-4 mb-4 mt-2">
          <div className="text-2xl ml-3">
            <b>Notifications</b>
          </div>
          <div className="flex justify-end items-center gap-4">
            <InputGroup className="w-full md:w-72 bg-white">
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
            <NotFormModal />
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-6 gap-4 bg-green-600 px-6 py-4 border-b border-gray-200">
            <p className="text-white font-semibold">ID</p>
            <p className="col-span-2 text-white font-semibold">Title Name</p>
            <p className="text-white font-semibold">Active from</p>
            <p className="text-white font-semibold">Active to</p>
            <p className="text-white font-semibold">Description</p>
          </div>

          {/* TABLE BODY */}
          {notifications.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 gap-4 items-center px-6 py-5 border-b border-gray-100 hover:bg-green-50 transition-all"
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
              <div>
                <p className="text-gray-500 text-sm">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
