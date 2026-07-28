import Section from "../../layout/Section";
import Container from "../../layout/Container";
import SectionHeading from "../../ui/SectionHeading";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          subtitle="Contact Us"
          title="Let’s Create Your Perfect Look"
          description="Book your appointment or contact our team to learn more about our salon services."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}