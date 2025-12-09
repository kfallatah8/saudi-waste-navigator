import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  Truck,
  MapPin,
  Users,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Calendar,
  BarChart3,
  Headphones,
  Building2,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navigation = [
  { name: "لوحة التحكم", nameEn: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "الحاويات", nameEn: "Containers", href: "/containers", icon: Package },
  { name: "الخريطة", nameEn: "Map", href: "/map", icon: MapPin },
  { name: "السائقين", nameEn: "Drivers", href: "/drivers", icon: Truck },
  { name: "الجدول", nameEn: "Schedule", href: "/schedule", icon: Calendar },
  { name: "العملاء", nameEn: "Customers", href: "/customers", icon: Users },
  { name: "الفواتير", nameEn: "Invoices", href: "/invoices", icon: FileText },
  { name: "التقارير", nameEn: "Reports", href: "/reports", icon: BarChart3 },
  { name: "الشركات", nameEn: "Companies", href: "/companies", icon: Building2 },
  { name: "الدعم", nameEn: "Support", href: "/support", icon: Headphones },
  { name: "الإعدادات", nameEn: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps {
  isArabic?: boolean;
}

export function Sidebar({ isArabic = true }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "fixed top-0 right-0 z-40 h-screen bg-sidebar border-l border-sidebar-border transition-all duration-300 ease-in-out",
          collapsed ? "w-[72px]" : "w-64"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border/50">
            <div className={cn(
              "flex items-center gap-3 overflow-hidden transition-all duration-300",
              collapsed ? "opacity-0 w-0" : "opacity-100"
            )}>
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                <Package className="w-5 h-5 text-primary-foreground" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary opacity-50 blur-md -z-10" />
              </div>
              <div>
                <h1 className="font-bold text-sidebar-foreground">WaslTrack</h1>
                <p className="text-[10px] text-sidebar-foreground/50">وصل تراك</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 shrink-0"
            >
              {collapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin">
            <ul className="space-y-1 px-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <NavLink
                        to={item.href}
                        className={cn(
                          "group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-all duration-200",
                          collapsed && "justify-center px-2"
                        )}
                        activeClassName="bg-gradient-to-l from-sidebar-primary/20 to-sidebar-primary/10 text-sidebar-primary-foreground border-r-2 border-sidebar-primary hover:bg-sidebar-primary/20"
                      >
                        <item.icon className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        <span className={cn(
                          "text-sm font-medium transition-all duration-300",
                          collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                        )}>
                          {isArabic ? item.name : item.nameEn}
                        </span>
                      </NavLink>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="left" className="bg-sidebar-accent border-sidebar-border">
                        <p>{isArabic ? item.name : item.nameEn}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </li>
              ))}
            </ul>
          </nav>

          {/* User section */}
          <div className="border-t border-sidebar-border/50 p-3">
            <div className={cn(
              "flex items-center gap-3 p-2 rounded-xl hover:bg-sidebar-accent/50 transition-colors cursor-pointer",
              collapsed && "justify-center"
            )}>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center ring-2 ring-sidebar-accent">
                  <span className="text-sm font-semibold text-primary-foreground">أ</span>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full border-2 border-sidebar" />
              </div>
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-sidebar-foreground truncate">أحمد محمد</p>
                  <p className="text-xs text-sidebar-foreground/50 truncate">مدير العمليات</p>
                </div>
              )}
              {!collapsed && (
                <Button variant="ghost" size="icon" className="h-8 w-8 text-sidebar-foreground/50 hover:text-sidebar-foreground hover:bg-sidebar-accent/50">
                  <LogOut className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}
