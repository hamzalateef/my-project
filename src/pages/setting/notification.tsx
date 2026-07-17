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

const Notification = () => {
  return (
    <section className="bg-white border rounded-xl p-8">
      <h2 className="text-xl font-semibold text-slate-800">
        Notifications
      </h2>

      <div className="space-y-5 mt-6 max-w-xl">
        <Toggle title="New User Signup" desc="Email alert on signup" />
        <Toggle title="Job Posted" desc="Notify when a job is posted" />
        <Toggle title="Job Applied" desc="Notify on job application" />

        <button className="btn-primary">
          Save Notification Settings
        </button>
      </div>
    </section>
  );
};



export default Notification;
