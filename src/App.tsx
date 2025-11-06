import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar";
import JobUsers from "./pages/jobusers";
import Header from "./components/header";
import JobManage from "./pages/jobmanage";
import Setting from "./pages/setting/setting";
import Profile from "./pages/setting/profile";
import Content from "./pages/setting/content";
import Companies from "./pages/companies";
import Departments from "./pages/departments";

const App = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="w-56">
        <Sidebar />
      </div>
      <div className="w-full h-screen overflow-y-auto bg-gray-100">
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/job-user" element={<JobUsers />} />
          <Route path="/job-management" element={<JobManage />} />
          <Route path="/departments" element={<Departments />} />
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
