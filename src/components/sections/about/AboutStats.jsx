const stats = [
  {
    number: "5000+",
    label: "Happy Clients",
  },
  {
    number: "25+",
    label: "Expert Stylists",
  },
  {
    number: "15+",
    label: "Beauty Awards",
  },
  {
    number: "100%",
    label: "Premium Products",
  },
];

export default function AboutStats() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 text-center"
        >
          <h3 className="mb-2 text-4xl font-bold text-[#C8A96A]">
            {item.number}
          </h3>

          <p className="text-zinc-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
}