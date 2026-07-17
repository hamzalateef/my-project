import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center">Create Account</h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Create an admin account
        </p>

        <form className="space-y-5">
          {/* Name */}

          <div>
            <label className="text-sm font-medium">Full Name</label>

            <div className="relative mt-2">
              <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

              <input
                type="text"
                placeholder="Hamza"
                className="w-full border rounded-xl pl-10 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Email */}

          <div>
            <label className="text-sm font-medium">Email</label>

            <div className="relative mt-2">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

              <input
                type="email"
                placeholder="admin@gmail.com"
                className="w-full border rounded-xl pl-10 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>

            <div className="relative mt-2">
              <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

              <input
                type="Phone"
                placeholder="+9230123******"
                className="w-full border rounded-xl pl-10 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="text-sm font-medium">Password</label>

            <div className="relative mt-2">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full border rounded-xl pl-10 pr-10 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}

          <div>
            <label className="text-sm font-medium">Confirm Password</label>

            <div className="relative mt-2">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

              <input
                type={showConfirm ? "text" : "password"}
                placeholder="********"
                className="w-full border rounded-xl pl-10 pr-10 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input className="accent-green-600" type="checkbox" />

            <p className="text-sm text-gray-600">
              I agree to Terms & Conditions
            </p>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?
          <Link
            to="/login"
            className="text-green-600 font-semibold cursor-pointer ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
