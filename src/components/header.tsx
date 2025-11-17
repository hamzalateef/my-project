
import { FaBriefcase, FaPlus, FaSearch } from "react-icons/fa";
import type { HJob } from "../types/header";
import { DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

const Header = (jobs: HJob) => {
  return (
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white m-4 p-4 rounded-2xl gap-4">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
          <span className="p-2 bg-green-100 text-green-600 rounded-lg">
            <FaBriefcase />
          </span>
          {jobs.title}
        </h2>
      </header>
  );
};

export default Header;
