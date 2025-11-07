import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar";
import JobManage from "./pages/jobmanage";
import Setting from "./pages/setting/setting";
import Profile from "./pages/setting/profile";
import Content from "./pages/setting/content";
import Companies from "./pages/companies";
import Departments from "./pages/department";
import Jobs from "./pages/jobs";
import Department from "./pages/department";

const App = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="w-56">
        <Sidebar />
      </div>
      <div className="w-full h-screen overflow-y-auto bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job-management" element={<JobManage />} />
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
