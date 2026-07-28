// import Container from "../../layout/Container";
// import Section from "../../layout/Section";
// import SectionHeading from "../../ui/SectionHeading";

// import TestimonialCard from "./TestimonialCard";
// import { testimonialsData } from "./testimonialsData";

// export default function Testimonials() {
//   return (
//     <Section id="testimonials">
//       <Container>
//         <SectionHeading
//           eyebrow="Testimonials"
//           title="What Our Clients Say"
//           description="Our clients trust us for exceptional beauty services, luxury experiences, and outstanding customer care."
//         />

//         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {testimonialsData.map((testimonial) => (
//             <TestimonialCard
//               key={testimonial.id}
//               name={testimonial.name}
//               role={testimonial.role}
//               review={testimonial.review}
//               rating={testimonial.rating}
//             />
//           ))}
//         </div>
//       </Container>
//     </Section>
//   );
// }
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Container from "../../layout/Container";
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";

import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "./testimonialsData";
import CarouselButtons from "./CarouselButtons";
import CarouselDots from "./CarouselDots";

export default function Testimonials() {
  const autoplay = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay.current]
  );

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Our clients trust us for exceptional beauty services, luxury experiences, and outstanding customer care."
        />

        <div className="relative mt-16">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonialsData.map((testimonial) => (
                <div
  key={testimonial.id}
  className="
    flex
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

          {/* Buttons */}
          <CarouselButtons emblaApi={emblaApi} />

          {/* Dots */}
          <CarouselDots emblaApi={emblaApi} />
        </div>
      </Container>
    </Section>
  );
}