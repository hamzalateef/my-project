import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar";
import JobUsers from "./pages/jobusers";
import Header from "./components/header";
import Jobs from "./pages/jobs";
import Departments from "./pages/departements"; // ✅ import with capital D

const App = () => {
  return (
    <div className="h-screen w-full flex">
      {/* Sidebar */}
      <div className="w-52">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full h-screen overflow-y-auto bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/job-user" element={<JobUsers />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/departements" element={<Departments />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default App;
