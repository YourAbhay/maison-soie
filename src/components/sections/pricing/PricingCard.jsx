import { Check } from "lucide-react";

import Button from "../../ui/Button";

export default function PricingCard({
  title,
  price,
  duration,
  description,
  features,
  popular,
}) {
  return (
    <article
      className={`
        relative flex h-full flex-col rounded-4xl
        border p-8 transition-all duration-300
        ${
          popular
            ? "border-[#C8A96A] bg-zinc-900"
            : "border-white/10 bg-zinc-950 hover:border-[#C8A96A]"
        }   
      `}
    >
      {/* Popular Badge */}
      {popular && (
        <span
          className="
            absolute right-6 top-6
            rounded-full bg-[#C8A96A]
            px-4 py-1
            text-xs font-semibold uppercase tracking-wider
            text-black
          "
        >
          Popular
        </span>
      )}

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Price */}
      <div className="mt-6 flex items-end gap-2">
        <span className="text-5xl font-bold text-[#C8A96A]">
          {price}
        </span>

        <span className="pb-2 text-zinc-400">
          / {duration}
        </span>
      </div>

      {/* Description */}
      <p className="mt-6 leading-7 text-zinc-400">
        {description}
      </p>

      {/* Features */}
      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-zinc-300"
          >
            <Check
              size={18}
              className="text-[#C8A96A]"
            />

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="mt-auto pt-10">
        <Button fullWidth>
          Book Now
        </Button>
      </div>
    </article>
  );
}