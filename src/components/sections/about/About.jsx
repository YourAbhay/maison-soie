import Container from "../../layout/Container";
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import Button from "../../ui/Button";

import AboutImage from "./AboutImage";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <Section id="about">
      <Container>
        {/* Top Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Side */}
          <AboutImage />

          {/* Right Side */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="Where Luxury Meets Beauty"
              description="At Maison Soie, we believe beauty is an experience. Our expert stylists combine creativity, premium products, and personalized care to deliver results that make every client feel confident and elegant."
            />

            <div className="mt-8 space-y-5 text-zinc-400 leading-8">
              <p>
                From precision haircuts to luxury skincare and bridal
                transformations, every service is designed with attention to
                detail and world-class standards.
              </p>

              <p>
                Our salon offers a relaxing environment where modern techniques
                meet timeless elegance, ensuring every visit becomes a memorable
                experience.
              </p>
            </div>

            <div className="mt-10">
              <Button variant="primary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-24">
          <AboutStats />
        </div>
      </Container>
    </Section>
  );
}