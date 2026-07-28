import { ArrowRight } from "lucide-react";

import Section from "../../layout/Section";
import Container from "../../layout/Container";
import Button from "../../ui/Button";

export default function CTA() {
  return (
    <Section id="cta">
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-zinc-900
            px-8
            py-20
            text-center
            lg:px-20
          "
        >
          {/* Background Glow */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-72
              w-72
              -translate-x-1/2
              rounded-full
              bg-[#C8A96A]/10
              blur-3xl
            "
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
              Book Your Appointment
            </p>

            <h2 className="mb-6 text-4xl font-semibold leading-tight text-white lg:text-5xl">
              Ready For Your Transformation?
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-zinc-400">
              Experience premium beauty services tailored to your style.
              Let our expert stylists help you look and feel your absolute best.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* <Button size="lg">
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
           <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                   Book Appointment
            </Button>
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}