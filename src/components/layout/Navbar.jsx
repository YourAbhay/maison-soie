import Container from "./Container";
import Button from "../ui/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <Container>
        <nav className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-heading text-3xl font-semibold tracking-wide text-[#C8A96A]"
          >
            Maison Soie
          </a>

          {/* Navigation */}
          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-[#C8A96A]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}

          <button
            className="bg-yellow-500 px-6 py-3 rounded-full"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Appointment
          </button>
        </nav>
      </Container>
    </header>
  );
}
