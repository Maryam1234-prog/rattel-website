import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
  delay?: string;
  gradient: string;
}

const CategoryCard = ({ title, icon: Icon, href, delay = "", gradient }: CategoryCardProps) => {
  return (
    <a
      href={href}
      className={cn(
        "group relative flex flex-col items-center justify-center p-8 rounded-2xl",
        "bg-card/60 backdrop-blur-sm border border-border/50",
        "card-hover cursor-pointer",
        "opacity-0 animate-fade-in-up",
        delay
      )}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
      
      {/* Icon container */}
      <div className={cn(
        "relative w-24 h-24 rounded-full flex items-center justify-center mb-6",
        "transition-transform duration-500 group-hover:scale-110",
        gradient
      )}>
        <Icon className="w-12 h-12 text-foreground" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* Decorative line */}
      <div className="mt-4 w-0 h-0.5 bg-accent group-hover:w-16 transition-all duration-500" />
    </a>
  );
};

export default CategoryCard;
