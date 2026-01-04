import { Clock, Users, BookOpen, CheckCircle } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
  students: string;
  features: string[];
  price: string;
  featured?: boolean;
}

const ProgramCard = ({
  title,
  description,
  duration,
  students,
  features,
  price,
  featured = false,
}: ProgramCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-6 transition-all duration-500 card-hover ${
        featured
          ? "bg-gradient-to-br from-primary/20 to-emerald-dark/20 border-2 border-accent/50"
          : "bg-card/60 border border-border/50"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 right-6 px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">
          الأكثر طلباً
        </div>
      )}

      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-accent" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4 text-accent" />
          <span>{students}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-border/50 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-accent">{price}</span>
            <span className="text-muted-foreground text-sm mr-2">/ شهرياً</span>
          </div>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors">
            سجل الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
