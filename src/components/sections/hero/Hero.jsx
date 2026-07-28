import Button from "../../ui/Button";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
export default function Hero() {
  return (
    <Section
      id="home"
      className="relative flex min-h-screen items-center pt-28 lg:pt-32   overflow-hidden   border-b
    border-blue-500 "
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black via-zinc-950 to-black" />

      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          {/* Eyebrow */}
          <span className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-[#C8A96A]">
            Luxury Salon
          </span>

          {/* Heading */}
          <h1 className="mb-8 font-heading text-5xl font-semibold leading-tight text-white md:text-7xl">
            Beauty Crafted
            <br />
            With Elegance
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-lg leading-8 text-zinc-400">
            Experience premium hair styling, skincare and beauty services
            designed for those who appreciate timeless luxury.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-5 sm:flex-row">
            <Button variant="primary" size="lg">
              Book Appointment
            </Button>

            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-24 animate-bounce">
            <span className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Scroll
            </span>
          </div>

        </div>
      </Container>
    </Section>
  );
}