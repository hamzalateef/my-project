

const Header = () => {
  return (
    <header className="flex items-center justify-between m-6 bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <input
          className="px-3 py-2 rounded-md border focus:outline-none text-sm"
          placeholder="Search..."
        />
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
          A
        </div>
      </div>
    </header>
  );
};

export default Header;
