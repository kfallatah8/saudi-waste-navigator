import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Search, Phone, MapPin, Star, MoreHorizontal, Truck, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const drivers = [
  {
    id: 1,
    name: "محمد العتيبي",
    nameEn: "Mohammed Al-Otaibi",
    phone: "+966 50 123 4567",
    status: "active",
    statusAr: "متصل",
    statusEn: "Online",
    rating: 4.8,
    completedTasks: 156,
    currentLocation: "الرياض - حي العليا",
    vehicle: "شاحنة هينو 500",
    avatar: "م",
  },
  {
    id: 2,
    name: "أحمد الشمري",
    nameEn: "Ahmed Al-Shammari",
    phone: "+966 55 234 5678",
    status: "active",
    statusAr: "متصل",
    statusEn: "Online",
    rating: 4.9,
    completedTasks: 203,
    currentLocation: "الرياض - حي الملز",
    vehicle: "شاحنة مرسيدس أكتروس",
    avatar: "أ",
  },
  {
    id: 3,
    name: "خالد القحطاني",
    nameEn: "Khalid Al-Qahtani",
    phone: "+966 54 345 6789",
    status: "break",
    statusAr: "استراحة",
    statusEn: "On Break",
    rating: 4.7,
    completedTasks: 98,
    currentLocation: "الرياض - حي السليمانية",
    vehicle: "شاحنة إيسوزو NPR",
    avatar: "خ",
  },
  {
    id: 4,
    name: "فهد الدوسري",
    nameEn: "Fahad Al-Dosari",
    phone: "+966 56 456 7890",
    status: "offline",
    statusAr: "غير متصل",
    statusEn: "Offline",
    rating: 4.6,
    completedTasks: 145,
    currentLocation: "غير متاح",
    vehicle: "شاحنة مان TGS",
    avatar: "ف",
  },
  {
    id: 5,
    name: "عبدالله الحربي",
    nameEn: "Abdullah Al-Harbi",
    phone: "+966 59 567 8901",
    status: "active",
    statusAr: "متصل",
    statusEn: "Online",
    rating: 4.5,
    completedTasks: 87,
    currentLocation: "الرياض - حي الورود",
    vehicle: "شاحنة فولفو FH",
    avatar: "ع",
  },
  {
    id: 6,
    name: "سعود المالكي",
    nameEn: "Saud Al-Maliki",
    phone: "+966 58 678 9012",
    status: "ontask",
    statusAr: "في مهمة",
    statusEn: "On Task",
    rating: 4.9,
    completedTasks: 178,
    currentLocation: "الرياض - حي النخيل",
    vehicle: "شاحنة سكانيا R450",
    avatar: "س",
  },
];

const statusStyles = {
  active: { bg: "bg-primary/10", text: "text-primary", dot: "bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]" },
  break: { bg: "bg-chart-3/10", text: "text-chart-3", dot: "bg-chart-3 shadow-[0_0_8px_hsl(var(--chart-3)/0.5)]" },
  offline: { bg: "bg-muted", text: "text-muted-foreground", dot: "bg-muted-foreground" },
  ontask: { bg: "bg-secondary/10", text: "text-secondary", dot: "bg-secondary shadow-[0_0_8px_hsl(var(--secondary)/0.5)]" },
};

export default function Drivers() {
  const [isArabic] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filteredDrivers = selectedFilter
    ? drivers.filter(d => d.status === selectedFilter)
    : drivers;

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {isArabic ? "إدارة السائقين" : "Driver Management"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isArabic
              ? "إدارة ومتابعة جميع السائقين"
              : "Manage and track all drivers"}
          </p>
        </div>
        <Button className="shrink-0 rounded-xl shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4 ml-2" />
          {isArabic ? "إضافة سائق" : "Add Driver"}
        </Button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={isArabic ? "بحث بالاسم أو الرقم..." : "Search by name or number..."}
            className="pr-10 rounded-xl"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {[
            { key: null, label: isArabic ? "الكل" : "All", count: drivers.length },
            { key: "active", label: isArabic ? "متصل" : "Online", count: drivers.filter(d => d.status === "active").length },
            { key: "ontask", label: isArabic ? "في مهمة" : "On Task", count: drivers.filter(d => d.status === "ontask").length },
            { key: "offline", label: isArabic ? "غير متصل" : "Offline", count: drivers.filter(d => d.status === "offline").length },
          ].map((filter) => (
            <Button
              key={filter.key || "all"}
              variant={selectedFilter === filter.key ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter.key)}
              className="rounded-full"
            >
              {filter.label} ({filter.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Driver Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDrivers.map((driver) => {
          const style = statusStyles[driver.status as keyof typeof statusStyles];
          return (
            <Card key={driver.id} className="group border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center transition-transform group-hover:scale-105">
                        <span className="text-xl font-bold gradient-text">{driver.avatar}</span>
                      </div>
                      <span className={cn("absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card", style.dot)} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{isArabic ? driver.name : driver.nameEn}</h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", style.bg, style.text)}>
                          {isArabic ? driver.statusAr : driver.statusEn}
                        </span>
                      </div>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-xl">
                      <DropdownMenuItem>{isArabic ? "عرض الملف" : "View Profile"}</DropdownMenuItem>
                      <DropdownMenuItem>{isArabic ? "تعيين مهمة" : "Assign Task"}</DropdownMenuItem>
                      <DropdownMenuItem>{isArabic ? "سجل المهام" : "Task History"}</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span dir="ltr" className="font-medium">{driver.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>{driver.currentLocation}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-chart-3/10 flex items-center justify-center">
                      <Star className="w-4 h-4 text-chart-3" />
                    </div>
                    <span className="font-medium">{driver.rating}</span>
                    <span className="text-xs">({driver.completedTasks} {isArabic ? "مهمة" : "tasks"})</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Truck className="w-4 h-4" />
                    <span>{driver.vehicle}</span>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8 rounded-lg text-primary hover:text-primary hover:bg-primary/10">
                    <Navigation className="w-3 h-3 ml-1" />
                    {isArabic ? "تتبع" : "Track"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
