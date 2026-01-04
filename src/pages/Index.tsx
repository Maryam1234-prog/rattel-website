import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import { BookOpen, Users, Award, Video, Star, CheckCircle } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    title: "معلمون مجازون",
    description: "نخبة من الحفاظ المجازين بأسانيد متصلة إلى رسول الله ﷺ",
    icon: Award,
  },
  {
    title: "حلقات مباشرة",
    description: "حلقات تفاعلية مباشرة مع المعلم عبر الإنترنت",
    icon: Video,
  },
  {
    title: "آلاف الطلاب",
    description: "أكثر من 5000 طالب وطالبة من مختلف أنحاء العالم",
    icon: Users,
  },
  {
    title: "شهادات معتمدة",
    description: "شهادات وإجازات معتمدة عند إتمام البرامج",
    icon: BookOpen,
  },
];

const testimonials = [
  {
    name: "أحمد محمد",
    role: "طالب - برنامج الحفظ الكامل",
    content: "بفضل الله ثم أكاديمية رتِّل، أتممت حفظ القرآن الكريم في عامين. المعلمون متميزون والمتابعة ممتازة.",
  },
  {
    name: "فاطمة علي",
    role: "طالبة - برنامج الأمهات",
    content: "البرنامج المرن ساعدني كأم على الاستمرار في الحفظ رغم انشغالي. شكراً لأكاديمية رتِّل.",
  },
  {
    name: "محمد أحمد",
    role: "ولي أمر",
    content: "أولادي يحبون حلقاتهم في الأكاديمية. الأسلوب التفاعلي جعلهم يقبلون على الحفظ بحب.",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-hero bg-pattern-islamic">
      <HeroSection />
      <CategoriesSection />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          لماذا تختار أكاديمية رتِّل؟
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          نقدم لك تجربة تعليمية متميزة تجمع بين الأصالة والحداثة
        </p>
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

      {/* How it Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          كيف تبدأ رحلتك معنا؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: "١", title: "سجل معنا", desc: "اختر البرنامج المناسب وسجل بياناتك" },
            { step: "٢", title: "حدد موعدك", desc: "اختر الأوقات المناسبة لحلقاتك" },
            { step: "٣", title: "ابدأ التعلم", desc: "انضم لحلقتك وابدأ رحلة الحفظ" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          ماذا يقول طلابنا؟
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          آراء بعض طلابنا وأولياء الأمور
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/60 border border-border/50 rounded-2xl p-6 card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-primary/30 to-emerald-dark/30 border border-accent/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ابدأ رحلتك مع القرآن اليوم
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            انضم إلى آلاف الطلاب الذين بدأوا رحلتهم مع أكاديمية رتِّل. 
            سجل الآن واحصل على حصة تجريبية مجانية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold hover:bg-accent/90 transition-colors"
            >
              سجل الآن
            </a>
            <a
              href="/about"
              className="inline-block px-8 py-4 bg-muted text-foreground rounded-lg font-bold hover:bg-muted/80 transition-colors"
            >
              اعرف المزيد
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
