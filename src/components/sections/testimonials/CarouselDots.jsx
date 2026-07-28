import { useEffect, useState } from "react";

export default function CarouselDots({ emblaApi }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelected = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateSelected();

    emblaApi.on("select", updateSelected);

    return () => {
      emblaApi.off("select", updateSelected);
    };
  }, [emblaApi]);

  if (!emblaApi) return null;

  return (
    <div className="mt-8 flex justify-center gap-3">
      {emblaApi.scrollSnapList().map((_, index) => (
        <button
          key={index}
          onClick={() => emblaApi.scrollTo(index)}
          className={`h-3 w-3 rounded-full transition-all ${
            index === selectedIndex
              ? "w-8 bg-[#C8A96A]"
              : "bg-white/30"
          }`}
        />
      ))}
    </div>
  );
}