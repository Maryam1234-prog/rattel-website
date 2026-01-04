import { User, Video, Clock, Award, Users, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import FeatureCard from "@/components/FeatureCard";

const programs = [
  {
    title: "برنامج الحفظ الكامل",
    description: "حفظ القرآن الكريم كاملاً مع التجويد والإتقان",
    duration: "24 شهر",
    students: "حلقات فردية",
    price: "200 ج.م",
    features: [
      "حصتان أسبوعياً مع معلم متخصص",
      "متابعة يومية للحفظ والمراجعة",
      "اختبارات دورية لقياس المستوى",
      "شهادة معتمدة عند الإتمام",
    ],
  },
  {
    title: "برنامج المراجعة والتثبيت",
    description: "للحفاظ الذين يريدون تثبيت حفظهم ومراجعته",
    duration: "12 شهر",
    students: "حلقات جماعية",
    price: "150 ج.م",
    featured: true,
    features: [
      "3 حصص أسبوعياً للمراجعة المكثفة",
      "تقنيات متقدمة للتثبيت",
      "مسابقات تحفيزية شهرية",
      "متابعة مستمرة من المشرفين",
    ],
  },
  {
    title: "برنامج التجويد المتقدم",
    description: "إتقان أحكام التجويد والقراءات",
    duration: "6 أشهر",
    students: "حلقات صغيرة",
    price: "180 ج.م",
    features: [
      "دراسة متن الجزرية",
      "تطبيق عملي على أحكام التجويد",
      "دراسة القراءات السبع",
      "إجازة في التجويد",
    ],
  },
];

const features = [
  {
    title: "معلمون متخصصون",
    description: "نخبة من الحفاظ المجازين ذوي الخبرة في التعليم عن بعد",
    icon: Users,
  },
  {
    title: "حلقات مرنة",
    description: "اختر الوقت المناسب لك مع جدول مرن يناسب عملك",
    icon: Clock,
  },
  {
    title: "منصة تعليمية متطورة",
    description: "تقنية حديثة لضمان جودة الصوت والصورة",
    icon: Video,
  },
  {
    title: "شهادات معتمدة",
    description: "شهادات وإجازات معتمدة من كبار القراء",
    icon: Award,
  },
];

const MenPage = () => {
  return (
    <main className="min-h-screen bg-gradient-hero bg-pattern-islamic">
      <PageHero
        title="برامج الرجال"
        subtitle="برامج متخصصة لتعليم وحفظ القرآن الكريم للرجال"
        icon={User}
      />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          لماذا تختار أكاديمية رتِّل؟
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
          البرامج المتاحة
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          اختر البرنامج المناسب لمستواك وأهدافك في حفظ القرآن الكريم
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MenPage;
