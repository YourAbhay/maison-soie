import { ChevronLeft, ChevronRight } from "lucide-react";

const buttonClass = `
  flex h-12 w-12 items-center justify-center
  rounded-full border border-white/10
  bg-zinc-900 text-white
  transition-all duration-300
  hover:border-[#C8A96A]
  hover:bg-[#C8A96A]
  hover:text-black
`;

export default function CarouselButtons({ emblaApi }) {
  if (!emblaApi) return null;

  return (
    <div className="mt-10 flex justify-center gap-4">
      <button
        type="button"
        aria-label="Previous Slide"
        onClick={() => emblaApi.scrollPrev()}
        className={buttonClass}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        aria-label="Next Slide"
        onClick={() => emblaApi.scrollNext()}
        className={buttonClass}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}