import { FaBriefcase, FaPlus, FaSearch } from "react-icons/fa";
import type { HJob } from "../types/header";
import { DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { useProfileStore } from "@/store/useProfileStore";
import type React from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Search } from "lucide-react";

const Header = (jobs: HJob) => {
  // const user = useProfileStore((state) => state.user);
  return (
    <header className="border border-gray-200 hidden lg:flex items-center justify-between bg-white m-4 p-4 rounded-2xl">
      <div>
        <h1 className="flex items-center gap-3 text-2xl font-bold text-gray-800">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
            <FaBriefcase className="text-xl" />
          </span>
          {jobs.title}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <InputGroup className="w-80 bg-gray-50">
          <InputGroupInput placeholder="Search jobs..." />
          <InputGroupAddon>
            <Search className="h-4 w-4" />
          </InputGroupAddon>
        </InputGroup>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQQJkX4QxVH-28D1eFJ_RP7evdCNcec4wTA9wDIUwlw&s=10"
          alt="Profile"
          className="h-11 w-11 rounded-full border-2 border-gray-200 object-cover cursor-pointer hover:border-green-500 transition"
        />
      </div>
    </header>
  );
};

export default Header;
