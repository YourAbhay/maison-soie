export default function FeatureCard({
  icon: Icon,
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
      <div className="mb-6 inline-flex rounded-2xl bg-[#C8A96A]/10 p-4">
        <Icon className="h-8 w-8 text-[#C8A96A]" />
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}