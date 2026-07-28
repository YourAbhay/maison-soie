export default function GalleryCard({
  image,
  title,
  category,
}) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900
      "
    >
      {/* Image */}
      <div className="aspect-4/5 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          justify-end
          bg-linear-to-t
          from-black/90
          via-black/20
          to-transparent
          p-6
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <span
          className="
            mb-2
            inline-block
            w-fit
            rounded-full
            bg-[#C8A96A]
            px-3
            py-1
            text-xs
            font-medium
            text-black
          "
        >
          {category}
        </span>

        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>
    </article>
  );
}