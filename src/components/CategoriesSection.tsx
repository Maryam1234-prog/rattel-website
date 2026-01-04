import { User, Users, Baby, Award } from "lucide-react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "رجـــال",
    icon: User,
    href: "/men",
    gradient: "bg-gradient-to-br from-primary to-emerald-dark",
    delay: "animation-delay-200",
  },
  {
    title: "نساء",
    icon: Users,
    href: "/women",
    gradient: "bg-gradient-to-br from-emerald-light to-primary",
    delay: "animation-delay-400",
  },
  {
    title: "أطفال",
    icon: Baby,
    href: "/children",
    gradient: "bg-gradient-to-br from-accent/80 to-gold",
    delay: "animation-delay-600",
  },
  {
    title: "إجازات",
    icon: Award,
    href: "/ijazat",
    gradient: "bg-gradient-to-br from-gold to-accent",
    delay: "animation-delay-800",
  },
];

const CategoriesSection = () => {
  return (
    <section className="relative px-6 py-16">
      {/* Section title */}
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-muted-foreground opacity-0 animate-fade-in-up">
          من سيقوم بحفظ القرآن الكريم؟
        </h3>
        <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
      </div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            icon={category.icon}
            href={category.href}
            gradient={category.gradient}
            delay={category.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
