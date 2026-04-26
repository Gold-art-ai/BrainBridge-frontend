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
        title="Global Views"
        value={projects.reduce((acc, p) => acc + (p.viewCount || 0), 0).toString()}
        growth="Live"
      />
      <StatCard
        title="Articles"
        value={projects.filter(p => p.projectVisibility === 'PUBLIC').length.toString()}
        growth="Visible"
      />
      <StatCard
        title="Active Collaborators"
        value={projects.reduce((acc, p) => acc + (p.members?.length || 0), 0).toString()}
        growth="Team"
      />
      <StatCard
        title="Enterprises"
        value={projects.reduce((acc, p) => acc + (p.enterpriseRequests || 0), 0).toString()}
        growth="Requests"
      />
    </section>
  );
}
