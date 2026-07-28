import { Navigate, Route, Routes, useLocation } from "react-router-dom"

import { AppSidebar } from "@/components/app-sidebar"
import Header from "@/components/header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Companies from "@/pages/companies"
import Dashboard from "@/pages/dashboard"
import Department from "@/pages/department"
import Jobs from "@/pages/jobs"
import Login from "@/pages/login"
import { Profile } from "@/pages/profile"
import Signup from "@/pages/signup"
import Notification from "@/pages/setting/notification"
import Security from "@/pages/setting/security"
import Setting from "@/pages/setting/setting"
import System from "@/pages/setting/system"
import Users from "@/pages/users"

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/users": "Users",
  "/jobs": "Jobs",
  "/department": "Department",
  "/companies": "Companies",
  "/notification": "Notifications",
  "/profile": "Profile",
  "/settings": "Settings",
}

export default function App() {
  const location = useLocation()
  const title = pageTitles[location.pathname] ?? "JobZone"

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header title={title} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/department" element={<Department />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/settings/security" element={<Security />} />
          <Route path="/settings/system" element={<System />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  )
}
