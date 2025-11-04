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
