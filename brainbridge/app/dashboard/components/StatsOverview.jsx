import StatCard from "./StatCard";

export default function StatsOverview({ projects = [] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Projects"
        value={projects.length.toString()}
        growth="+11.01%"
      />
      <StatCard
        title="Viewers"
        value={(projects.length * 150).toString()}
        growth="+11.01%"
      />
      <StatCard
        title="Active Collaborators"
        value={projects.length > 0 ? "5" : "0"}
        growth="+11.01%"
      />
      <StatCard
        title="Enterprises"
        value={projects.length > 0 ? "1" : "0"}
        growth="+11.01%"
      />
    </section>
  );
}
