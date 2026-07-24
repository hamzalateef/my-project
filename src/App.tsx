import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar";
import Setting from "./pages/setting/setting";
import Companies from "./pages/companies";
import Department from "./pages/department";
import Jobs from "./pages/jobs";
import login from "./pages/login";
import Header from "./components/header";
import Users from "./pages/users";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Notification from "./pages/setting/notification";
import { Profile } from "./pages/profile";
import Security from "./pages/setting/security";
import System from "./pages/setting/system";

const App = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);
  const formatted = path.charAt(0).toUpperCase() + path.slice(1);
  return (
    <div className="h-screen w-full flex">
      <div className="w-56 hidden lg:block">
        <Sidebar />
      </div>
      <div className="w-full h-screen overflow-y-auto bg-gray-100">
        <Header title={formatted} />
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/department" element={<Department />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/profile" element={<Profile />} />
            <Route path="notification" element={<Notification />} />
          <Route path="/settings" element={<Setting />}>
            <Route index element={<Navigate to="login" replace />} />
            <Route path="security" element={<Security />} />
            <Route path="system" element={<System />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
