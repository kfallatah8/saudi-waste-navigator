import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Package,
  Navigation,
  Camera,
  QrCode,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Menu,
  User,
  Bell,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const tasks = [
  {
    id: 1,
    type: "delivery",
    typeAr: "توصيل",
    typeEn: "Delivery",
    containerId: "CNT-2847",
    customer: "شركة أحمد للإنشاءات",
    address: "الرياض، حي العليا، شارع التحلية",
    time: "09:00 - 10:00",
    status: "current",
    statusAr: "جارية",
    statusEn: "In Progress",
  },
  {
    id: 2,
    type: "pickup",
    typeAr: "استلام",
    typeEn: "Pickup",
    containerId: "CNT-1923",
    customer: "مؤسسة الخليج",
    address: "الرياض، حي الملز، شارع الإمام",
    time: "10:30 - 11:30",
    status: "pending",
    statusAr: "قادمة",
    statusEn: "Upcoming",
  },
  {
    id: 3,
    type: "delivery",
    typeAr: "توصيل",
    typeEn: "Delivery",
    containerId: "CNT-4512",
    customer: "شركة البناء الحديث",
    address: "الرياض، حي السليمانية، شارع الملك فهد",
    time: "12:00 - 13:00",
    status: "pending",
    statusAr: "قادمة",
    statusEn: "Upcoming",
  },
];

const statusStyles = {
  current: { bg: "bg-primary", text: "text-primary-foreground" },
  pending: { bg: "bg-muted", text: "text-muted-foreground" },
  completed: { bg: "bg-chart-1", text: "text-card" },
};

export default function DriverApp() {
  const [isArabic] = useState(true);
  const [activeTask, setActiveTask] = useState(tasks[0]);

  return (
    <div className="min-h-screen bg-background" dir={isArabic ? "rtl" : "ltr"}>
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
        <div className="flex items-center justify-between p-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="font-bold">WaslTrack</h1>
            <p className="text-xs opacity-80">{isArabic ? "تطبيق السائق" : "Driver App"}</p>
          </div>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </Button>
        </div>

        {/* Driver Info */}
        <div className="px-4 pb-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">{isArabic ? "محمد العتيبي" : "Mohammed Al-Otaibi"}</p>
            <p className="text-sm opacity-80">{isArabic ? "شاحنة هينو 500" : "Hino 500 Truck"}</p>
          </div>
          <Badge className="bg-primary-foreground/20 text-primary-foreground">
            {isArabic ? "متصل" : "Online"}
          </Badge>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="grid grid-cols-3 gap-2 p-4 bg-card border-b border-border">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">3</p>
          <p className="text-xs text-muted-foreground">{isArabic ? "مهام اليوم" : "Today's Tasks"}</p>
        </div>
        <div className="text-center border-x border-border">
          <p className="text-2xl font-bold text-chart-1">1</p>
          <p className="text-xs text-muted-foreground">{isArabic ? "مكتملة" : "Completed"}</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-secondary">2</p>
          <p className="text-xs text-muted-foreground">{isArabic ? "متبقية" : "Remaining"}</p>
        </div>
      </div>

      {/* Current Task */}
      <div className="p-4">
        <h2 className="font-semibold mb-3 flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          {isArabic ? "المهمة الحالية" : "Current Task"}
        </h2>
        <Card className="border-primary border-2">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <Badge className={cn(statusStyles.current.bg, statusStyles.current.text)}>
                  {isArabic ? activeTask.typeAr : activeTask.typeEn}
                </Badge>
                <p className="font-semibold mt-2">{activeTask.containerId}</p>
              </div>
              <p className="text-sm text-muted-foreground">{activeTask.time}</p>
            </div>
            
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <span>{activeTask.customer}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                <span>{activeTask.address}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="flex-col h-auto py-3">
                <Navigation className="w-5 h-5 mb-1" />
                <span className="text-xs">{isArabic ? "الملاحة" : "Navigate"}</span>
              </Button>
              <Button variant="outline" className="flex-col h-auto py-3">
                <Phone className="w-5 h-5 mb-1" />
                <span className="text-xs">{isArabic ? "اتصال" : "Call"}</span>
              </Button>
              <Button variant="outline" className="flex-col h-auto py-3">
                <QrCode className="w-5 h-5 mb-1" />
                <span className="text-xs">{isArabic ? "مسح QR" : "Scan QR"}</span>
              </Button>
              <Button variant="outline" className="flex-col h-auto py-3">
                <Camera className="w-5 h-5 mb-1" />
                <span className="text-xs">{isArabic ? "صورة" : "Photo"}</span>
              </Button>
            </div>

            <Button className="w-full mt-4">
              <CheckCircle className="w-4 h-4 ml-2" />
              {isArabic ? "إكمال المهمة" : "Complete Task"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Tasks */}
      <div className="p-4 pt-0">
        <h2 className="font-semibold mb-3 flex items-center gap-2">
          <Package className="w-4 h-4 text-secondary" />
          {isArabic ? "المهام القادمة" : "Upcoming Tasks"}
        </h2>
        <div className="space-y-3">
          {tasks.slice(1).map((task) => (
            <Card key={task.id} className="hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Package className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{task.containerId}</p>
                      <p className="text-xs text-muted-foreground">{task.customer}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <Badge variant="secondary" className="mb-1">
                      {isArabic ? task.typeAr : task.typeEn}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{task.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-2">
        <div className="grid grid-cols-4 gap-1">
          {[
            { icon: Package, label: isArabic ? "المهام" : "Tasks", active: true },
            { icon: MapPin, label: isArabic ? "الخريطة" : "Map", active: false },
            { icon: Clock, label: isArabic ? "السجل" : "History", active: false },
            { icon: User, label: isArabic ? "حسابي" : "Profile", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={cn(
                "flex flex-col items-center py-2 rounded-lg transition-colors",
                item.active ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Spacer for bottom nav */}
      <div className="h-20" />
    </div>
  );
}
