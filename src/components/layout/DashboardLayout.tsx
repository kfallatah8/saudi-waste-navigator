import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isArabic, setIsArabic] = useState(true);

  return (
    <div className={`min-h-screen bg-background ${isArabic ? "rtl" : "ltr"}`} dir={isArabic ? "rtl" : "ltr"}>
      <Sidebar isArabic={isArabic} />
      <div className="mr-64 transition-all duration-300">
        <Header isArabic={isArabic} onLanguageToggle={() => setIsArabic(!isArabic)} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
