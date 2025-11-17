import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar";
import Setting from "./pages/setting/setting";
import Profile from "./pages/setting/profile";
import Content from "./pages/setting/content";
import Companies from "./pages/companies";
import Department from "./pages/department";
import Jobs from "./pages/jobs";
import Header from "./components/header";
import { useLocation } from "react-router";

const App = () => {
  const location = useLocation();
  const path = location.pathname.slice(1); // remove leading '/'
  const formatted = path.charAt(0).toUpperCase() + path.slice(1);
  return (
    <div className="h-screen w-full flex">
      <div className="w-56">
        <Sidebar />
      </div>
      <div className="w-full h-screen overflow-y-auto bg-gray-100">
        <Header title={formatted} />
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/jobs" element={<Jobs />} />
          <Route path="/department" element={<Department />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/settings" element={<Setting />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="content" element={<Content />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
