import Container from "../../layout/Container";
import Section from "../../layout/Section";
import SectionHeading from "../../ui/SectionHeading";

import GalleryCard from "./GalleryCard";

import { galleryData } from "../../../constants/galleryData";

export default function Gallery() {
  return (
    <Section id="gallery">
      <Container>

        <SectionHeading
          eyebrow="Our Gallery"
          title="Beauty Crafted With Perfection"
          description="Take a glimpse into our luxury salon experience, showcasing stunning transformations, elegant interiors, and premium beauty services."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}