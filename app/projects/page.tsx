import cetegory from "@/data/cetegory.json" assert { type: "json" };
import Link from "next/link";

const Cetegory = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col gap-2 my-4">
        <h2 className="text-3xl font-serif font-semibold">Project Gallery</h2>
        <span className="w-16 h-[4px] bg-rose-500 rounded"></span>
        <span className="w-8 h-[4px] bg-rose-500 rounded"></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(cetegory).map(([key, project]) => (
          <Link
            key={key}
            href={project.url}
            prefetch={false}
            className="relative h-64 card-style rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: `url(${project.image || "/default.jpg"})`,
              }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold text-center">
                {project.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cetegory;
