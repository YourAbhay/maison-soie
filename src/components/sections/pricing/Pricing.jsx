import Section from "../../layout/Section";
import Container from "../../layout/Container";
import SectionHeading from "../../ui/SectionHeading";

import PricingCard from "./PricingCard";
import pricingData from "./pricingData";

export default function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        {/* Heading */}
        <SectionHeading
          subtitle="Pricing"
          title="Choose The Perfect Beauty Package"
          description="Luxury beauty services designed to suit every style and occasion."
        />

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingData.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              duration={plan.duration}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}