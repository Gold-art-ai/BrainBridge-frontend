import Link from "next/link";

const STATUS_STYLES = {
  idea: "bg-slate-100 text-slate-600",
  progress: "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
  stopped: "bg-red-100 text-red-700",
};

export default function ProjectCard({ project }) {
  const {
    id,
    name,
    description,
    status,
    tech,
    updatedAt,
  } = project;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-800">{name}</h3>
          <p className="text-sm text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>

        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${STATUS_STYLES[status]}`}
        >
          {status.replace("_", " ")}
        </span>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-600"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-slate-500 pt-2 border-t">
        <span>Updated {updatedAt}</span>

        <div className="flex gap-3 font-medium">
          <Link
            href={`/dashboard/projects/${id}`}
            className="text-blue-600 hover:underline"
          >
            View
          </Link>
          <button className="hover:text-slate-700">Edit</button>
          <button className="text-red-500 hover:text-red-600">
            Archive
          </button>
        </div>
      </div>
    </div>
  );
}
