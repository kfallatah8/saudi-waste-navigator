import { Package, Truck, AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "delivery",
    title: "تم تسليم حاوية",
    titleEn: "Container Delivered",
    description: "حاوية #2847 تم تسليمها للعميل أحمد للإنشاءات",
    descriptionEn: "Container #2847 delivered to Ahmed Construction",
    time: "منذ 5 دقائق",
    timeEn: "5 minutes ago",
    icon: Package,
    iconBg: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    type: "pickup",
    title: "جاري الاستلام",
    titleEn: "Pickup in Progress",
    description: "السائق محمد في الطريق لاستلام حاوية #1923",
    descriptionEn: "Driver Mohammed en route to pick up container #1923",
    time: "منذ 12 دقيقة",
    timeEn: "12 minutes ago",
    icon: Truck,
    iconBg: "bg-secondary/10 text-secondary",
  },
  {
    id: 3,
    type: "alert",
    title: "تنبيه: حاوية متأخرة",
    titleEn: "Alert: Overdue Container",
    description: "حاوية #3421 متأخرة عن موعد الاستلام بـ 2 يوم",
    descriptionEn: "Container #3421 is 2 days overdue for pickup",
    time: "منذ 30 دقيقة",
    timeEn: "30 minutes ago",
    icon: AlertTriangle,
    iconBg: "bg-destructive/10 text-destructive",
  },
  {
    id: 4,
    type: "complete",
    title: "اكتمال المهمة",
    titleEn: "Task Completed",
    description: "تم إكمال جولة جمع النفايات - المنطقة الشمالية",
    descriptionEn: "Waste collection route completed - North Zone",
    time: "منذ ساعة",
    timeEn: "1 hour ago",
    icon: CheckCircle,
    iconBg: "bg-chart-1/10 text-chart-1",
  },
];

interface RecentActivityProps {
  isArabic?: boolean;
}

export function RecentActivity({ isArabic = true }: RecentActivityProps) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <h3 className="font-semibold text-lg mb-4">
        {isArabic ? "النشاط الأخير" : "Recent Activity"}
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className={cn("p-2 rounded-lg h-fit", activity.iconBg)}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">
                {isArabic ? activity.title : activity.titleEn}
              </p>
              <p className="text-sm text-muted-foreground truncate">
                {isArabic ? activity.description : activity.descriptionEn}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {isArabic ? activity.time : activity.timeEn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
