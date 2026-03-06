import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    id: "brainbridge-ai",
    name: "BrainBridge AI",
    description: "A collaborative platform connecting developers and enterprises through AI-powered project matching.",
    status: "progress",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    updatedAt: "2 days ago",
  },
  {
    id: "sign-to-speech",
    name: "Sign to Speech",
    description: "Real-time sign language translation system using computer vision and deep learning.",
    status: "idea",
    tech: ["Python", "MediaPipe", "TensorFlow"],
    updatedAt: "1 week ago",
  },
  {
    id: "fuel-card",
    name: "Prepaid Fuel Card System",
    description: "Cashless fueling solution using smart cards linked to digital wallets.",
    status: "completed",
    tech: ["React", "Spring Boot", "MySQL"],
    updatedAt: "3 weeks ago",
  },
  {
    id: "legacy-dashboard",
    name: "Legacy Dashboard",
    description: "Old analytics dashboard no longer maintained.",
    status: "stopped",
    tech: ["PHP", "Bootstrap"],
    updatedAt: "2 months ago",
  },
];

export default function MyProjectsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">
          My Projects
        </h2>

        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
