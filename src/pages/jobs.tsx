import { FaSearch, FaPlus, FaEdit, FaTrash, FaBriefcase } from "react-icons/fa";
import Header from "../components/header";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { loginSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Newspaper, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JobFormModal from "@/components/job-modal";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechWave Ltd",
      location: "Lahore, Pakistan",
      status: "Open",
      link: "Link",
      date: "07/06/2025",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "SoftCore Inc",
      location: "Karachi, Pakistan",
      status: "Closed",
      link: "Link",
      date: "18/04/2024",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "SoftCore Inc",
      location: "Karachi, Pakistan",
      status: "Not Announced",
      link: "Link",
      date: "09/01/2023",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Designify Studio",
      location: "Remote",
      status: "Coming Soon",
      link: "Link",
      date: "15/03/2024",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Designify Studio",
      location: "Remote",
      status: "Open",
      link: "Link",
      date: "15/03/2024",
    },
    {
      id: 6,
      title: "UI/UX Designer",
      company: "Designify Studio",
      location: "Remote",
      status: "Closed",
      link: "Link",
      date: "15/03/2024",
    },
    {
      id: 7,
      title: "UI/UX Designer",
      company: "Designify Studio",
      location: "Remote",
      status: "Coming Soon",
      link: "Link",
      date: "15/03/2024",
    },
    {
      id: 8,
      title: "UI/UX Designer",
      company: "Designify Studio",
      location: "Remote",
      status: "Not Announced",
      link: "Link",
      date: "15/03/2024",
    },
    {
      id: 9,
      title: "Frontend Developer",
      company: "TechWave Ltd",
      location: "Lahore, Pakistan",
      status: "Open",
      link: "Link",
      date: "07/06/2025",
    },
    {
      id: 10,
      title: "Backend Engineer",
      company: "SoftCore Inc",
      location: "Karachi, Pakistan",
      status: "Closed",
      link: "Link",
      date: "18/04/2024",
    },
  ];

  return (
    <main className="flex-1 p-6 md:px-8 bg-gray-100 min-h-screen overflow-y-auto">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Total Jobs", value: 128, change: "+5", color: "green" },
          { label: "Open Jobs", value: 83, change: "+2", color: "green" },
          { label: "Closed Jobs", value: 45, change: "-3", color: "red" },
          { label: "Opening Soon", value: 18, change: "+5", color: "green" },
          { label: "Not Announced", value: 3, change: "+1", color: "yellow" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-4 rounded-lg shadow-sm bg-white hover:shadow-lg transition-all flex items-center justify-between"
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
      <div className="bg-white p-4 rounded-3xl mt-6">
        <div className="flex justify-between items-center gap-4 mb-4 mt-2">
          <div className="text-2xl ml-3">
            <b>All Jobs</b>
          </div>
          <div className="flex justify-end items-center gap-4">
            <InputGroup className="w-full md:w-72 bg-white">
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
            <JobFormModal />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mt-5">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs uppercase tracking-wide">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Id</th>
                  <th className="px-6 py-4 text-left font-semibold">Title</th>
                  <th className="px-6 py-4 text-left font-semibold">Company</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                  <th className="px-6 py-4 text-center font-semibold">Date</th>
                  <th className="px-6 py-4 text-center font-semibold">Link</th>
                  <th className="px-6 py-4 text-right font-semibold">
                    Actions
                  </th>
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
                      {job.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {job.company}
                    </td>
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
                    <div className="pt-5 text-center">
                      <a
                        href="#"
                        className="text-center text-green-500 border-b border-green-500"
                      >
                        {job.link}
                      </a>
                    </div>
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
      </div>
    </main>
  );
}
