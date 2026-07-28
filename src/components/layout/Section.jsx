import { cn } from "../../lib/utils";

export default function Section({
  children,
  id,
  className,
  as: Component = "section",
}) {
  return (
    <Component
      id={id}
      className={cn(
        // "relative overflow-hidden py-20 md:py-28 lg:py-32",
        // "relative overflow-hidden py-14 lg:py-16   border-b border-red-500",
         "relative overflow-hidden pt-16 lg:pt-20 ",
        // "relative overflow-hidden py-20 lg:py-32",
        className
      )}
    >
      {children}
    </Component>
  );
}