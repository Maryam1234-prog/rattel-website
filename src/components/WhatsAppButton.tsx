import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/201151851788"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] text-foreground font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
      <span className="hidden sm:inline">تواصل معنا</span>
    </a>
  );
};

export default WhatsAppButton;
