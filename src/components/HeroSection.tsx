const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-pulse-slow animation-delay-200" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-fade-in-up">
          مرحـباً بـك فـي
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          <span className="text-gradient">أكاديمية رتِّل</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/90 opacity-0 animate-fade-in-up animation-delay-400">
          لتعليم القرآن الكريم وعلومه عن بعد
        </h2>

        {/* Decorative Quran icon */}
        <div className="mt-12 opacity-0 animate-fade-in-up animation-delay-600">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-emerald-dark border-2 border-accent/30 animate-float">
            <svg
              className="w-10 h-10 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
