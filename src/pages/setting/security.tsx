import { Button } from "@/components/ui/button";

const Toggle = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex justify-between items-start border rounded-lg p-4">
    <div>
      <p className="text-sm font-medium text-slate-700">{title}</p>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
    <input type="checkbox" className="accent-slate-900 scale-110" />
  </div>
);

const Security = () => {
  return (
    <section className="bg-white border rounded-xl p-8">
      <h2 className="text-xl font-semibold text-slate-800">
        Security Controls
      </h2>

      <div className="space-y-6 mt-6 max-w-xl">
        <Toggle
          title="IP Restriction"
          desc="Allow admin login only from trusted IPs"
        />

        <Toggle
          title="Account Lock"
          desc="Lock account after 5 failed login attempts"
        />

        <Toggle
          title="Session Timeout"
          desc="Auto logout after inactivity"
        />

        <button className="btn-primary">
          Update Security
        </button>
      </div>
    </section>
  );
};



export default Security;
