import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Package,
  Truck,
  MapPin,
  BarChart3,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowLeft,
  Menu,
  X,
  Play,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: MapPin,
    titleAr: "تتبع GPS مباشر",
    titleEn: "Live GPS Tracking",
    descAr: "تتبع جميع الحاويات والشاحنات في الوقت الحقيقي على خريطة تفاعلية",
    descEn: "Track all containers and trucks in real-time on an interactive map",
  },
  {
    icon: Package,
    titleAr: "إدارة الحاويات",
    titleEn: "Container Management",
    descAr: "إدارة شاملة للحاويات من التأجير حتى الاستلام مع تنبيهات ذكية",
    descEn: "Complete container management from rental to pickup with smart alerts",
  },
  {
    icon: Truck,
    titleAr: "تحسين المسارات",
    titleEn: "Route Optimization",
    descAr: "خوارزميات ذكية لتحسين مسارات السائقين وتوفير الوقت والوقود",
    descEn: "Smart algorithms to optimize driver routes, saving time and fuel",
  },
  {
    icon: BarChart3,
    titleAr: "تقارير وتحليلات",
    titleEn: "Reports & Analytics",
    descAr: "لوحات تحكم متقدمة وتقارير مفصلة لاتخاذ قرارات أفضل",
    descEn: "Advanced dashboards and detailed reports for better decisions",
  },
  {
    icon: Shield,
    titleAr: "منع المخالفات",
    titleEn: "Fine Prevention",
    descAr: "تنبيهات استباقية لتجنب مخالفات البلدية والتأخير",
    descEn: "Proactive alerts to avoid municipal fines and delays",
  },
  {
    icon: Zap,
    titleAr: "أتمتة ذكية",
    titleEn: "Smart Automation",
    descAr: "ذكاء اصطناعي للتنبؤ وأتمتة العمليات اليومية",
    descEn: "AI-powered predictions and daily operations automation",
  },
];

const stats = [
  { valueAr: "500+", valueEn: "500+", labelAr: "حاوية مُتتبعة", labelEn: "Tracked Containers" },
  { valueAr: "50+", valueEn: "50+", labelAr: "شركة تثق بنا", labelEn: "Trusted Companies" },
  { valueAr: "98%", valueEn: "98%", labelAr: "رضا العملاء", labelEn: "Customer Satisfaction" },
  { valueAr: "40%", valueEn: "40%", labelAr: "توفير في التكاليف", labelEn: "Cost Savings" },
];

export default function Landing() {
  const [isArabic, setIsArabic] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={cn("min-h-screen bg-background", isArabic && "rtl")} dir={isArabic ? "rtl" : "ltr"}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                <Package className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-lg">WaslTrack</span>
                <span className="text-[10px] text-muted-foreground block">وصل تراك</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-underline">
                {isArabic ? "المميزات" : "Features"}
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-underline">
                {isArabic ? "الأسعار" : "Pricing"}
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-underline">
                {isArabic ? "تواصل معنا" : "Contact"}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsArabic(!isArabic)}
                className="text-muted-foreground rounded-xl"
              >
                <Globe className="h-5 w-5" />
              </Button>
              <Link to="/dashboard">
                <Button variant="outline" className="hidden sm:inline-flex rounded-xl">
                  {isArabic ? "تسجيل الدخول" : "Sign In"}
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button className="hidden sm:inline-flex rounded-xl shadow-lg shadow-primary/20">
                  {isArabic ? "ابدأ الآن" : "Get Started"}
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-xl"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl p-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium">{isArabic ? "المميزات" : "Features"}</a>
              <a href="#pricing" className="text-sm font-medium">{isArabic ? "الأسعار" : "Pricing"}</a>
              <a href="#contact" className="text-sm font-medium">{isArabic ? "تواصل معنا" : "Contact"}</a>
              <Link to="/dashboard">
                <Button className="w-full rounded-xl">{isArabic ? "ابدأ الآن" : "Get Started"}</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="WaslTrack Hero" className="w-full h-full object-cover opacity-5" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-24 md:py-36 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-4 py-1.5">
              <Star className="w-3 h-3 mr-1 fill-primary" />
              {isArabic ? "🇸🇦 صنع في السعودية" : "🇸🇦 Made in Saudi Arabia"}
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              {isArabic ? (
                <>
                  إدارة المخلفات
                  <span className="gradient-text"> بذكاء</span>
                </>
              ) : (
                <>
                  Smart
                  <span className="gradient-text"> Waste Management</span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {isArabic
                ? "منصة متكاملة لشركات إدارة المخلفات في المملكة العربية السعودية. تتبع الحاويات، إدارة السائقين، وأتمتة العمليات في مكان واحد."
                : "Complete platform for waste management companies in Saudi Arabia. Track containers, manage drivers, and automate operations in one place."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 rounded-xl shadow-xl shadow-primary/30 h-14">
                  {isArabic ? "ابدأ تجربتك المجانية" : "Start Free Trial"}
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 rounded-xl h-14 group">
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                {isArabic ? "شاهد العرض" : "Watch Demo"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <p className="text-4xl md:text-5xl font-bold gradient-text transition-transform group-hover:scale-105">
                  {isArabic ? stat.valueAr : stat.valueEn}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {isArabic ? stat.labelAr : stat.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 rounded-full">{isArabic ? "المميزات" : "Features"}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              {isArabic ? "كل ما تحتاجه في منصة واحدة" : "Everything You Need in One Platform"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {isArabic
                ? "أدوات قوية لإدارة عمليات المخلفات بكفاءة عالية"
                : "Powerful tools to manage waste operations with high efficiency"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group border-border/50 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">
                    {isArabic ? feature.titleAr : feature.titleEn}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {isArabic ? feature.descAr : feature.descEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95" />
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="ctaGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#ctaGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground tracking-tight">
            {isArabic ? "جاهز للبدء؟" : "Ready to Get Started?"}
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg">
            {isArabic
              ? "انضم إلى مئات الشركات التي تثق في وصل تراك لإدارة عملياتها"
              : "Join hundreds of companies that trust WaslTrack to manage their operations"}
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="secondary" className="text-lg px-10 rounded-xl h-14 shadow-xl">
              {isArabic ? "ابدأ الآن مجاناً" : "Start Free Now"}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Package className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">WaslTrack</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {isArabic
                ? "© 2024 وصل تراك. جميع الحقوق محفوظة."
                : "© 2024 WaslTrack. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
