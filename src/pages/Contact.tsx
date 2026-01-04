import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "الهاتف",
    value: "+20 123 456 7890",
    href: "tel:+201234567890",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@shafe3academy.com",
    href: "mailto:info@shafe3academy.com",
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "+20 123 456 7890",
    href: "https://wa.me/201151851788",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "السبت - الخميس: 9 ص - 10 م",
    href: null,
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-gradient-hero bg-pattern-islamic">
      <PageHero
        title="تواصل معنا"
        subtitle="نحن هنا للإجابة على جميع استفساراتك"
        icon={Mail}
      />

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card/60 border border-border/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              أرسل لنا رسالة
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="أدخل رقم هاتفك"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="أدخل بريدك الإلكتروني"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  الموضوع
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-foreground"
                >
                  <option value="">اختر الموضوع</option>
                  <option value="registration">التسجيل في برنامج</option>
                  <option value="ijaza">الاستفسار عن الإجازات</option>
                  <option value="technical">دعم فني</option>
                  <option value="suggestion">اقتراح أو شكوى</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  "جاري الإرسال..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    إرسال الرسالة
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card/60 border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                معلومات التواصل
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-accent transition-colors"
                          dir={item.title === "البريد الإلكتروني" || item.title === "الهاتف" ? "ltr" : "rtl"}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card/60 border border-border/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">موقعنا</h3>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">القاهرة، مصر</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/201151851788"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366] rounded-2xl p-6 text-center hover:bg-[#22c55e] transition-colors"
            >
              <MessageCircle className="w-10 h-10 mx-auto mb-3 text-foreground" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                تواصل مباشر عبر واتساب
              </h3>
              <p className="text-foreground/80">
                للرد السريع على استفساراتك
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
