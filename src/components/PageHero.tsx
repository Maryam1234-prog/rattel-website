import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

const PageHero = ({ title, subtitle, icon: Icon }: PageHeroProps) => {
  return (
    <section className="relative py-20 px-6 text-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-dark mb-6 animate-float">
          <Icon className="w-10 h-10 text-accent" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;
