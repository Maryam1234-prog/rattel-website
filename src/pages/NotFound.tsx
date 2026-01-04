import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-gradient-hero bg-pattern-islamic px-4">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          الصفحة غير موجودة
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة. ربما تم نقلها أو حذفها.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors"
        >
          <Home className="w-5 h-5" />
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
