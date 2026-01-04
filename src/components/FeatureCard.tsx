import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="bg-card/60 border border-border/50 rounded-xl p-6 card-hover">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
