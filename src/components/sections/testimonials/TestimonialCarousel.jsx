import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialsCarousel({ testimonials }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div
      className="overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="
              min-w-0
              flex-[0_0_100%]
              px-4

              md:flex-[0_0_50%]

              lg:flex-[0_0_33.333%]
            "
          >
            <TestimonialCard
              name={testimonial.name}
              role={testimonial.role}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}