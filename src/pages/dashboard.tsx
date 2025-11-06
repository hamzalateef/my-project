

export default function Dashboard() {
  const stats = [
    { title: "New Users", value: 1284, subtitle: "Since last week" },
    { title: "Active Jobs", value: 75, subtitle: "Open positions" },
    { title: "Total Jobs", value: 452, subtitle: "This month" },
    { title: "Compnies", value: 93, subtitle: "Unread" },
  ];

  
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-lg shadow-sm bg-white flex items-center justify-between"
          >
            <div>
              <div className="text-sm text-gray-500">{s.title}</div>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.subtitle}</div>
            </div>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100 text-green-700 text-xl">
              {}
            </div>
          </div>
        ))}
      </section>

      {/* rest of your layout */}
    </main>
  );
}
