import { BookOpen, Target, Eye, Users, Award, Globe, Heart, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";

const stats = [
  { value: "+5000", label: "طالب وطالبة" },
  { value: "+100", label: "معلم ومعلمة" },
  { value: "+500", label: "إجازة صادرة" },
  { value: "+20", label: "دولة" },
];

const values = [
  {
    title: "الإتقان",
    description: "نسعى للإتقان في كل ما نقدمه من خدمات تعليمية",
    icon: Star,
  },
  {
    title: "الأمانة",
    description: "نحافظ على أمانة تعليم كتاب الله كما أُنزل",
    icon: Heart,
  },
  {
    title: "التيسير",
    description: "نيسر تعلم القرآن للجميع بأساليب حديثة",
    icon: Globe,
  },
  {
    title: "التميز",
    description: "نسعى للتميز والتطوير المستمر في خدماتنا",
    icon: Award,
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-hero bg-pattern-islamic">
      <PageHero
        title="عن أكاديمية رتِّل"
        subtitle="رحلة في خدمة كتاب الله"
        icon={BookOpen}
      />

      {/* Story Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/60 border border-border/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">قصتنا</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                انطلقت أكاديمية رتِّل من رؤية واضحة: تيسير تعلم القرآن الكريم لكل مسلم 
                في أي مكان في العالم. بدأنا كمجموعة صغيرة من الحفاظ المتحمسين لنشر 
                كتاب الله، وسرعان ما تحولنا إلى أكاديمية متكاملة تخدم آلاف الطلاب.
              </p>
              <p>
                نؤمن بأن التكنولوجيا يمكن أن تكون وسيلة فعالة لخدمة القرآن الكريم، 
                لذلك طورنا منصة تعليمية متطورة تجمع بين الأصالة في المنهج والحداثة 
                في الأساليب.
              </p>
              <p>
                اليوم، نفخر بأننا أصبحنا وجهة موثوقة لآلاف الطلاب والطالبات من مختلف 
                أنحاء العالم، ونسعى لأن نكون الأكاديمية الرائدة في تعليم القرآن عن بعد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card/60 border border-border/50 rounded-2xl p-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">رؤيتنا</h3>
            <p className="text-muted-foreground leading-relaxed">
              أن نكون الأكاديمية الرائدة عالمياً في تعليم القرآن الكريم عن بعد، 
              ونساهم في إخراج جيل من الحفاظ المتقنين الذين يحملون كتاب الله 
              علماً وعملاً.
            </p>
          </div>

          <div className="bg-card/60 border border-border/50 rounded-2xl p-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">رسالتنا</h3>
            <p className="text-muted-foreground leading-relaxed">
              تيسير تعلم القرآن الكريم وحفظه لكل مسلم في أي مكان، من خلال 
              توفير بيئة تعليمية متميزة ومعلمين مؤهلين وتقنيات حديثة تخدم 
              العملية التعليمية.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/60 border border-border/50 rounded-xl p-6 text-center card-hover"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          قيمنا
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <FeatureCard
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-card/60 border border-border/50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <Users className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">فريقنا</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            يضم فريقنا نخبة من الحفاظ والحافظات المجازين بأسانيد متصلة، 
            إضافة إلى متخصصين في التربية والتعليم. جميعهم يشتركون في 
            حب كتاب الله والرغبة في خدمته ونشره.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
