import React from "react";
import { Upload, Trash2, MoreHorizontal, Check } from "lucide-react";
import Profileimg from "../../assets/img.jpg";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const profileSections = [
    {
      title: "Name",
      value: "Mr. Pattlo",
    },
    {
      title: "Contacts",
      value: (
        <>
          <p>Phone: +123456789</p>
          <p>Email: jobzone@admin.com</p>
        </>
      ),
    },
    {
      title: "Social media",
      value: (
        <>
          <p>linkedin.com/company/jobzone</p>
          <p>dribbble.com/jobzone</p>
        </>
      ),
    },
    {
      title: "Language & currency",
      value: "English, USD",
    },
  ];

  return (
    <div className="w-full bg-gray-100">
      <div className=" mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-10">
        <div className="flex items-start justify-between pb-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src={Profileimg}
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Mr. Pattlo
              </h2>
              <p className="text-sm text-gray-500">Product Designer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
              <Trash2 size={18} className="text-rose-500" />
            </button>

            <Button
              variant="outline"
              className="flex items-center rounded-xl border transition"
            >
              <Upload size={16} />
              Outline
            </Button>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {profileSections.map((section, index) => (
            <div
              key={index}
              className="py-5 flex items-start justify-between gap-4"
            >
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {section.title}
                </h3>

                <div className="text-sm text-gray-500 leading-6">
                  {section.value}
                </div>
              </div>
              <Button
                variant="outline"
                className="flex items-center rounded-xl border transition"
              >
                Edit
              </Button>
            </div>
          ))}

          <div className="py-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                Theme
              </h3>

              <p className="text-sm text-gray-500">Appearance</p>
            </div>

            <select className="px-3 h-10 rounded-xl border border-gray-200 text-sm text-gray-700 outline-none">
              <option>Light mode</option>
              <option>Dark mode</option>
            </select>
          </div>

          <div className="py-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                Integration
              </h3>

              <p className="text-sm text-gray-500">
                Google • jobzone@admin.com
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 h-9 rounded-full text-sm font-medium">
                <Check size={15} />
                Connected
              </div>

              <Button
                variant="outline"
                className="flex items-center rounded-xl border transition"
              >
                <MoreHorizontal size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
