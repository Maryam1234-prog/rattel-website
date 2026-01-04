import { Link } from "react-router-dom";
import { BookOpen, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <span className="text-xl font-bold text-gradient">أكاديمية رتِّل</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              أكاديمية متخصصة في تعليم القرآن الكريم وعلومه عن بعد، نقدم برامج متميزة للرجال والنساء والأطفال مع إجازات معتمدة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/men" className="text-muted-foreground hover:text-accent transition-colors">
                  برامج الرجال
                </Link>
              </li>
              <li>
                <Link to="/women" className="text-muted-foreground hover:text-accent transition-colors">
                  برامج النساء
                </Link>
              </li>
              <li>
                <Link to="/children" className="text-muted-foreground hover:text-accent transition-colors">
                  برامج الأطفال
                </Link>
              </li>
              <li>
                <Link to="/ijazat" className="text-muted-foreground hover:text-accent transition-colors">
                  الإجازات القرآنية
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span dir="ltr">+20 1026858283</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>rattelacademy@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>القاهرة، مصر</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">تابعنا</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            جميع الحقوق محفوظة © {new Date().getFullYear()} أكاديمية رتِّل لتعليم القرآن الكريم
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
