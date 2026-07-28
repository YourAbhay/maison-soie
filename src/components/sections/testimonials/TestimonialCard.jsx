import { Star } from "lucide-react";

export default function TestimonialCard({
  name,
  role,
  review,
  rating,
}) {
  return (
    <article
      className="
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
      {/* Stars */}
      <div className="mb-6 flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-[#C8A96A] text-[#C8A96A]"
          />
        ))}
      </div>

      {/* Review */}
      <p className="mb-8 leading-8 text-zinc-300">
        "{review}"
      </p>

      {/* User */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          {name}
        </h3>

        <p className="text-sm text-zinc-500">
          {role}
        </p>
      </div>
    </article>
  );
}