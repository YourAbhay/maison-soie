import Container from "../../layout/Container";
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";

import FeatureCard from "./FeatureCard";
import { features } from "./features";

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Luxury, Quality & Care"
          description="We combine premium beauty services, experienced professionals, and a relaxing atmosphere to give every client an unforgettable experience."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}