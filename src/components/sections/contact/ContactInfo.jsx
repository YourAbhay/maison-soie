import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
      {/* Small Heading */}
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A96A]">
        Contact Details
      </p>

      {/* Main Heading */}
      <h3 className="mt-3 text-3xl font-semibold text-white">
        Visit Maison Soie
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-zinc-400">
        Contact us to book your appointment or ask anything about our beauty
        services.
      </p>

      {/* Contact Details */}
      <div className="mt-8 space-y-6">
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-[#C8A96A]/10 p-3">
            <MapPin size={20} className="text-[#C8A96A]" />
          </div>

          <div>
            <h4 className="font-semibold text-white">Address</h4>

            <p className="mt-1 text-sm leading-6 text-zinc-400">
              25 Fashion Street, New Delhi, India
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-[#C8A96A]/10 p-3">
            <Phone size={20} className="text-[#C8A96A]" />
          </div>

          <div>
            <h4 className="font-semibold text-white">Phone</h4>

            <a
              href="tel:+919876543210"
              className="mt-1 block text-sm text-zinc-400 transition hover:text-[#C8A96A]"
            >
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-[#C8A96A]/10 p-3">
            <Mail size={20} className="text-[#C8A96A]" />
          </div>

          <div>
            <h4 className="font-semibold text-white">Email</h4>

            <a
              href="mailto:hello@maisonsoie.com"
              className="mt-1 block text-sm text-zinc-400 transition hover:text-[#C8A96A]"
            >
              hello@maisonsoie.com
            </a>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-[#C8A96A]/10 p-3">
            <Clock size={20} className="text-[#C8A96A]" />
          </div>

          <div>
            <h4 className="font-semibold text-white">Working Hours</h4>

            <p className="mt-1 text-sm leading-6 text-zinc-400">
              Monday - Saturday: 10:00 AM - 8:00 PM
            </p>

            <p className="text-sm leading-6 text-zinc-400">
              Sunday: 11:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <p className="text-sm font-semibold text-white">Follow Us</p>

        <div className="mt-4 flex gap-3">
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
          >
            <FaInstagram size={18} />
          </a>

          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
          >
            <FaFacebookF size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}