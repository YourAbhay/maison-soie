import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-zinc-900/60
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#C8A96A]
      "
    >
      <div className="mb-6 text-5xl">
        {icon}
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mb-8 text-zinc-400 leading-7">
        {description}
      </p>

      <button className="flex items-center gap-2 text-[#C8A96A] transition-all group-hover:gap-4">
        Learn More
        <ArrowRight size={18} />
      </button>
    </div>
  );
}