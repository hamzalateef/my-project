import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/sidebar";
import JobUsers from "./pages/jobusers";
import Header from "./components/header";

const App = () => {
  return (
   <div className="h-screen w-full flex">
    <div className="w-52">
      <Sidebar />
    </div>
    <div className="w-full h-screen overflow-y-auto bg-gray-100">
      <Header/>
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/job-user" element={<JobUsers />} />
      </Routes>
    </div>
   </div>
  );
};

export default App;
