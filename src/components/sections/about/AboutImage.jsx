export default function AboutImage() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
          alt="Luxury Salon"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-md">
        <h3 className="text-3xl font-bold text-[#C8A96A]">10+</h3>
        <p className="text-sm text-zinc-400">Years Experience</p>
      </div>
    </div>
  );
}