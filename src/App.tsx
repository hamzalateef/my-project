import { FaUsers } from 'react-icons/fa';
import './App.css';

export default function JobUsers() {
  return (
    <div className="w-full bg-green-500 flex items-center justify-between text-white py-2 px-4">
      <div className="flex items-center gap-2">
        <FaUsers size={20} />
        <span className="font-semibold text-lg">Users List</span>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search users..."
          className="px-3 py-1 rounded-md bg-white focus:outline-none"
        />
      </div>
    </div>
  );
}





// // App.tsx
// import './App.css'
// import { 
//   FaTachometerAlt, FaBell, FaUsers, FaBriefcase, 
//   FaBuilding, FaFileAlt, FaChartBar, FaCogs, FaSignOutAlt 
// } from "react-icons/fa";

// export default function App() {

//   const stats = [
//     { title: 'New Users', value: 1284, subtitle: 'Since last week' },
//     { title: 'Active Jobs', value: 75, subtitle: 'Open positions' },
//     { title: 'Applications', value: 452, subtitle: 'This month' },
//     { title: 'Messages', value: 93, subtitle: 'Unread' },
//   ];

//   const activities = [
//     'User Ali signed up',
//     'Job "Frontend Dev" approved',
//     'Report generated: Oct 28',
//     'Sana updated profile',
//   ];

//   return (
//     <div className='w-full flex bg-gray-50 text-gray-800'>

    
//       <aside className='w-72 bg-green-500 text-white flex flex-col min-h-screen'>


//         <div className="p-6 flex items-center gap-3 border-b border-green-400">
//           <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center font-bold">
//             JZ
//           </div>
//           <h3 className="text-lg font-semibold">JobZone</h3>
//         </div>

//         <nav className="flex-1 px-4 py-6 space-y-2">
//           <a className="flex items-center gap-3 px-3 py-2 rounded-md bg-green-700/40"><FaTachometerAlt /> Dashboard</a>
//           <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20"><FaBell /> Notifications</a>
//           <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20"><FaUsers /> Users</a>
//           <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20"><FaBriefcase /> Jobs</a>
//           <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20"><FaBuilding /> Departments</a>
//           <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20"><FaFileAlt /> Applications</a>
//           <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20"><FaChartBar /> Analytics</a>
//           <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20"><FaCogs /> Settings</a>
//         </nav>

//         <div className="px-4 pb-6">
//           <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20">
//             <FaSignOutAlt /> Logout
//           </a>
//         </div>


//         <div className="p-4 text-sm text-green-50/80 border-t border-green-600">
//           © 2025 JobZone
//         </div>
//       </aside>

 
//       <main className="flex-1 p-6 overflow-y-auto">

//         <header className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-semibold">Dashboard</h2>
//           <div className="flex items-center gap-4">
//             <input
//               className="px-3 py-2 rounded-md border focus:outline-none text-sm"
//               placeholder="Search..."
//             />
//             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
//               A
//             </div>
//           </div>
//         </header>

//         <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           {stats.map((s, i) => (
//             <div key={i} className="p-4 rounded-lg shadow-sm bg-white flex items-center justify-between">
//               <div>
//                 <div className="text-sm text-gray-500">{s.title}</div>
//                 <div className="text-2xl font-bold">{s.value}</div>
//                 <div className="text-xs text-gray-400 mt-1">{s.subtitle}</div>
//               </div>
//               <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100 text-green-700 font-semibold">
//                 +{Math.floor(Math.random() * 12) + 1}%
//               </div>
//             </div>
//           ))}
//         </section>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          

//           <div className="col-span-1 space-y-4">
//             <div className="bg-white p-4 rounded-lg shadow">
//               <div className="flex items-center gap-4">
//                 <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl font-bold">O</div>
//                 <div>
//                   <div className="font-semibold">Oda Dink</div>
//                   <div className="text-sm text-gray-500">Programmer</div>
//                 </div>
//               </div>
//               <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
//                 <div><div className="text-sm font-semibold">66%</div><div className="text-gray-400">PHP</div></div>
//                 <div><div className="text-sm font-semibold">37%</div><div className="text-gray-400">YAK</div></div>
//                 <div><div className="text-sm font-semibold">2%</div><div className="text-gray-400">Other</div></div>
//               </div>
//             </div>

//             <div className="bg-white p-4 rounded-lg shadow">
//               <div className="font-semibold mb-2">Recent Activities</div>
//               <ul className="text-sm text-gray-600 space-y-2">
//                 {activities.map((a, idx) => (
//                   <li key={idx} className="flex items-center gap-3">
//                     <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
//                     <span>{a}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="col-span-1 lg:col-span-2 space-y-4">

//             <div className="bg-white p-4 rounded-lg shadow">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-semibold">Vacancy Status</h3>
//                 <div className="text-sm text-gray-500">This Month</div>
//               </div>

//               <div className="w-full h-56">
//                 <svg viewBox="0 0 500 200" className="w-full h-full">
//                   <defs>
//                     <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
//                       <stop offset="0%" stopColor="#34D399" stopOpacity="0.25" />
//                       <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
//                     </linearGradient>
//                   </defs>
//                   {[0, 1, 2, 3, 4].map((i) => (
//                     <line key={i} x1="0" x2="600" y1={20 + i * 36} y2={20 + i * 36} stroke="#e6f4ea" strokeWidth="1" />
//                   ))}
//                   <path
//                     d="M0,120 C80,80 160,140 240,60 C320,20 400,120 480,70 C560,40 600,80"
//                     fill="url(#g1)" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <div className="bg-white p-4 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <h4 className="font-semibold mb-2">Recommended Jobs</h4>
//                 <div className="border p-3 rounded-md mb-2">
//                   <div className="font-semibold">Senior Frontend Dev</div>
//                   <div className="text-sm text-gray-500">£40,000 - £60,000 • London</div>
//                 </div>
//                 <div className="border p-3 rounded-md">
//                   <div className="font-semibold">UI/UX Designer</div>
//                   <div className="text-sm text-gray-500">£32,000 - £48,000 • Remote</div>
//                 </div>
//               </div>

//               <div>
//                 <h4 className="font-semibold mb-2">Quick Actions</h4>
//                 <div className="flex flex-col gap-2">
//                   <button className="px-4 py-2 rounded-md bg-green-500 text-white">Create Job</button>
//                   <button className="px-4 py-2 rounded-md border border-green-200 text-green-700">Invite User</button>
//                   <button className="px-4 py-2 rounded-md bg-gray-100">Export CSV</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }
