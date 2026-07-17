import { Switch } from "@/components/ui/switch";
import {
  Settings,
  Shield,
  Briefcase,
  FileText,
  Lock,
  Info,
  Phone,
  HelpCircle,
  KeyRound,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-2 px-5">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-5">App Info</h2>

          <div className="space-y-4">
            <div>
              <label className="font-medium">App Name</label>
              <input
                className="w-full mt-2 border rounded-lg p-2 ps-3"
                defaultValue="Jobs App"
              />
            </div>

            <div>
              <label className="font-medium">App Logo</label>

              <input
                type="file"
                className="w-full mt-2 border rounded-lg p-2 ps-3"
              />
            </div>

            <div>
              <label className="font-medium">App Version</label>

              <input
                className="w-full mt-2 border rounded-lg p-2 ps-3 bg-gray-100"
                defaultValue="1.0.0"
                disabled
              />
            </div>

            <button className="bg-green-600 text-white px-5 py-2 rounded-lg">
              Save Changes
            </button>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-2 mb-5">
            <Shield />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Last Login</span>
              <span className="font-medium">Today 10:30 AM</span>
            </div>

            <div className="flex justify-between items-center">
              <span>Change Password</span>

              <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <KeyRound size={18} />
                Change
              </button>
            </div>

            <div className="flex justify-between items-center">
              <span>Two Factor Authentication</span>
              <Switch />
            </div>

            <div className="flex justify-between items-center">
              <span>Login Activity</span>

              <button className="border px-4 py-2 rounded-lg">View</button>
            </div>

            <div className="flex justify-between items-center">
              <span>Allow User Registration</span>
              <Switch />
            </div>
          </div>
        </div>
      </div>

      {/* Job Settings */}

      {/* <div className="bg-white rounded-xl shadow p-6 mt-6">
        <div className="flex items-center gap-2 mb-5">
          <Briefcase />
          <h2 className="text-xl font-semibold">Job Settings</h2>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Auto Expire Jobs</p>
            <p className="text-sm text-gray-500">
              Automatically expire jobs after due date.
            </p>
          </div>
          <Switch />
        </div>
      </div> */}

      {/* Legal */}

      <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
        <div className="flex items-center gap-2 mb-5">
          <FileText />
          <h2 className="text-xl font-semibold">Legal & Information</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              icon: <Lock size={18} />,
              title: "Privacy Policy",
            },
            {
              icon: <FileText size={18} />,
              title: "Terms & Conditions",
            },
            {
              icon: <Info size={18} />,
              title: "About Us",
            },
            {
              icon: <Phone size={18} />,
              title: "Contact Information",
            },
            {
              icon: <HelpCircle size={18} />,
              title: "FAQ",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.title}</span>
              </div>

              <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
