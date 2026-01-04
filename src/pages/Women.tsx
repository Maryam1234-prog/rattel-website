import { Users, Video, Clock, Award, Heart, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import FeatureCard from "@/components/FeatureCard";

const programs = [
  {
    title: "برنامج الحافظات",
    description: "حفظ القرآن الكريم كاملاً مع الإتقان والتجويد",
    duration: "24 شهر",
    students: "حلقات نسائية",
    price: "200 ج.م",
    features: [
      "معلمات متخصصات ومجازات",
      "حلقات صباحية ومسائية",
      "متابعة يومية مع المعلمة",
      "شهادة معتمدة عند الإتمام",
    ],
  },
  {
    title: "برنامج الأمهات",
    description: "برنامج مرن مصمم خصيصاً للأمهات المشغولات",
    duration: "36 شهر",
    students: "حلقات مرنة",
    price: "150 ج.م",
    featured: true,
    features: [
      "جدول مرن يناسب الأمهات",
      "حصص قصيرة ومكثفة",
      "إمكانية تعويض الحصص",
      "دعم ومتابعة مستمرة",
    ],
  },
  {
    title: "دورة التجويد للمبتدئات",
    description: "تعلم أحكام التجويد من الصفر",
    duration: "3 أشهر",
    students: "حلقات جماعية",
    price: "100 ج.م",
    features: [
      "شرح مبسط لأحكام التجويد",
      "تطبيق عملي على كل حكم",
      "اختبار نهائي وشهادة",
      "مجموعات صغيرة للتدريب",
    ],
  },
];

const features = [
  {
    title: "معلمات مجازات",
    description: "معلمات حاصلات على إجازات في القراءات من كبار المشايخ",
    icon: Award,
  },
  {
    title: "بيئة آمنة",
    description: "حلقات نسائية خاصة مع خصوصية تامة",
    icon: Heart,
  },
  {
    title: "أوقات مرنة",
    description: "حلقات صباحية ومسائية تناسب جميع الأوقات",
    icon: Clock,
  },
  {
    title: "تقنية متطورة",
    description: "منصة سهلة الاستخدام مع جودة عالية",
    icon: Video,
  },
];

const WomenPage = () => {
  return (
    <main className="min-h-screen bg-gradient-hero bg-pattern-islamic">
      <PageHero
        title="برامج النساء"
        subtitle="برامج متميزة لتعليم القرآن الكريم للنساء مع معلمات مجازات"
        icon={Users}
      />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          مميزات برامج النساء
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
          برامج مصممة خصيصاً لتناسب احتياجات المرأة المسلمة
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

export default WomenPage;
