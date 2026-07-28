import Container from "../../layout/Container";
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";
import ServiceCard from "../../ui/ServiceCard";

export default function Services() {
  return (
    <Section id="services">
      <Container>

        <SectionHeading
          eyebrow="Our Services"
          title="Luxury Beauty Services"
          description="Experience premium salon treatments designed for elegance and confidence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            icon="✂️"
            title="Luxury Haircut"
            description="Professional haircut crafted for your personality and style."
          />

          <ServiceCard
            icon="🎨"
            title="Hair Coloring"
            description="Premium hair coloring using world-class products."
          />

          <ServiceCard
            icon="💆"
            title="Hair Spa"
            description="Deep nourishment and revitalizing spa treatments."
          />

          <ServiceCard
            icon="💄"
            title="Bridal Makeup"
            description="Luxury bridal makeup for your special occasions."
          />

          <ServiceCard
            icon="✨"
            title="Skin Care"
            description="Healthy glowing skin with advanced beauty treatments."
          />

          <ServiceCard
            icon="💅"
            title="Nail Care"
            description="Elegant manicure and pedicure by expert professionals."
          />

        </div>

      </Container>
    </Section>
  );
}