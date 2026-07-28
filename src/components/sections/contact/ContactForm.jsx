import { useState } from "react";
import Button from "../../ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form Data:", formData);

    alert("Your appointment request has been submitted.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-zinc-950 p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A96A]">
        Book Appointment
      </p>

      <h3 className="mt-3 text-3xl font-semibold text-white">
        Send Us A Message
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        Fill out the form and our team will contact you to confirm your
        appointment.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-white"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-[#C8A96A]"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-white"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            required
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-[#C8A96A]"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-white"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-[#C8A96A]"
          />
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-white"
          >
            Select Service
          </label>

          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-[#C8A96A]"
          >
            <option value="">Choose a service</option>
            <option value="hair-styling">Hair Styling</option>
            <option value="luxury-facial">Luxury Facial</option>
            <option value="bridal-package">Bridal Package</option>
            <option value="nail-care">Nail Care</option>
          </select>
        </div>

        {/* Date */}
        <div className="md:col-span-2">
          <label
            htmlFor="date"
            className="mb-2 block text-sm font-medium text-white"
          >
            Preferred Date
          </label>

          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-[#C8A96A]"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-white"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements"
            rows="5"
            className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-[#C8A96A]"
          />
        </div>
      </div>

      <div className="mt-8">
        <Button type="submit" fullWidth>
          Send Appointment Request
        </Button>
      </div>
    </form>
  );
}