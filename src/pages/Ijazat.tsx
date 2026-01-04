import { Award, BookOpen, GraduationCap, FileCheck, Users, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";

const ijazatTypes = [
  {
    title: "إجازة حفص عن عاصم",
    description: "الإجازة الأكثر شيوعاً في العالم الإسلامي",
    requirements: [
      "حفظ القرآن الكريم كاملاً",
      "إتقان أحكام التجويد",
      "قراءة ختمة كاملة على الشيخ المجيز",
      "اجتياز الاختبار النهائي",
    ],
    duration: "6-12 شهر",
  },
  {
    title: "إجازة القراءات السبع",
    description: "إجازة في القراءات السبع المتواترة",
    requirements: [
      "الحصول على إجازة في رواية واحدة أولاً",
      "دراسة الشاطبية",
      "قراءة ختمة بكل قراءة",
      "إتقان الفروقات بين القراءات",
    ],
    duration: "2-3 سنوات",
  },
  {
    title: "إجازة القراءات العشر",
    description: "إجازة شاملة في القراءات العشر الكبرى",
    requirements: [
      "الحصول على إجازة القراءات السبع",
      "دراسة الدرة والطيبة",
      "قراءة ختمة بكل قراءة",
      "إتقان تام لجميع الأوجه",
    ],
    duration: "3-5 سنوات",
  },
];

const features = [
  {
    title: "مشايخ معتمدون",
    description: "أصحاب أسانيد متصلة إلى رسول الله صلى الله عليه وسلم",
    icon: GraduationCap,
  },
  {
    title: "شهادات موثقة",
    description: "إجازات موثقة ومعترف بها دولياً",
    icon: FileCheck,
  },
  {
    title: "متابعة مستمرة",
    description: "متابعة فردية حتى الحصول على الإجازة",
    icon: Users,
  },
  {
    title: "منهج متكامل",
    description: "منهج علمي شامل في التجويد والقراءات",
    icon: BookOpen,
  },
];

const IjazatPage = () => {
  return (
    <main className="min-h-screen bg-gradient-hero bg-pattern-islamic">
      <PageHero
        title="الإجازات القرآنية"
        subtitle="احصل على إجازة في القرآن الكريم بسند متصل إلى النبي ﷺ"
        icon={Award}
      />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
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

      {/* Ijazat Types */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">
          أنواع الإجازات المتاحة
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          نقدم برامج إجازة متعددة لتناسب مستواك وأهدافك
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ijazatTypes.map((ijaza, index) => (
            <div
              key={index}
              className="bg-card/60 border border-border/50 rounded-2xl p-6 card-hover"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {ijaza.title}
              </h3>
              <p className="text-muted-foreground mb-4">{ijaza.description}</p>
              
              <div className="mb-4">
                <span className="text-sm text-accent font-medium">
                  المدة المتوقعة: {ijaza.duration}
                </span>
              </div>

              <h4 className="text-lg font-bold text-foreground mb-3">الشروط:</h4>
              <ul className="space-y-2">
                {ijaza.requirements.map((req, reqIndex) => (
                  <li key={reqIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors">
                استفسر الآن
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-primary/30 to-emerald-dark/30 border border-accent/30 rounded-2xl p-8 md:p-12 text-center">
          <GraduationCap className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ابدأ رحلتك نحو الإجازة
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            نحن نساعدك في كل خطوة من رحلتك نحو الحصول على إجازة في كتاب الله. 
            تواصل معنا لمعرفة المزيد عن برامج الإجازة.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold hover:bg-accent/90 transition-colors"
          >
            تواصل معنا
          </a>
        </div>
      </section>
    </main>
  );
};

export default IjazatPage;
