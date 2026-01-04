import { Baby, Gamepad2, Star, Trophy, Clock, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import FeatureCard from "@/components/FeatureCard";

const programs = [
  {
    title: "برنامج البراعم (4-7 سنوات)",
    description: "تعليم الحروف والقراءة مع حفظ قصار السور",
    duration: "12 شهر",
    students: "حلقات صغيرة",
    price: "120 ج.م",
    features: [
      "تعلم الحروف بطريقة تفاعلية",
      "حفظ جزء عم مع التجويد",
      "ألعاب تعليمية ممتعة",
      "تقارير دورية لأولياء الأمور",
    ],
  },
  {
    title: "برنامج الزهور (8-12 سنة)",
    description: "حفظ القرآن الكريم مع التأسيس في التجويد",
    duration: "24 شهر",
    students: "حلقات متوسطة",
    price: "150 ج.م",
    featured: true,
    features: [
      "منهج متدرج للحفظ",
      "تأسيس قوي في التجويد",
      "مسابقات تحفيزية شهرية",
      "شهادات تقدير ومكافآت",
    ],
  },
  {
    title: "برنامج النجوم (13-17 سنة)",
    description: "برنامج مكثف للمراهقين لحفظ القرآن كاملاً",
    duration: "36 شهر",
    students: "حلقات متقدمة",
    price: "180 ج.م",
    features: [
      "حفظ مكثف مع المراجعة",
      "دراسة علوم القرآن",
      "إعداد للإجازة",
      "توجيه ودعم نفسي",
    ],
  },
];

const features = [
  {
    title: "تعليم تفاعلي",
    description: "أساليب تعليمية ممتعة تناسب الأطفال مع ألعاب وأنشطة",
    icon: Gamepad2,
  },
  {
    title: "معلمون متخصصون",
    description: "معلمون مدربون على التعامل مع الأطفال بأساليب تربوية",
    icon: Heart,
  },
  {
    title: "مكافآت تحفيزية",
    description: "نظام نقاط ومكافآت لتحفيز الأطفال على التقدم",
    icon: Trophy,
  },
  {
    title: "حصص قصيرة",
    description: "حصص مدتها 30-45 دقيقة تناسب تركيز الأطفال",
    icon: Clock,
  },
];

const ChildrenPage = () => {
  return (
    <main className="min-h-screen bg-gradient-hero bg-pattern-islamic">
      <PageHero
        title="برامج الأطفال"
        subtitle="رحلة ممتعة لأطفالك في حفظ كتاب الله"
        icon={Baby}
      />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          لماذا يحب الأطفال أكاديمية رتِّل؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">
          برامجنا حسب العمر
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          برامج مصممة بعناية لتناسب كل مرحلة عمرية
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </section>

      {/* Parent Note */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-card/60 border border-accent/30 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <Star className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            رسالة لأولياء الأمور
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            نحن نؤمن بأن تعليم القرآن للأطفال يجب أن يكون رحلة ممتعة ومحببة. 
            نستخدم أساليب تربوية حديثة مع الحفاظ على الأصالة في التعليم. 
            نقدم تقارير دورية لأولياء الأمور ونتواصل معكم باستمرار لضمان تقدم أطفالكم.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ChildrenPage;
